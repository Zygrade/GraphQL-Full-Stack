import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBookQuery} from '../query/queries';

class BookDetails extends Component {

    displayDetails(){
      //console.log(this.props);
        const {book} = this.props.data;
        if(book){
          return (
            <div>
              <h2>{book.name}</h2>
              <p><strong>Genre : </strong>{book.genre}</p>
              <p><strong>Author : </strong>{book.author.name}</p>
              <p>All Books by {book.author.name} : </p>
              <ul className="other-books">
                {
                   book.author.books.map(x => {
                      return <li key={x.id}>{x.name}</li>
                   })
                }
              </ul>
            </div>
          );
        }
        else {
          return (
            <div>
            <p>No book selected</p>
            <p>Click on one of the books</p>
            </div>
          );
        }
    }

    render(){
      return (
          <div id="book-details">
            <h2>Book Details</h2>
              {this.displayDetails()}
          </div>
      );
    }
}

export default graphql(getBookQuery,{
    options : (props)=> {
      return {
          variables : {
              id : props.bookId
          }
       }
    }
})(BookDetails);
