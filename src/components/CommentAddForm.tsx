import * as React from "react";

interface IProps{
  addComment: any
}

interface IState{
  loading: boolean,
  comment:string,
  name:string
}



export default class CommentAddForm extends React.Component <IProps,IState> {
  
    constructor(props:IProps) {
      super(props);
      this.state = {
        loading: true,
        comment:'',
        name:''
      };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeComment = this.handleChangeComment.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    };
      
      handleChangeName (evt:any) {
        if (evt !== null && evt.target!==null) {
        this.setState({ name: evt.target.value });
        }
      }

      handleChangeComment (evt:any) {
        if (evt !== null && evt.target!==null) {
        this.setState({ comment: evt.target.value });
        }
      }
    
      onSubmit(e:any) {
        // prevent default form submission
        e.preventDefault();

        this.props.addComment(this.state.comment);
        
        this.state = {
          loading: true,
          comment:'',
          name:''
        };
      }    

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} className="form-groups">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="😎 Your Name"
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
              placeholder="🤬 Your Comment"
              name="message"
              onChange={this.handleChangeComment}
              value={this.state.comment}
              maxLength={255}
            />
          </div>

 
          <div className="form-group">
            <button className="btn btn-primary" disabled={!this.state.comment ||!this.state.name }>
              Comment &#10148;
              
            </button>
          </div>
        </form>
      </React.Fragment>
    ); 
  }
}