import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, BREAKPOINTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<Nav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</Nav>
				<MobileNav>
					<Button>
						<Icon id="shopping-bag" />
					</Button>
					<Button>
						<Icon id="search" />
					</Button>
					<Button>
						<Icon
							id={showMobileMenu ? "close" : "menu"}
							onClick={() => setShowMobileMenu(!showMobileMenu)}
						/>
					</Button>
				</MobileNav>
				<Side />
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	height: 72px;
	border-bottom: 1px solid var(--color-gray-300);
	overflow-y: auto;

	@media (max-width: ${BREAKPOINTS.tablet}) {
		border-top: 4px solid var(--color-gray-900);
	}
`;

const Nav = styled.nav`
	display: flex;
	gap: clamp(1rem, 2vw + 1rem, 3.3rem);
	margin: 0px 48px;

	@media (max-width: ${BREAKPOINTS.tablet}) {
		display: none;
	}
`;

const Button = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	padding: 0;
	color: black;
`;

const MobileNav = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 16px;

	@media (min-width: ${BREAKPOINTS.mobile}) {
		gap: 24px;
	}

	@media (min-width: ${BREAKPOINTS.tablet}) {
		display: none;
	}
`;

const Side = styled.div`
	flex: 1;
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

export default Header;
