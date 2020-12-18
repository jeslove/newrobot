import React from 'react';

const Searchapps = ({Searchfield,searchchange})=>{

	return (

		<div className="pa2">
			<h1>Rebot Friend</h1>
			<input type="search" placeholder="Search here.." className='pa2 ba b--green bg-light-blue' onChange={searchchange} />
		</div>
	);
}

export default Searchapps;