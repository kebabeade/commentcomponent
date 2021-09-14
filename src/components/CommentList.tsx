import * as React from "react";
import CommentItem from './CommentItem'
import ICommentItem from './Commentinterfaces'

interface IState {
  loading: boolean,
}

interface IProps {
  Items: ICommentItem[];
}

export default class CommentList extends React.Component <IProps,IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: true,
      };

    
  }
  render() {
    return (
      <div className="commentList">

      <h5 className="commentcount" >
        <span className="badge badge-success">{this.props.Items.length}</span>{" "}
        Comment{this.props.Items.length > 0 ? "s" : ""}
      </h5>
      
      {this.props.Items.map((commentitem) => (
        <CommentItem commentitem={commentitem}/>
      ))}
     </div> 
 
    ); 
  }
}