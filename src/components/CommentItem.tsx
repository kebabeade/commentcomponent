/**
 * Component which handles adding new comment
 */
import * as React from "react";
import ICommentItem from './Commentinterfaces'

interface IState  {
 
}

interface IProps {
  commentitem: ICommentItem
}

export default class CommentItem extends React.Component <IProps,IState> {
  constructor(props:IProps) {
    super(props);
  
  }

  render() {

    return (     
    <div className="card" >
      <div className="card-body">

        <h6 className="card-title">{this.props.commentitem.username} {this.props.commentitem.date}</h6>
        <h6 className="card-title"> </h6>
        
        <h5 className="card-text">"{this.props.commentitem.comment}"</h5>
      </div>
    </div>


    ); 
  }
}