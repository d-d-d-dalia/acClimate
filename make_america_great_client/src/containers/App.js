import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux';
import Scorerecords from './Scorerecords'

const APP_URL = process.env.REACT_APP_API_URL

class App extends Component {

	constructor (props) {
		super (props)

		this.state = {
			scorerecords: []
		}
	}

	componentDidMount() {
		fetch(`${APP_URL}/score_records`)
			.then(response => response.json())
			.then(scorerecords => this.setState({ scorerecords }))
	}
	
	render() {

		return (
			<div className="App">
				< Scorerecords scorerecords={this.state.scorerecords} />
			</div>
		)
	}
}

// something like this needs to happen to reduxify this. i think this will replace what i currently have in render.
//handleOnClick() {
//     this.props.store.dispatch({
//       type: 'INCREASE_COUNT',
//     });
//   }
 
//   render() {
//     return (
//       <div className="App">
//         <button onClick={(event) => this.handleOnClick(event)} >
//           Click 
//         </button>
//         <p>{this.props.store.getState().scorerecords.length}</p>
//       </div>
//     );
//   }
// };

const mapStateToProps = (state) => { 
  return { scorerecords: state.scorerecords };
};

export default connect(mapStateToProps)(App);

//create the store in index.js. you will also create a scorerecords reducer and a scorerecords action files as well.

//also implement combine reducers - don't need multiple reducers for this to work, its ok if you just have the one scorerecords reducer.