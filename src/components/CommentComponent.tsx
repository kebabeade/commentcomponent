import * as React from "react";
import CommentAddForm from './CommentAddForm'
import CommentList from './CommentList'
import ICommentItem from './Commentinterfaces'
import './CommentComponent.css';

interface IProps {
  username:   string
}

interface IState{
  commentList: ICommentItem[],
  loading: boolean,
  user:string
}

export default class CommentComponent extends React.Component <IProps,IState> {
  constructor(props:IProps) {
    super(props);

    this.state = {
      commentList:[{idx:"1",comment:"comment1"}],
      user:this.props.username,
      loading:false,
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    //this.setState({ loading: true });
  
  }

   /**
   * Add new comment
   * @param {Object} comment
   */
    addComment(comment:string) {

      let NewCommentItem: ICommentItem = {
        idx: "1",
        comment: comment,
      };
 
      this.setState({
        loading: false,
        commentList: [...this.state.commentList, NewCommentItem]
        
      });
    }
  
  render() {
    

 
    return (
      <div className="CommentComponentHeader container bg-light shadow">
      <h4> Please add your comments</h4>
         <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            < CommentAddForm addComment={this.addComment}/>
            < CommentList Items={this.state.commentList} />
          </div>
        </div>
      </div>
    ); 
  }
}