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


<div className="media mb-3">

<div className="media-body p-2 shadow-sm rounded bg-light border">
 {/**  <small className="float-right text-muted">{time}</small>*/}
 {/**  <h6 className="mt-0 mb-1 text-muted">{name}</h6>**/}
  {this.props.commentitem.comment}
</div>

</div>
    ); 
  }
}