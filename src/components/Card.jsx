import { useState } from "react";

const Card = ({ product, onPluse, countProd, addProduct }) => {
  // const { id } = product;

  const [isAdded, setIsAdded] = useState(false);

  function onClickPluse() {
    onPluse(product);
    setIsAdded(!isAdded);
  }

  return (
    <div className="card">
      <div className="favorit">
        <img src="/img/heart-unlike.svg" alt="Unlike" />
      </div>

      <img width={133} height={112} src={product.img} alt="Kross" />
      <p>{product.title}</p>

      <div className="d-flex justify-between mt-15 align-center">
        <div className="price d-flex flex-column ">
          <span>цена:</span>
          <b>{product.totalPrice} руб.</b>
        </div>

        <img
          onClick={onClickPluse}
          src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
          width={32}
          height={32}
          alt="Add Product"
        />
      </div>
    </div>
  );
};

export default Card;
