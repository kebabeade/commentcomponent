/**
 * Component which handles rendering Comments card list
 */
import * as React from "react";
import CommentItem from './CommentItem'
import ICommentItem from './Commentinterfaces'

interface IState {

}

interface IProps {
  Items: ICommentItem[];
}

export default class CommentList extends React.Component <IProps,IState> {
  constructor(props: IProps) {
    super(props);
   
  }
  render() {
    return (
      <div className="commentList">

      <h5 className="commentcount" >
        <span className="badge badge-success">{this.props.Items.length}</span>{" "}
        Comment{this.props.Items.length > 0 ? "s" : ""}
      </h5>
      
      {this.props.Items.map((commentitem) => (
        <CommentItem key={commentitem.key} commentitem={commentitem}/>
      ))}
     </div> 
 
    ); 
  }
}