import React from 'react'
import {Search, Grid,Menu,Icon, Header,Button } from 'semantic-ui-react';
const Subscribe=()=>

{
 
return(<>
 <Grid >
    <Grid.Column width={6}>
    <Header as='h1' > Sign up for our daily insider</Header>
    </Grid.Column>
    <Grid.Column width={4}>
    <Search 
            aligned='right'
            
          />
    </Grid.Column>
    <Grid.Column width={2}>
    <Menu compact>
    <Menu.Item as='a'>
      <Icon name='mail' /><Button>Subscribe</Button> 
     
    </Menu.Item>
   
  </Menu>
    </Grid.Column>
  </Grid>

  
</>)
}
export default Subscribe;