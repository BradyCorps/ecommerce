import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className="rounded">
			<Link to={`/product/${product._id}`}>
				<div>
					<Card.Img
						className="image-wrapper"
						src={product.image}
						variant="top"
					/>
				</div>
			</Link>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div">
						<h3>{product.name}</h3>
					</Card.Title>
				</Link>

				<Card.Text as="div">
					<div className="my-3">{product.takenOn}</div>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>

				<Card.Text as="h3">${product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
