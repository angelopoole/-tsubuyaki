import styled from 'styled-components';

// prebuilt StyledComponents are dropped here
// after component is built, export from ./index

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-left: 50px;
	padding-right: 50px;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;
