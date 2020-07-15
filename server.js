import {ApolloServer} from 'apollo-server';
import {graphqlHTTP} from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import resolvers from './resolvers';
import schema from './types.graphql';

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
})

dotenv.config();

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

/*server.use(cors())
server.use('/graphql', graphqlHTTP({
    graphiql: true
}));*/

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log(`Connected to DB`));

server.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});
