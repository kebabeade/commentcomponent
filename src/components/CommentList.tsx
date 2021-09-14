import * as React from "react";
import CommentItem from './CommentItem'
import ICommentItem from './Commentinterfaces'

interface IState {
  loading: boolean,
  Items: ICommentItem[]
}

interface IProps {
  Items: ICommentItem[];
}

export default class CommentList extends React.Component <IProps,IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: true,
      Items: this.props.Items
    };

    
  }
  render() {
    return (
      <div className="commentList">

      {this.state.Items.map((commentitem) => (
        <CommentItem commentitem={commentitem}/>
      ))}
     </div> 
 
    ); 
  }
}