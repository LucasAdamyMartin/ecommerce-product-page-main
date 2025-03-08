import './assets/styles/App.css'
import { Header } from './components/Header'
import { Caroussel } from './components/Caroussel';
import { useImage } from './hooks/UseImage';
import { ImageProvider } from './context/ImageProvider';
import { Gallery } from './components/Gallery';
import { useState } from 'react';

function AppContent() {
  const {isGalleryOpen, setCartIsOpen, setShowProduct , setCountPanier} = useImage();
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const handleRemovePanier = () => {
    setSelectedQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAddPanier = () => {
    setSelectedQuantity((prev) => prev + 1);
  };

  const handlePlaceIn = () => {
    if (selectedQuantity === 0) {
      alert("Sélectionnez un nombre de produits valide");
    } else {
      setCountPanier(selectedQuantity); 
      setCartIsOpen(true);
      setShowProduct(true);
    }
  };
 
  return (
    <>
      <Header/>
      {isGalleryOpen && <Gallery/>}
      <div id="container">
        <div id="imageSection">
          <Caroussel/>
        </div>
        <div id="textSection">
          <p id="companyName">Sneaker Company</p>
          <h1 id="shoesName">Fall Limited Edition Sneakers</h1>
          <p id="description">These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div id="discountSection">
            <h2 id="priceDiscount">$125.00</h2>
           <div id="discount">50%</div>
          </div>
          <p id="price">$250.00</p>
          <div id="addToCart">
            <div id="numberOfProduct">
              <button onClick={handleRemovePanier}>
                <img id="minus" src='/images/icon-minus.svg' alt="minus"/>
              </button>
              <p>{selectedQuantity}</p>
              <button onClick={handleAddPanier}>
                <img id="plus" src='/images/icon-plus.svg' alt="plus"/>
              </button>
            </div>
            <button id="buttonToAdd" onClick={handlePlaceIn}>
              <img src='images/icon-cart.svg' alt='cart'/>
              <p>Add to cart</p>
            </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <ImageProvider>
      <AppContent />
    </ImageProvider>
  );
}
