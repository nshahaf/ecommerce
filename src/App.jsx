import { useState } from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import LightboxModal from "./components/LightboxModal";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="app-container">
        <Header />
        <main>
          <Gallery setIsModalOpen={setIsModalOpen}/>
          <ProductInfo />
        </main>
        {isModalOpen && <LightboxModal setIsModalOpen={setIsModalOpen}/>}
      </div>
    </>
  );
}

export default App;
