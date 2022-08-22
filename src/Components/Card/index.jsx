import OrderDetails from "../OrderDetail";
import {
  CardBody,
  HeroImg,
  CardDetails,
  CardTitle,
  CardDescription,
  CardButton,
} from "./Card.styles";

export default function Card({ setTheme }) {
  return (
    <CardBody>
      <HeroImg
        alt="click here to change themes!"
        src="./images/illustration-hero.svg"
        onClick={setTheme}
      />
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
