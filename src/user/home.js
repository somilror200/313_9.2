import React from 'react';
import { Header} from 'semantic-ui-react'

let message="";


export default function Home(props) {


  return (
    <>
    
      <div class="ui raised very padded  container segment">
        <Header as='h3' block> Home Page</Header>
        
       Welcome to home page
      </div>

    </>
  )
  

}