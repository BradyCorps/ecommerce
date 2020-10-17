import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ match }) => {
	const dispatch = useDispatch();

	const productDetails = useSelector(state => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>
			{loading ? (
				<Loader></Loader>
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<div>
							<Image src={product.image} alt={product.name} fluid></Image>
						</div>
					</Col>
					<Col md={3}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item disabled={product.countInStock === 0}>
								Price: ${product.price}
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<strong>Description:</strong>
								</Row>
								<Row className="mt-4">{product.description}</Row>
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant="flush">
								<ListGroup.Item disabled={product.countInStock === 0}>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</ListGroup.Item>

								<ListGroup.Item>
									<Col>Status:</Col>
									<Col>
										{/* Checking to see stock --> if stock is greater than 0 --> show in stock */}
										{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
									</Col>
								</ListGroup.Item>
								<ListGroup.Item disabled={product.countInStock === 0}>
									<Button
										className="btn-block"
										type="button"
										disabled={product.countInStock === 0}
										variant={
											product.countInStock === 0 ? 'danger' : 'secondary'
										}
									>
										Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductScreen;
