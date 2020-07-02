import React from 'react';

class SimpleButton extends React.Component{
    constructor(props){
        super();
        this.state = {
            btnText: 'Click Me!'
        }
    }

    handleClick = () => {
        this.setState({
            btnText: 'Clicked!'
        })
    }

    render() {
    return <button onClick={this.handleClick} className="btn btn-primary">{this.state.btnText}</button>
    }
}

export default function withFeatureToggle(featureName, WrappedComponent, config){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                isFeatureEnabled: config[featureName]
            }
        }

        showAlert = ()=>{
            alert("Hi amigos!!!");
        }

        render(){
            if(this.state.isFeatureEnabled){
                return (
                    <div onClick={this.showAlert}>
                        <WrappedComponent {...this.props}/>
                    </div>
                )
            } else {
                return <WrappedComponent {...this.props}/>;
            }
        }
    }
}

const featureConfig = {
    'showAlert' : true
}

export const FeatureToggledButton = withFeatureToggle('showAlert', SimpleButton, featureConfig);