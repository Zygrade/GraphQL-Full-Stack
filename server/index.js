const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// permits cross origin requests
app.use(cors());

// mLab connection
mongoose.connect('mongodb://yadnesh:yadnesh@ds237409.mlab.com:37409/graphql');
mongoose.connection.once('open',()=>{
    console.log('connected to database');
});

// middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true
}));

app.listen(4000,()=>{
    console.log('Server up on the port 4000');
});
