import React from 'react'
import { Button ,Header} from 'semantic-ui-react'

const SocialButtons = () => (
  <div>
    <Header as='h1'>Stay Connected</Header>
    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
  </div>
)

export default SocialButtons