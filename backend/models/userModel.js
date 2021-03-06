import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
	{
		avatar: {
			type: String,
			// here we can add a default filepath to a basic user image if not changed.
		},
		username: {
			//The username is like a twitter tag, this will stay the same and _cannot_ be changed.
			type: String,
			required: true,
			unique: true,
		},
		name: {
			//Their name will be the display name and can be changed whenever.
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
		},
		followInformation: {
			followers: [],
			following: [],
		},
		location: {
			type: String,
		},
		birthDate: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
		//user should have an array of posts that they've made
	},
	{
		timestamps: true,
	}
);

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
