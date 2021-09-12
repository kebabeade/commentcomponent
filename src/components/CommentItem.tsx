import * as React from "react";

interface CommentItemProps  {
  idx: string,
  comment: string
}

export default class CommentItem extends React.Component <CommentItemProps,{}> {
  render() {
    return (
      <div>
       <h5 className="text-muted mb-4">
        <span className="badge badge-success"></span>{" "}
        
      </h5>

        <h5>{this.props.comment}</h5>
        
      </div>
    ); 
  }
}