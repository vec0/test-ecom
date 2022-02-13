import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (t) => {
  alert("payment succesfuul");
};
const StripeCheckoutButton = ({ price }) => {
  const p = price * 100;
  const pk =
    "pk_test_51KRyXWHKML16SJQc8pO62wzQBHCtjY7T5ROBqNUgAUmiSEI99ih0JnZ005hh28kEF2tR3D63gCWVR5vkT5pAzvH400LVT1tXte";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddressshippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={"You total is $${price}"}
      amount={p}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pk}
    />
  );
};

export default StripeCheckoutButton;
