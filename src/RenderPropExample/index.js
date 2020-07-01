import React from 'react';
import PropTypes from 'prop-types';

const allListItems = ['Apple', 'Apricot', 'Banana', 'Guava', 'Grapes'];

class AutoComplete extends React.Component{

    constructor(){
        super();
        this.state = {
            filterText : '',
            listItems : []
        }
    }

    filterList = () => {
        if(this.state.filterText === '') {
            this.setState({
                listItems : []
            });
        } else {
            let filteredList = [...allListItems];
            filteredList = filteredList.filter((item) => { return item.startsWith(this.state.filterText)});
            this.setState({
                listItems : filteredList
            });
        }
    }

    changeHandler = (event) => {
        let name = event.target.name;
        this.setState({
            [name] : event.target.value
        }, () => {
            this.filterList();
        });
    }

    render(){
        return (
            <React.Fragment>
                <input value={this.state.filterText} name="filterText" onChange={this.changeHandler} className="col-3 form-control" type="text"/>
                {this.props.children(this.state.listItems)}
            </React.Fragment>
        )
    }
}

export default AutoComplete;


AutoComplete.propTypes = {
    children : PropTypes.func.isRequired
}


export const SimpleList = ({list}) => {
    return (
        <ul>
            {list.map((item, index) => <li key={index} className="list-item col-3" >{item}</li>)}
        </ul>
    )
}

export const TagsList = ({list}) => {
    return (
        <div className="mt-3">
            {list.map((item, index) => <span key={index} className="tag-item col-3 p-1 mr-2">{item}</span>)}
        </div>
    )
}
