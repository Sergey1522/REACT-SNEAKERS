// import { CloseCircleIcon } from "@iconicicons/react";
import Card from "./components/Card";
import Cart from "./components/Cart";
// import CartItem from "./components/CartItem";
import Header from "./components/Header";
import Search from "./components/Search";
// import products from "./components/products/Products";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsCart, setItemsCart] = useState([]);
  // const [newProduct] = useState([]);

  useEffect(() => {
    fetch("https://62cd2ab8a43bf7800852c61b.mockapi.io/Items")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setItems(json);
      });
  });
  function addToCard(arr) {
    setItemsCart([...itemsCart, arr]);
  }

  function countProd() {
    setCount(() => count + 1);
  }

  return (
    <div className="wrapper">
      {/* Cart */}
      {openCart && (
        <Cart
          itemsCart={itemsCart}
          onCloseCart={() => {
            setOpenCart(false);
          }}
        />
      )}

      {/* Cart */}

      {/* Header */}
      <Header
        count={count}
        onClickCart={() => {
          setOpenCart(true);
        }}
      />
      {/* Header */}

      <div className="content m-40">
        <div className="d-flex justify-between align-center">
          <h1>Все кроссовки</h1>
          <Search />
        </div>
        <section className="section d-flex flex-wrap  mt-40">
          {items.map((product) => {
            return (
              <Card
                // addProduct={addProduct}
                countProd={countProd}
                product={product}
                key={product.id}
                onPluse={(arr) => {
                  addToCard(arr);
                }}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
