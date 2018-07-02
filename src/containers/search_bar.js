import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from  '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state={
			term:''
		};
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
				<input
				placeholder="Input state name to see 5 day weather forecast"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange.bind(this)}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
	onInputChange(evt){
		if(!!evt.target)
		this.setState({term:evt.target.value});
	}
	onFormSubmit(evt){
		evt.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);