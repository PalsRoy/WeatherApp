import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';

class WeatherList extends Component {
constructor(){
 super();

 this.state = { term: ''}

 this.onFormSubmit=this.onFormSubmit.bind(this);
 this.onInputChange=this.onInputChange.bind(this);
}

onInputChange(event){
  this.setState({term: event.target.value});
}

onFormSubmit(e){
  e.preventDefault();
  //we need to fetch the weather data from actions
  console.log(this.state.term);
  this.props.fetchData(this.state.term);
  this.setState({ term : ''});

}

render(){
  return (
    <div>
    <form className="form-group" onSubmit={this.onFormSubmit}>
    <input type="text"
          onChange={this.onInputChange}
          value={this.state.term}
          className="form-control"
          placeholder="Provides the five-day forecast of cities of United Kingdom" />
    <input type="submit" className="btn btn-primary" />
    </form>
    </div>
  );
}
}

//Here it connect bridges the React component and the Redux Actions
//It will appear on Props from here
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchData: fetchData},dispatch);
}

export default connect(null,mapDispatchToProps)(WeatherList);
