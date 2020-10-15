import React, { useState, useEffect } from 'react';
// UseState Hook === using state in FUNCTIONAL components not Global --> differs from ClassBased as not from constructor
// UseEffect Hook === allows for requests to be made to the backend
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);
	// set const to useState with brackets. in Const brackets set 2 parameters [what to call piece of state, what to call the functions to manipulate the state]
	// Whatever set default for products --> pass within useState function '()'

	useEffect(() => {
		// useEffect is defined --> takes in arrow function. Anything passed through the function will run as the component or screen loads
		// typically where a request is made
		//
		// --> arrow functions cannot be awaited need to create seperate function
		// const fetchProducts can be async
		const fetchProducts = async () => {
			// axios returns a promise --> await needs to be called
			// typically would have const res that has a 'data' element attached. Destructured data from res to use variable directly
			//
			// frontend on localhost3000 --> backend of localhost5000
			// get request is undefined on to which localhost to grab --> cannot put localhost in URL as would cause CORS error
			//
			// because of this--> axios.get is looking at localhost3000 wherein the products are now held at localhost5000
			// Rather add proxy that will redirect to localhost 5000 in frontend package.json
			const { data } = await axios.get('/api/products');
			// want to set useState empty array to products listed in products.js --> call setProducts --> as defined above to change state
			setProducts(data);
		};

		// Calling fetchProducts
		fetchProducts();
		// second argument to useEffect --> pass in an array of dependencies
		// anything to fire useEffect off when changes --> ie variable called 'Test' --> whenever test changes can fire off useEffect side-effects
		// dont need anything --> can be empty array
	}, []);
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{/* When mapping through (iterating through array or object) need to have a unique key --> this is listed as key={x} */}
				{products.map(product => (
					<Col key={product._id} sm={12} md={6}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
