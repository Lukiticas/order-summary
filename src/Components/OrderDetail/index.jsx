import {
  OrderBody,
  OrderIcon,
  OrderPrices,
  ChangeOrder,
} from "./OrderDetail.styles";

export default function OrderDetails() {
  return (
    <OrderBody>
      <OrderIcon src="./images/icon-music.svg" />
      <OrderPrices>
        <h3>Annual Plan</h3>
        <p>
          59.99<span>year</span>
        </p>
      </OrderPrices>
      <ChangeOrder>Change</ChangeOrder>
    </OrderBody>
  );
}
