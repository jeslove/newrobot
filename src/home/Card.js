import React, { Component } from 'react';

class Card extends Component{
	render(){
		return (
			<div className="bg-dark-gray mv4 mw5 mh3 dib br3 pa3 grow bw2 shadow-5">
				<img src="https://robohash.org/homecoming" alt="" className="db w-100 br2 br--top imgs" />
				<div>
					<h4 className="tc white">Frank Jeslove</h4>
					<p className="tc white">jeslove@gmail.com</p>
				</div>
			</div>
		);
	}
}

export default Card;