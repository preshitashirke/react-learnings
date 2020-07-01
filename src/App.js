import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicComponent from '../src/BasicComponentExample';
import PureComponentExample from '../src/PureComponentExample';
import MemoExample from '../src/MemoExample';
import RenderPropExample, { SimpleList, TagsList } from '../src/RenderPropExample';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      list:  [
        {
          id:1,
          text: 'Item One'
        },
        {
          id: 2,
          text: 'Item Two'
        },
        {
          id: 3,
          text: 'Item Three'
        }
    ]
    }
  }

  componentDidMount = () =>{
    // this.state.list.push({'id': 4, 'text': 'New Item'})
    // setTimeout(()=> {
    //   this.setState({
    //     // list : [...this.state.list, { id: 4, text: "New item"}] //ideal way to change state values
    //     list : this.state.list
    //   })
    // }, 3000);
  }

  render() {
    console.log("App render is called...")
    return (
      <div className="App">
        <BasicComponent/>
        {/* <PureComponentExample list={this.state.list}/> */}
        <RenderPropExample>
          {/* {(listItems) => <SimpleList list={listItems}/>} */}
          {(listItems) => <TagsList list={listItems}/>}
        </RenderPropExample>
      </div>
    );
  }
}

export default App;
