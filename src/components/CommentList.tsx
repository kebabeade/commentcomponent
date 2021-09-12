import * as React from "react";
import CommentItem from './CommentItem'

export default class CommentList extends React.Component <{}> {
  render() {
    return (
      <div className="commentList">
        <CommentItem  idx="1" comment="comment1"/>
        <CommentItem  idx="1" comment="comment2"/>
        <CommentItem  idx="1" comment="comment3"/>
        <CommentItem  idx="1" comment="comment4"/>
    </div>
    ); 
  }
}