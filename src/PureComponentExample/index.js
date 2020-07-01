import React, { PureComponent} from 'react';
import MemoExample from '../MemoExample';

export default class PureComponentExample extends PureComponent{
    state = {
        filterText: ""
    };

    handleChange = event => {
        this.setState({ filterText: event.target.value });
    };

    // will return true if new props/state are different from old ones
    // shouldComponentUpdate(nextProps, nextState) {
    //     const { props, state } = this;
    //     return !shallowequal(props, nextProps)
    //     && !shallowequal(state, nextState);
    // }

    render() {
        console.log("PureComponent example render is called...");
    // The render method on this PureComponent is called only if
    // props.list or state.filterText has changed.
    const filteredList = this.props.list.filter(
        item => item.text.includes(this.state.filterText)
      )
  
      return (
        <React.Fragment>
          <input className="mb-5" onChange={this.handleChange} value={this.state.filterText} />
          {/* Adding key to each element is important */}
          <ul>{filteredList.map(item => <li key={item.id}>{item.text}</li>)}</ul>
          {/* <MemoExample name="Preshita"/> */}
        </React.Fragment>
      );
    }
}