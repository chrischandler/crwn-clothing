import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  console.log("Initiating StripCheckoutButton component");
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H5ZKKEY44pFgbHvpp1T06NpqtyXpnH8ZDropleZqKrkCSlcyx8tdUY6oS4gGwqnSxeRSBYi6pZMYob5upOGk0Vb001loai1cY";

  const onToken = (token) => {
    console.log("Inside onToken, token is" + token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("payment successful");
      })
      .catch((error) => {
        console.log("payment error " + JSON.parse(error));
        alert("There was an issue with processing your payment");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
