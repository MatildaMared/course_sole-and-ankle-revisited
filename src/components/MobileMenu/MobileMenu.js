/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<Overlay isOpen={isOpen} onDismiss={onDismiss}>
			<Content>
				<Button onClick={onDismiss}>Dismiss menu</Button>
				<Nav>
					<Link href="/sale">Sale</Link>
					<Link href="/new">New&nbsp;Releases</Link>
					<Link href="/men">Men</Link>
					<Link href="/women">Women</Link>
					<Link href="/kids">Kids</Link>
					<Link href="/collections">Collections</Link>
				</Nav>
				<Footer>
					<Link href="/terms">Terms and Conditions</Link>
					<Link href="/privacy">Privacy Policy</Link>
					<Link href="/contact">Contact Us</Link>
				</Footer>
			</Content>
		</Overlay>
	);
};

const Overlay = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	align-self: flex-end;
	margin-bottom: 32px;
	border: none;
	background-color: var(--color-gray-900);
	color: #fff;
	padding: 8px 16px;
	border-radius: 8px;
	cursor: pointer;
`;

const Link = styled.a`
	text-decoration: none;
	color: var(--color-gray-900);
`;

const Content = styled(DialogContent)`
	background-color: #fff;
	border-radius: 16px;
	padding: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: clamp(300px, 100%, 600px);
	margin: 16px;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 32px;
`;

const Footer = styled.footer`
	border-top: 1px solid var(--color-gray-300);
	padding-top: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	& a {
		&:not:last-of-type {
			margin-right: 16px;
		}
	}
`;

export default MobileMenu;
