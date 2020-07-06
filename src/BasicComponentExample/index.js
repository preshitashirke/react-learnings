import React from 'react';

export default class BasicComponent extends React.Component{

    constructor(props){
        super();
        this.state = {
            name: props.name,
            showGreeting: false
        }
        //this.sayHello = this.sayHello.bind(this);
    }

    sayHello = () => {
        this.setState({
            showGreeting: true
        }, () => {
            if(this.state.showGreeting){
                console.log("Greeting is shown");
            }
        })
        console.log("Greeting is not shown yet");
    }

    render(){
        return (
            <React.Fragment>{/*wrap multiple elements*/}
                {/*<div>
                    <!-- This doesn't work! -->
                </div>*/}
                <div className="mb-3">My name is {this.state.name}</div>
                <button className="btn btn-primary mb-3" onClick={this.sayHello}>Say hello</button>
                {/*<button className="btn btn-primary" onClick={this.sayHello.bind(this)}>Say hello</button>*/}
                 {/*<button className="btn btn-primary" onClick={() => this.sayHello()}>Say hello</button>*/}
                {this.state.showGreeting && <div>Hello {this.state.name}</div>}
            </React.Fragment>
        );
    }
}

BasicComponent.defaultProps = {
    name: 'Preshita'
}

