import React from 'react';
import styled from 'styled-components';
import PostCard from '../PostCard';
import { fakeContent } from './fakeContent';
import { Container } from '../../Styles';

export const FeedSection = styled.div`
	color: #fff;
	/* padding: 160px 0; */
	/* background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}; */
	display: flex;
	/* float: right; */
	/* flex-basis: 23px; */
	position: absolute;
	top: 0;
	background-color: red;
`;

const FeedRailing = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

let content = fakeContent => {
	console.log(fakeContent);
};

const ContentFeed = () => {
	return (
		<>
			<FeedSection>
				<Container>
					<FeedRailing>
						<button onClick={content()}>content button</button>
					</FeedRailing>
				</Container>
			</FeedSection>
		</>
	);
};

export default ContentFeed;
