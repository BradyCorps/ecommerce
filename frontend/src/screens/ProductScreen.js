import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	ListGroupItem,
	Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ history, match }) => {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();

	const productDetails = useSelector(state => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	};

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
								<ListGroup.Item
									className="zoom-hover"
									disabled={product.countInStock === 0}
								>
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

								{product.countInStock > 0 && (
									<ListGroupItem className="title">
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as="select"
													value={qty}
													onChange={e => setQty(e.target.value)}
												>
													{[...Array(product.countInStock).keys()].map(x => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroupItem>
								)}

								<ListGroupItem
									className="title"
									disabled={product.countInStock === 0}
								>
									<Button
										onClick={addToCartHandler}
										className="btn-block btn-hover-color"
										type="button"
										disabled={product.countInStock === 0}
										variant={product.countInStock === 0 ? 'danger' : 'light'}
									>
										Add To Cart
									</Button>
								</ListGroupItem>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductScreen;
