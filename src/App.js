import { ProductList, Cart } from "./check";
import CartProvider from "./check";
function App() {
  return (
    <div>
      <header>
        <CartProvider>
          <div>
            <h1>Shopping Cart Example</h1>
            <ProductList />
            <Cart />
          </div>
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
