import * as React from "react";
import CommentAddForm from './CommentAddForm'

let Logo ="https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg";


export default class CommentingComponent extends React.Component <{}> {
  render() {
    return (
      <div>
        <h3>A Simple React Component Example with Typescript</h3>
        <div>
          <img height="250" src={Logo} /> 
        </div>
        
        <p>This component shows the Logrocket logo.</p>
        <p>For more info on Logrocket, please visit https://logrocket.com </p>

        <CommentAddForm/>

      </div>
    ); 
  }
}