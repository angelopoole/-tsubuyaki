import faker from 'faker';
import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'angelo',
		username: 'batman',
		email: '8thgenwolf@gmail.com',
		password: 'poop',
		avatar: faker.internet.avatar(),
		bio: faker.lorem.sentence(),
		following: [],
		followers: [],
		location: faker.address.city(),
		birthDate: faker.date.recent(),
		isAdmin: true,
	},
	{
		name: faker.name.findName(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		password: bcrypt.hashSync('123456', 10),
		avatar: faker.internet.avatar(),
		bio: faker.lorem.sentence(),
		following: [],
		followers: [],
		location: faker.address.city(),
		birthDate: faker.date.recent(),
		isAdmin: false,
	},
	{
		name: faker.name.findName(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		password: bcrypt.hashSync('123456', 10),
		avatar: faker.internet.avatar(),
		bio: faker.lorem.sentence(),
		following: [],
		followers: [],
		location: faker.address.city(),
		birthDate: faker.date.recent(),
		isAdmin: false,
	},
];

const posts = [
	{
		text: faker.lorem.paragraph(),
	},
	{
		text: faker.lorem.paragraph(),
	},
	{
		text: faker.lorem.paragraph(),
	},
	{
		text: faker.lorem.paragraph(),
	},
	{
		text: faker.lorem.paragraph(),
	},
];

export { users, posts };
