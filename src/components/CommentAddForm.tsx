/**
 * Component which handles adding new comment
 */
import * as React from "react";

interface IProps{
  addComment: any
}

interface IState{
  comment:string,
  name:string,
  date:Date
}



export default class CommentAddForm extends React.Component <IProps,IState> {
  
    constructor(props:IProps) {
      super(props);
      this.state = {
        comment:'',
        name:'',
        date:new Date()
      };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeComment = this.handleChangeComment.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    };
      
   /**
   * Stores the name
   */
      handleChangeName (evt:any) {
        if (evt !== null && evt.target!==null) {
          this.setState({ name: evt.target.value });
        }
      }

   /**
   * Stores the comment
   */
      handleChangeComment (evt:any) {
        if (evt !== null && evt.target!==null) {
          this.setState({ comment: evt.target.value });
        }
      }
    
      onSubmit(e:any) {
        // prevent default form submission
        e.preventDefault();

        /** add comment to list */
        this.props.addComment(this.state.comment,this.state.name);
        
        /** empty the form fields */
        this.setState({ comment:'',name:'' });
       
      }    

  render() {
    return (
        <form onSubmit={this.onSubmit} className="form-groups">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Your Name"
              name="name"
              type="text"
              onChange={this.handleChangeName}
              value={this.state.name}
              maxLength={40}
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Your Comment"
              name="comment"
              onChange={this.handleChangeComment}
              value={this.state.comment}
              maxLength={255}
            />
          </div>
 
          <div className="form-group">
            <button className="btn btn-primary" disabled={!this.state.comment ||!this.state.name }>
              Add Comment           
            </button>
          </div>
        </form>
      
    ); 
  }
}