import * as React from "react";
import CommentItem from './CommentItem'

interface IState {
  loading: boolean,
  Items: []
}

interface IProps {
  Items: CommentItem[];
}

export default class CommentList extends React.Component <IProps,IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: true,
      Items: []
    };
  }
  render() {
    return (
    
      <div className="commentList">
      {this.props.Items.map((comment, idx) => (
        <CommentItem idx={idx} comment={comment} />
      ))}
   </div> 
 
    ); 
  }
}