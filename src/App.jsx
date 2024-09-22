import Gallery from "./components/Gallery";
import Header from "./components/Header";
import LightboxModal from "./components/LightboxModal";
import ProductInfo from "./components/ProductInfo";
import useGalleryStore from "../stores/gallery-store";

 
function App() {
  const {isModalOpen} = useGalleryStore()
  return (
    <>
      <div className="app-container">
        <Header />
        <main>
          <Gallery/>
          <ProductInfo />
        </main>
        {isModalOpen && <LightboxModal />}
      </div>
    </>
  );
}

export default App;
