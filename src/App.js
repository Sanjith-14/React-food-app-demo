import React , {useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import Cart from "./components/Cart/Cart";

// To use context we want to  wrap
import CartProvider from "./store/CartProvider";

function App() {

  // eslint-disable-next-line
  const [cartIsShown , setCartIsShown] = useState(false);
  // eslint-disable-next-line
  const showCartHandler= () =>{
    setCartIsShown(true);
  }
  // eslint-disable-next-line
  const hideCartHandler= () =>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
