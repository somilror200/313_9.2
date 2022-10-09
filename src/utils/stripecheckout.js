import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Header } from 'semantic-ui-react';

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
  render() {
    return (
        <div class="ui raised very padded  container segment">
        <Header as='h3' block> Pay Now</Header>
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51LqYiuSDGv53EHeHb1QF9QKaScHAe9BeceNediLCvmChxRj5vquNK6y5PfRgI9e5g6uvvYECedd2CnPx4aBN6g6W00DOC4Ribo"
      />
      </div>
    )
  }
}
