import { GlobalStyle } from './Styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ContentFeed } from './Components';

import { Navbar } from './Components';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path='/' exact component={ContentFeed} />
			</Switch>
		</Router>
	);
}

export default App;
