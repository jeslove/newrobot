import React, { Component } from 'react';
import Cardlist from '../home/Cardlist';
import Searchapp from '../search/Searchapps'

class Apps extends Component{

	constructor(){
		super();
		this.state ={
			robots: [],
			Searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
			return response.json();
		}).then(users =>{
			this.setState({robots:users});
		})
	}

	onSearchchange =(event) =>
	{
		this.setState({Searchfield: event.target.value});
	}
	render(){
		const filterRobot = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
		});
		return(
			<div className='tc'>
				<Searchapp searchchange={this.onSearchchange}/>
				<Cardlist  robots={filterRobot}/>
			</div>
		);
	}
	
}

export default Apps;