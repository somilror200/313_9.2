import React from 'react'
import { Card, Rating, Image } from 'semantic-ui-react'

const FeaturedTutorials = (props) => (
  <Card>
  <Image src={props.content.image} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{props.content.title}</Card.Header>
    <Card.Meta>{props.content.author}</Card.Meta>
    <Card.Description>
      {props.content.content}
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a href="#">
    <Rating defaultRating={props.content.rating} maxRating={5} disabled />
    </a>
  </Card.Content>
</Card>
)

export default FeaturedTutorials