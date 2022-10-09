import React from 'react'

import { Grid,Header, Button} from 'semantic-ui-react'


import FeaturedTutorials from './featuredtutorials'
import FeaturedArticles from './featuredarticles'

import Subscribe from './subscribe'
import BannerImage from './bannerimage'
let articles=[{title:'First Article',content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',image:'art1.jpg',rating:4,author:'Aurthor'},
{title:'Second Article',content:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley .',image:'art2.jpg',rating:4,author:'Timsy'},
{title:'Third Article',content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',image:'art3.jpg',rating:4,author:'Berin'}
]

let tutorials=[{title:'First Tutorial',content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',image:'tut1.jpg',rating:4,author:'Aurthor'},
{title:'Second Tutorial',content:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley .',image:'tut2.jpg',rating:4,author:'Timsy'},
{title:'Third Tutorial',content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',image:'tut3.jpg',rating:4,author:'Berin'}
]

const  Home = (props) => (
   
<div>

<div class="ui raised very padded  container segment">
  <BannerImage/>
<Header as='h1' textAlign='center'>Featured Articles</Header>
    <Grid columns={3}>
    
          
        <Grid.Row>
          {
            articles.map(data=>
              <Grid.Column>
              <FeaturedArticles content={data}/>
              </Grid.Column>
            )
          }
         
         
        </Grid.Row>
    </Grid>

    <Grid columns={1}>
        <Grid.Row>
          <Grid.Column textAlign='center' columns={3}>
          <Button content='See all Articles' textAlign='center' />
          </Grid.Column>
        </Grid.Row>
     </Grid>

    <Header as='h1' textAlign='center'>Featured Tutorials</Header>
    <Grid columns={3}>
        <Grid.Row>
          {
            tutorials.map(data=>
              <Grid.Column>
              <FeaturedTutorials content={data}/>
              </Grid.Column>
            )
          }
        </Grid.Row>
     </Grid>

     <Grid columns={1}>
        <Grid.Row>
          <Grid.Column textAlign='center' columns={3}>
          <Button content='See all Tutorials' textAlign='center' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
 </div>

 <div class="ui raised very padded container segment">
 <Grid columns={1}>
        <Grid.Row>
          <Grid.Column textAlign='center' >
         <Subscribe/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

  </div> 

</div>
);
export default Home;