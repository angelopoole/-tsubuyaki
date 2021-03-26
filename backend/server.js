import express from 'express';
import path from 'path';
import colors from 'colors';
import dotenv from 'dotenv';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// import Routes from './routes/whateverRoute.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

//use imported routes at url ->
app.use('/api/users', userRoutes);

const __dirname = path.resolve();

/*
below is a condition that will build and host the frontend if the frontend is adjacent to the main folder. 
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running');
	});
}
*/

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
