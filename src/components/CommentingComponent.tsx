import * as React from "react";
import CommentAddForm from './CommentAddForm'
import CommentList from './CommentList'

export default class CommentingComponent extends React.Component <{}> {
  render() {
    return (
      <div className="App container bg-light shadow">
      <h4> Comments for Netvisor</h4>
         <div className="row">
          <div className="col-sm-4">
            < CommentAddForm/>
          </div>
          <div className="col-sm-8">
          < CommentList/>
          </div>
        </div>
      </div>
    ); 
  }
}