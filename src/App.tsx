import './assets/styles/App.css'
import { Header } from './components/Header'
import { Caroussel } from './components/Caroussel';
import { useImage } from './hooks/UseImage';
import { ImageProvider } from './context/ImageProvider';
import { Gallery } from './components/Gallery';

function AppContent() {
  const {isGalleryOpen } = useImage();
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
          <h2 id="priceDiscount">$125.00</h2>
          <div id="discount">50%</div>
          <p id="price">$250.00</p>
          <div id="addToCart">
            <div id="numberOfProduct">
              <img id="minus" src='/images/icon-minus.svg' alt="minus"/>
              <p>0</p>
              <img id="plus" src='/images/icon-plus.svg' alt="plus"/>
            </div>
            <div id="buttonToAdd">
              <img src='images/icon-cart.svg' alt='cart'/>
              <p>Add to cart</p>
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
