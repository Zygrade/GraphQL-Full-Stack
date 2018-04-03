const express = requires('express');
const graphqlHTTP = requires('express-graphql');

const app = express();

app.get('/graphql', graphqlHTTP({
    
}));

app.listen(4000,()=>{
    console.log('Server up on the port 4000');
});
