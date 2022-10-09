import React from 'react'
import { Header,List } from 'semantic-ui-react';
const  Footer = (props) => (
<div>
<Header as='h1'>{props.title}</Header>
<List>
    {
        props.values.map(string =>
            <List.Item>
              {string}
              </List.Item>
        )
    }
  </List>
</div>
);
export default Footer;