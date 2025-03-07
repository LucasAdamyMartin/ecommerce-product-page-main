import { useImage } from "../hooks/UseImage"
import '../assets/styles/Caroussel.css'
export function Caroussel() {
    const {imagePick, setImagePick, setIsGalleryOpen} = useImage();
    return (
      <>
          <button id="largeImage" onClick={() => (setIsGalleryOpen((true)))}>
              <img src={`/images/image-product-${imagePick}.jpg`} alt={`product${imagePick}`}/>
          </button>
            <div id="caroussel">
            {[...Array(4)].map((_, i) => (
              <button className= {(i+1 === imagePick) ? "pick" : "noPick" } onClick={() => setImagePick(i+1)} key={i+1}>
                <img src={`/images/image-product-${i+1}.jpg`} alt={`product${i+1}`} />
              </button>
            ))}
            </div>
      </>
    )
}