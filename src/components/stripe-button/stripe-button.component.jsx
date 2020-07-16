import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H5ZKKEY44pFgbHvpp1T06NpqtyXpnH8ZDropleZqKrkCSlcyx8tdUY6oS4gGwqnSxeRSBYi6pZMYob5upOGk0Vb001loai1cY";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful!");
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
      onToken={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
