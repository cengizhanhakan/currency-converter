import { CurrencyProvider } from "/context/CurrencyContext";
import ShopView from "/views/ShopView";

function App() {
  return (
    <CurrencyProvider>
      <ShopView />
    </CurrencyProvider>
  );
}

export default App;
