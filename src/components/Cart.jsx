import CartItem from "./CartItem";
import { CloseCircleIcon } from "@iconicicons/react";

function Cart({ onCloseCart, itemsCart }) {
  return (
    <div className="overlay">
      <div className="draver d-flex flex-column">
        <h1 className="d-flex justify-between align-center">
          Корзина{" "}
          <CloseCircleIcon
            onClick={onCloseCart}
            className="btnClose"
            width={32}
            height={32}
          />
        </h1>
        <div className="item flex">
          {itemsCart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>

        <ul className="totalPrice d-flex flex-column ">
          <li className="mb-20">
            <span>Итого: </span>
            <div className="line"></div>
            <b>21 498 руб. </b>
          </li>
          <li className="mb-20">
            <span>Налог 5%: </span>
            <div className="line"></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <div className="totalBtn mb-30">
          <button className="d-flex align-center justify-center">
            Оформить заказ <img src="/img/arrow-left.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
