import { Container } from '../../Styles';
import { Link } from 'react-router-dom';
import { FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: #101522;
	height: 100vh;
	display: flex;
	flex-direction: column;
	width: 6rem;
	justify-content: center;
	align-items: flex-start;
	font-size: 1.2rem;
	position: sticky;
	top: 0;

	z-index: 999;
	overflow: hidden;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-around;
	height: 80px;
	${Container}
`;

export const NavLogo = styled(Link)`
	color: cyan;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin-bottom: 40px; */
	width: 100%;
	position: absolute;
	top: 0;
	right: 0;
`;

export const NavIcon = styled(FiTwitter)`
	margin-right: 0.5rem;
`;

export const NavMenu = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	text-align: center;
	background: gold;
	width: 100%;
	height: 90vh;
`;

export const NavItem = styled.li`
	height: 3rem;
	display: flex;
	align-self: auto;
	justify-content: center;

	&:hover {
		transition: all 0.3s ease;
		background-color: lightblue;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	display: flex;
	align-items: center;

	&:hover {
		color: #4b59f7;
		transition: all 0.3s ease;
	}
`;
