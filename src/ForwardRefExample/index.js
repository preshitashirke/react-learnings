import React from 'react';

class SimpleButton extends React.Component{
    constructor(){
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
        return <button ref={this.props.forwadedRef} onClick={this.handleClick} className="btn btn-primary">{this.state.btnText}</button>
    }
}

export default function withFeatureToggle(featureName, WrappedComponent, config){
    class WithFeatureToggle extends React.Component{
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
            const { forwadedRef, ...restProps} = this.props;
            if(this.state.isFeatureEnabled){
                return (
                    <div onClick={this.showAlert}>
                        <WrappedComponent forwadedRef={forwadedRef} {...restProps}/>
                    </div>
                )
            } else {
                return <WrappedComponent forwadedRef={forwadedRef} {...restProps}/>;
            }
        }
    }

    return React.forwardRef((props, ref) => (
        <WithFeatureToggle forwadedRef={ref} {...props}/>
    ));
}

const featureConfig = {
    'showAlert' : true
}

export const FeatureToggledButtonWithRef = withFeatureToggle('showAlert', SimpleButton, featureConfig);