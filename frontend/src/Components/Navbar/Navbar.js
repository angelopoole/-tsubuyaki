import React from 'react';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	NavMenu,
	NavItem,
	NavLink,
} from './Navbar.elements';

const Navbar = () => {
	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to='/'>
					<NavIcon />
				</NavLogo>
				<NavMenu>
					<NavItem>
						<NavLink>HOME</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>explore</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>notifications</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>messages</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>bookmarks</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>lists</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>profile</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>more</NavLink>
					</NavItem>
				</NavMenu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
