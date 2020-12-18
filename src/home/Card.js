import React from 'react';

const Card =({name,email,id})=>{
	
	return (
		<div className="bg-dark-gray mv4 mw5 mh3 dib br3 pa3 grow bw2 shadow-5 tc">
			<img src={`https://robohash.org/${id}`} alt="" className="db w-100 br2 br--top imgs" />
			<div>
				<h4 className="tc white">{name}</h4>
				<p className="tc white">{email}</p>
			</div>
		</div>
	);
	
}

export default Card;