import { Component } from "react";
import { Link } from "react-router";
export default class BookListComponent extends Component{
         constructor(props){
            super(props);
            this.state = {books:[]}
         }

      render(){
                 const bookNode = this.state.books.map((book)=>{
                    return(
                         <Link to={'/books/'+book.id}>{book.title} </Link>

                    )
                 });



              return(

                      <div>

                           <h3>Books</h3>
                              {bookNode}

                      </div>


              )



      }




}