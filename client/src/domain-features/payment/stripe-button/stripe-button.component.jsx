import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import "./styles.scss";
import CustomButton from "../../../components/ui-button/ui-button.component";

const StripeCheckoutButton = ({ price }) => {
	const p = price * 100;

	const onToken = (token) => {
		console.log(token);
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: p,
				token: token,
			},
		})
			.then((res) => {
				alert("Payment successful");
			})
			.catch((err) => {
				console.log("Some payment error: " + JSON.parse(err));
				alert(
					"There was an issue with your payment. Please sure you use the provided test credit cart"
				);
			});
	};
	const online = window.navigator.onLine;
	const pk =
		"pk_test_51KRyXWHKML16SJQc8pO62wzQBHCtjY7T5ROBqNUgAUmiSEI99ih0JnZ005hh28kEF2tR3D63gCWVR5vkT5pAzvH400LVT1tXte";
	return online ? (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddressshippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`You total is $${price}`}
			amount={p}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={pk}
			className="asdasd"
		>
			<CustomButton>PAY NOW</CustomButton>
		</StripeCheckout>
	) : (
		<div className="disabled">
			<CustomButton>PAY NOW (offline)</CustomButton>
		</div>
	);
};

function qweqwe() {
	return <div className="asdasd"></div>;
}

/* const StripeCheckoutButton = ({ price }) => {
  return <InjectedCheckoutForm />;
}; */
export default StripeCheckoutButton;
