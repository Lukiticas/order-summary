import {
  CardBody,
  HeroImg,
  CardDetails,
  CardTitle,
  CardDescription,
  CardButton,
} from "./Card.styles";
import OrderDetails from "../OrderDetail";

export default function Card() {
  return (
    <CardBody>
      <HeroImg src="./images/illustration-hero.svg" />
      <CardDetails>
        <CardTitle>Order Summary</CardTitle>
        <CardDescription>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </CardDescription>
        <OrderDetails />
        <CardButton change>Proceed to Payment</CardButton>
        <CardButton>Cancel Order</CardButton>
      </CardDetails>
    </CardBody>
  );
}
