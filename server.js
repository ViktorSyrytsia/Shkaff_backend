const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')

const schema = require('./schema/schema');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true }
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
