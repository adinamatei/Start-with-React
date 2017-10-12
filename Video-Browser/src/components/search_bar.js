import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input placeholder = "search"/>
// };


// // create a class based on components
// class SearchBar extends Component {
//
//     // define and initialize States in a class based component
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             term: '',
//             count: 0
//         };
//     }
//
//     handleClick(event) {
//         this.setState({ count: this.state.count + 1 });
//     }
//
//     handle2Click(event) {
//         this.setState({ count: this.state.count - 1 });
//     }
//
//     handleChange(event) {
//         this.setState({ term: event.target.value });
//     }
//
//     handleKeyPress(e) {
//
//         if (e.key === 'Enter') {
//             this.setState(
//                     {
//                         term: '',
//                         count: 0
//                     });
//         }
//
//     }
//
//     // render function
//     render() {
//         return (
//           <div>
//               <input
//                   value={this.state.term}
//                   onChange={this.handleChange.bind(this)}
//                   onKeyPress={this.handleKeyPress.bind(this)}
//               />
//               <div>
//                   <button onClick={this.handleClick.bind(this)}>
//                       +1
//                   </button>
//                   <span>Count = {this.state.count}</span>
//                   <button onClick={this.handle2Click.bind(this)}>
//                       -1
//                   </button>
//               </div>
//           </div>
//         );
//     }
// }


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    //create a render function
    render() {

        // create a arrow function and add an event handler
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;