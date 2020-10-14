import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{/* When mapping through (iterating through array or object) need to have a unique key --> this is listed as key={x} */}
				{products.map(product => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
