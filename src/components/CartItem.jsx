const CartItem = ({ item }) => {
  const { totalPrice, img, title } = item;
  return (
    <div className="cardItem d-flex justify-between align-center flex-1">
      <img width={70} height={70} src={img} alt="Kross" />

      <div className="price d-flex flex-column ">
        <p>{title}</p>
        <b>{totalPrice} руб. </b>
      </div>

      <img
        className="deleteBtn"
        width={32}
        height={32}
        src="/img/delete.svg"
        alt="delete Product"
      />
    </div>
  );
};

export default CartItem;
