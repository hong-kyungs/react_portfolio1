import React from 'react';

function Layout(props) {
	return (
		<section className={`content ${props.name}`}>
			<figure>
				<img
					src={`${process.env.PUBLIC_URL}/img/${props.name}.jpg`}
					alt='{props.name}'
				/>
			</figure>
			<div className='inner'>
				<h1>{props.name}</h1>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
