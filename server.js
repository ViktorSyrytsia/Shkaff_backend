import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import schema from './schema/schema';

import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

dotenv.config();

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
}
);

server.use(cors())

server.use('/graphql', graphqlHTTP({
        graphiql: true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log(`Connected to DB`));

server.listen(PORT, err => {
        err ? console.log(err) : console.log('Server started!');
});
