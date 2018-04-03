const express = requires('express');
const graphqlHTTP = requires('express-graphql');
const schema = require('./schema/schema.js');

const app = express();

app.get('/graphql', graphqlHTTP({
    schema
}));

app.listen(4000,()=>{
    console.log('Server up on the port 4000');
});
