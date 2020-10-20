// as long as product ID in URL want to add to cart
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
	ListGroupItem,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id;

	// query params --> whatever after URL product ID
	// this code will split the URL (?qty=x) into an array. [?qty, =x] with '=x' at the 1 index
	// wrapped in number to return number data type
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	// only dispatch IF product ID
	useEffect(() => {
		if (productId) {
			// gets from URL
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	const removeFromCartHandler = id => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		// redirect to login if not logged in --> if logged in redirect to shipping page
		history.push('/login?redirect=shipping');
	};

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<Message>
						Your Cart is Empty <Link to="/">Go Back</Link>
					</Message>
				) : (
					<ListGroup variant="flush">
						{/* looping through cartItems and calling each cartItem, item */}
						{cartItems.map(item => (
							// Unique key === product Id which is item.product
							<ListGroupItem key={item.product}>
								<Row>
									<Col md={2}>
										{/* Imported from CartActions in the dispatch from the database */}
										<Image
											src={item.image}
											alt={item.name}
											fluid
											rounded
										></Image>
									</Col>
									<Col md={3}>
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
										<Form.Control
											as="select"
											value={item.qty}
											onChange={e =>
												dispatch(
													addToCart(item.product, Number(e.target.value))
												)
											}
										>
											{[...Array(item.countInStock).keys()].map(x => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>
									<Col md={2}>
										<Button
											type="button"
											variant="light"
											onClick={() => removeFromCartHandler(item.product)}
										>
											<i className="fas fa-trash"></i>
										</Button>
									</Col>
								</Row>
							</ListGroupItem>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card className="mt-4">
					<ListGroup variant="flush">
						<ListGroup.Item className="align title">
							{/* Reduce takes in arrow function with accumulator and current item
							pass through the accumulator and add item quantity, second argument is where accumulator to start === 0*/}
							<h2>
								SubTotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
								items
							</h2>
							<strong>
								$
								{cartItems
									.reduce((acc, item) => acc + item.qty * item.price, 0)
									// Adds 2 decimals
									.toFixed(2)}
							</strong>
						</ListGroup.Item>
						<ListGroupItem className="title">
							<Button
								type="button"
								className="btn-block"
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Proceed to Checkout
							</Button>
						</ListGroupItem>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
};

export default CartScreen;
