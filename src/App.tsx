import './assets/styles/App.css'
import { Header } from './components/Header'
import { Caroussel } from './components/Caroussel';
import { useImage } from './hooks/UseImage';
import { ImageProvider } from './context/ImageProvider';

function AppContent() {
  const {isGalleryOpen, setImagePick, handleGallery } = useImage();
  return (
    <>
      <Header/>
      {isGalleryOpen && 
            <div id="galleryContainer">
              <div id="galleryBackground"/>
              <div id="closeContainer" >
                <button id="close" onClick={handleGallery}>
                  <img src='/images/icon-close.svg' alt="close"/>
                </button>
              </div>
              <div id="galleryCaroussel">
              <Caroussel/>
              <button id="previous" onClick={() => setImagePick((prev) => ((prev - 2 + 4) % 4) + 1)}>
                <img src='/images/icon-next.svg' alt="previous"/>
              </button>
              <button id="next">
                <img src='/images/icon-next.svg' alt="next"/>
              </button>
              </div>
            </div>
        }
      <div id="container">
        <div id="imageSection">
          <Caroussel/>
        </div>
      Sneaker Company

      Fall Limited Edition Sneakers

      These low-profile sneakers are your perfect casual wear companion. Featuring a 
      durable rubber outer sole, they’ll withstand everything the weather can offer.

      $125.00
      50%
      $250.00

      0
      Add to cart
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
