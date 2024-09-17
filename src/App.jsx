import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="main">
          <Gallery />
          <ProductInfo />
        </div>
      </div>
    </>
  );
}

export default App;
