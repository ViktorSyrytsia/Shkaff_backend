const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;

mongoose.connect('mongodb+srv://dmytro_didukh:123321@cluster0-bluhz.azure.mongodb.net/graphQL?retryWrites=true&w=majority',
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