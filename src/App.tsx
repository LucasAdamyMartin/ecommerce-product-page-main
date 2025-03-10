import './assets/styles/App.css'
import { Header } from './components/Header'
import { Caroussel } from './components/Caroussel';
import { useImage } from './hooks/UseImage';
import { ImageProvider } from './context/ImageProvider';
import { Gallery } from './components/Gallery';
import { useEffect, useState } from 'react';
import { Menu } from './components/Menu';

function AppContent() {
  const {isGalleryOpen, imagePick, setCartIsOpen, setShowProduct , setCountPanier, setImagePick, menuIsOpen, setMenuIsOpen} = useImage();
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

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (windowSize.width > 800) setMenuIsOpen(false)
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
 
  return (
    <>
      <Header/>
      {menuIsOpen && <Menu/>}
      {isGalleryOpen && <Gallery/>}
      <div id="body">
      <div id="container">
        <div id="imageSection">
          { (windowSize.width > 650) ? <Caroussel/> : 
          <div id="largeImageMobile">
            <img src={`/images/image-product-${imagePick}.jpg`} alt={`product${imagePick}`}/>
            <button id="previousMobile" onClick={() => setImagePick((prev) => ((prev - 2 + 4) % 4) + 1)}>
              <img src='/images/icon-next.svg' alt="previousMobile" style={{   rotate: '180deg', width: '12px', height: 'auto' }}/>
            </button>
            <button id="nextMobile" onClick={() => setImagePick((prev) => ((prev % 4) + 1))}>
              <img src='/images/icon-next.svg' alt="nextMobile" style={{ width: '12px', height: 'auto' }}/>
            </button>
          </div>
        }
        </div>
        <div id="textSection">
          <p id="companyName">Sneaker Company</p>
          <h1 id="shoesName">Fall Limited Edition Sneakers</h1>
          <p id="description">These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div id="containerPrice">
          <div id="discountSection">
            <h2 id="priceDiscount">$125.00</h2>
           <div id="discount">50%</div>
          </div>
          <p id="price">$250.00</p>
          </div>
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
