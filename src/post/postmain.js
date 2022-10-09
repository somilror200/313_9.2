import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import {Header,Form} from 'semantic-ui-react'
import Article from './article';
import Question from './question';
export default class PostMain extends Component{
   state={value:'question'};
   handleChange = (e, { value }) => this.setState({ value })
    render()
    {
        let result;
        const { value } = this.state;

        if(value==='question')
        result=<Question/>;
        else
        result=<Article/>;

        let redirect=false;
if(localStorage.getItem("login"))
redirect=false;
else
redirect=true;


    if(redirect)
{
return (
    <Navigate to="/login"/>
);
}
else{

        
        return(
        <>
        <div class="ui raised very padded  container segment">
         <Header as='h3' block> New Post</Header>
         <Form>
       
      
       
         <Form.Group inline>
          <label>Select  Post Type:</label>
          <Form.Radio
            label='Question'
            value='question'
            checked={value === 'question'}
            onChange={this.handleChange}
           
          />
          <Form.Radio
            label='Article'
            value='article'
            checked={value === 'article'}   
            onChange={this.handleChange} 
           
          />
         
        </Form.Group>
        <Header as='h3' block> What do you want to ask or share</Header>

           {result}
           
                


         </Form>
         </div>
         
        </>
        )

    }}

}