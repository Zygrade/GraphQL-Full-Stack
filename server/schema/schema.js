const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSring, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name : 'Book',
    fields : ()=>({
        id : {type : GraphQLString},
        name : {type : GraphQLString},
        genre : {type : GraphQLSring}
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        book : {
            type : BookType,
            args : { id : {type : GraphQLSring} },
            resolve(parent,args){
              // code for fetching data from db
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query : RootQuery
});
