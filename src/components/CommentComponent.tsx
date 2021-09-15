import * as React from "react";
import CommentAddForm from './CommentAddForm'
import CommentList from './CommentList'
import ICommentItem from './Commentinterfaces'
import './CommentComponent.css';

interface IProps {
  
}

interface IState{
  commentList: ICommentItem[]
}

export default class CommentComponent extends React.Component <IProps,IState> {
  constructor(props:IProps) {
    super(props);

    this.state = {
      commentList:[{comment:"I Love this tool!",username:"Seppo"}]
    };

    this.addComment = this.addComment.bind(this);
  }

     /**
   * Add new comment
   * @param {string} comment
   * @param {string} username
   */
    addComment(comment:string,username:string) {

      let NewCommentItem: ICommentItem = {
        comment: comment,
        username:username
      };
 
      this.setState({
        commentList: [...this.state.commentList, NewCommentItem]
      });
    }
  
  render() {
    

 
    return (
      <div className="CommentComponentHeader container bg-light shadow">

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h4> Please add your comments</h4>
         </div>
         </div>

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