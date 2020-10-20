import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="secondary" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Brady Corps Studio</Navbar.Brand>
					</LinkContainer>

					<Nav className="ml-auto">
						<LinkContainer to="/">
							<Nav.Link className="px-2">
								<i className="fas fa-home px-1"></i>Home
							</Nav.Link>
						</LinkContainer>

						<LinkContainer to="/cart">
							<Nav.Link>
								<i className="fas fa-shopping-cart px-1"></i>Cart
							</Nav.Link>
						</LinkContainer>

						<LinkContainer to="/login">
							<Nav.Link className="px-2" href="/login">
								<i className="fas fa-user px-1"></i>Login
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
