const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const _ = require('lodash');

const BookType = new GraphQLObjectType({
    name : 'Book',
    fields : ()=>({
        id : {type : GraphQLString},
        name : {type : GraphQLString},
        genre : {type : GraphQLString}
    })
});

// dummy data
const books = [
    { name : 'Name of the wind', genre : 'Fantasy', id: '1' },
    { name : 'The final Empire', genre : 'Fantasy', id: '2' },
    { name : 'The long earth', genre : 'Sci-fi', id: '3' },
];

// Root Query
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        book : {
            type : BookType,
            args : { id : {type : GraphQLString} },
            resolve(parent,args){
              // code for fetching data from db
              return _.find(books,{id:args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query : RootQuery
});
