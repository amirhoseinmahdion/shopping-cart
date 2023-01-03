import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Cartshop from "./components/Cartshop";
// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContext from "./context/CartContext";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <ProductContextProvider>
      <CartContext>
        <Navbar/>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/Cartshop" component={Cartshop}/>
          <Redirect to="/products" />
          
        </Switch>
      </CartContext>
    </ProductContextProvider>
  );
}

export default App;
