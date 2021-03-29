import faker from 'faker';

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
		isAdmin: false,
	},
	{
		name: faker.name.findName(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
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
		password: faker.internet.password(),
		avatar: faker.internet.avatar(),
		bio: faker.lorem.sentence(),
		following: [],
		followers: [],
		location: faker.address.city(),
		birthDate: faker.date.recent(),
		isAdmin: false,
	},
];

export default users;
