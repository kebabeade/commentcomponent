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
        <h6 className="card-title">{this.props.commentitem.username}</h6>
        <p className="card-text">"{this.props.commentitem.comment}"</p>
      </div>
    </div>


    ); 
  }
}