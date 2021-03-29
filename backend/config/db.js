import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(
			`mongoDB Connected: ${conn.connection.host}`.cyan.italic.underline
		);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.bold.underline);
		process.exit(1);
	}
};

export default connectDB;
