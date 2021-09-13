import * as React from "react";
import CommentAddForm from './CommentAddForm'
import CommentList from './CommentList'
import ICommentItem from './Commentinterfaces'



const comments = [
  { idx: 1, comment: "Make1"},
  { idx: 2, comment: "Make2"}
];

interface IProps {
  username:   string
}

interface IState{
  commentList: ICommentItem[],
  loading: boolean,
  user:string
}

export default class CommentingComponent extends React.Component <IProps,IState> {
  constructor(props:IProps) {
    super(props);

    

    this.state = {
      commentList:[{idx:"1",comment:"comment1"},{idx:"2",comment:"comment2"}],
      user:this.props.username,
      loading:false,
    };

  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });
  
  }
  
  render() {
    

 
    return (
      <div className="CommentingComponentHeader container bg-light shadow">
      <h4> Please add your comments</h4>
         <div className="row">
          <div className="col-md-4 col-lg-4">
            < CommentAddForm/>
          </div>
          <div className="col-md-4 col-lg-4">
          < CommentList Items={this.state.commentList}/>
          </div>
        </div>
      </div>
    ); 
  }
}