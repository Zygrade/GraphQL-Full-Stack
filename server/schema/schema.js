const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;
const _ = require('lodash');

const BookType = new GraphQLObjectType({
    name : 'Book',
    fields : ()=>({
        id : {type : GraphQLID},
        name : {type : GraphQLString},
        genre : {type : GraphQLString},
        author : {
            type : AuthorType,
            resolve(parent,args){
                //return _.find(authors,{id:parent.authorId});
            }
        }
    })
});

// Author type
const AuthorType = new GraphQLObjectType({
    name : 'Author',
    fields : () => ({
      id : { type : GraphQLID },
      name : { type : GraphQLString },
      age : { type : GraphQLInt },
      book : {
              type : new GraphQLList(BookType),
              resolve(parent,args){
                  //return _.filter(books,{authorId:parent.id});
              }
          }
      })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        book : {
            type : BookType,
            args : { id : {type : GraphQLID} },
            resolve(parent,args){
              //return _.find(books,{id:args.id});
            }
        },

        author : {
            type : AuthorType,
            args : { id : {type : GraphQLID } },
            resolve(parent,args){
              //return _.find(authors,{id:args.id});
            }
        },

        books : {
            type : new GraphQLList(BookType),
            resolve(parent,args){
              //return books;
            }
        },

        authors : {
            type : new GraphQLList(AuthorType),
            resolve(parent,args){
                //return authors;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query : RootQuery
});
