import React from 'react';
import cars from '../cars.json';
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
	const id = props.match.params.id;
	const car = cars.find((c) => c.id == id);
	return (
		<div>
			<h1>A specific car</h1>
			{/* <p>Car: {cars.find(id)}</p> */}
			<li>Car: {car.Name}</li>
		</div>
	);
};

export default Car;
