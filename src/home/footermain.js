import React from 'react'
import { Grid,Header } from 'semantic-ui-react'
import Footer from './footer';

import SocialButtons from './socialbuttons';

const FooterMain = (props) => (
  <><div class="ui raised very padded container segment">
  <Grid columns={3} >
<Grid.Row>
      <Grid.Column>
      <Footer values={props.footer1} title="Explore"/>
      </Grid.Column>
      <Grid.Column>
      
      <Footer values={props.footer2} title="Support"/>
      </Grid.Column>
      <Grid.Column>
      
      <SocialButtons/>
      </Grid.Column>
    </Grid.Row>
  <Grid.Row columns={1}>
    <Grid.Column textAlign='center' columns={3}>

    <Header as='h1' textAlign='center'>  DEV@deakin 2022</Header>
    </Grid.Column>
  </Grid.Row>
    </Grid>
    <Grid columns={3}>
    <Grid.Row textAlign='center'>
      <Grid.Column>
        Privacy Policy
      </Grid.Column>
      <Grid.Column>
       Terms
      </Grid.Column>
      <Grid.Column>
        Code of Conduct
      </Grid.Column>
    </Grid.Row> 
    </Grid>
    </div>
  </>
)

export default FooterMain