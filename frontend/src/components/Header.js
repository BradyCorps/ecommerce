import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="ml-auto">
						<Nav.Link className="px-2" href="#">
							<i className="fas fa-home px-1"></i>Home
						</Nav.Link>

						<Nav.Link href="/cart">
							<i className="fas fa-shopping-cart px-1"></i>Cart
						</Nav.Link>

						<Nav.Link className="px-2" href="/login">
							<i className="fas fa-user px-1"></i>Login
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
