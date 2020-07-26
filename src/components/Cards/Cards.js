import React from 'react';
import './card.scss';

function Cards({ headingBig, headingSmall }) {
	return (
		<div className='card-container'>
			<h2 className='heading-big'> {headingBig} </h2>
			<h3 className='heading-small'> {headingSmall} </h3>
		</div>
	);
}

export default Cards;
