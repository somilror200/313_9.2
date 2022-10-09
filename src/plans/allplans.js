import React from 'react'
import { Navigate } from 'react-router-dom';
import {List, Grid,Header,Card,Button,Image } from 'semantic-ui-react'

const AllPlans = (props) =>{

    
      
        const handleSubmit = async (event) => {
          event.preventDefault();
               // <Navigate to={<Checkout/>}/>
               window.location.href="/Checkout"

        };

return (

   <>
 <div class="ui raised very padded  container segment">
 <Header as='h3' block> Our Plans Post</Header> 
<Grid columns={1}>
<Grid.Row width="equals">
<Grid.Column  >

<Card.Group>
    <Card>
    <Image src='freeplan.jpg' wrapped ui={false} />
      <Card.Content>
       
        <Card.Header>Free Plan</Card.Header>
        <Card.Meta>Explore the features</Card.Meta>
        <Card.Description>
        <List divided relaxed>
    <List.Item>
      <List.Icon name='time' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>2 Banner Customization</List.Header>
       
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='time' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>1 Message Customization</List.Header>
       
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='time' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>1 Theme Customization</List.Header>
        
      </List.Content>
    </List.Item>
    
  </List>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Apply
          </Button>
         
        </div>
      </Card.Content>
    </Card>
    <Card>
    <Image src='premium.jpg' wrapped ui={false} />

      <Card.Content>
        
        <Card.Header>Premium Plan</Card.Header>
        <Card.Meta>Get more power</Card.Meta>
        <Card.Description>
        <List divided relaxed>
    <List.Item>
      <List.Icon name='alarm' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Unimited Banner Customization</List.Header>
        
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='alarm' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Unimited Message Customization</List.Header>
       
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='alarm' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>unlimtedTheme Customization</List.Header>
       
      </List.Content>
    </List.Item>
    
  </List>
  
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={handleSubmit}>
            Buy Subscription
          </Button>
       
        </div>
      </Card.Content>
    </Card>
   
    </Card.Group>
</Grid.Column>  
</Grid.Row>
  </Grid>
 
  </div>
</>
)}



export default AllPlans;