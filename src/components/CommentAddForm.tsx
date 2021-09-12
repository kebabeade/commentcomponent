import * as React from "react";

export default class CommentAddForm extends React.Component <{}> {
  render() {
    return (
      <React.Fragment>
          <div className="form-group">
            <input
               className="form-control"
              placeholder="😎 Your Name"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="🤬 Your Comment"
              name="message"
            />
          </div>

 
          <div className="form-group">
            <button className="btn btn-primary">
              Comment &#10148;
            </button>
          </div>

      </React.Fragment>
    ); 
  }
}