import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';

import schema from "./schema/schema";

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL,
        { useUnifiedTopology: true }
);

app.use(cors())

app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log(`Connected to DB`));

app.listen(PORT, err => {
        err ? console.log(err) : console.log('Server started!');
});
