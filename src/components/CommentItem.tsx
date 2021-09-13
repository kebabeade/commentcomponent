import * as React from "react";

interface IState2  {
 
}

interface IProps2  {
  idx: string,
  comment: string
}

export default class CommentItem extends React.Component <IProps2,IState2> {
  constructor(props:IProps2) {
    super(props);
  }

  render() {
    return (


<div className="media mb-3">

<div className="media-body p-2 shadow-sm rounded bg-light border">
 {/**  <small className="float-right text-muted">{time}</small>*/}
 {/**  <h6 className="mt-0 mb-1 text-muted">{name}</h6>**/}
  {this.props.comment}
</div>

</div>
    ); 
  }
}