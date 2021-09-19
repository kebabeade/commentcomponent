/**
 * Container of ComponentAddForm and CommentList
 */
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
    /**create some default comments */
    this.state = {
      commentList:[{comment:"I Love this tool!",username:"Seppo",date:new Date(2021,1,12).toISOString().slice(0, 10), key:1}]
    };

    this.addComment = this.addComment.bind(this);
  }

     /**
   * Function adds new comment to the list
   */
    addComment(comment:string,username:string) {

      let NewCommentItem: ICommentItem = {
        comment: comment,
        username:username,
        date:new Date().toISOString().slice(0, 10),
        key:this.state.commentList.length+1
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
          </div>
        </div>
         <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            < CommentList Items={this.state.commentList} />
          </div>
        </div>
      </div>
    ); 
  }
}