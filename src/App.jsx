import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <main>
          <Gallery />
          <ProductInfo />
        </main>
      </div>
    </>
  );
}

export default App;
