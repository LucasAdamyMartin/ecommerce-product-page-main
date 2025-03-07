import '../assets/styles/Header.css'
import { useImage } from "../hooks/UseImage";

export function Header() {
    const navigation_items : string[] = [
        "Collections",
        "Men",
        "Women",
        "About",
        "Contact"
      ]
    
    const {cartIsOpen, setCartIsOpen, showProduct, setShowProduct} = useImage();

    const handleChange = () => {
        setCartIsOpen((prev) => !prev);
        console.log(!cartIsOpen);
    };
    return(
        <header>
        <div id="leftHeader">
          <h1 id="title">sneakers</h1>
          <div id="navigation">
            {navigation_items.map((item) => (
              <div key={item} id={item}>
                <a href="/">{item}</a>
              </div>
            ))}
          </div>
        </div>
        <div id="rightHeader">
          <button onClick={handleChange} id="cartButton">
            <img src="/images/icon-cart.svg" alt="cart"/>
          </button>
          <a href="/">
            <img id="profile" src="/images/image-avatar.png" alt="profile"/>
          </a>
        </div>
        {cartIsOpen && 
          <div id="cartBox">
            <header id="headerCart">
              <p id="titleCart">
                Cart
              </p>
            </header>
            <div id="bodyCart">
              {showProduct ? 
              <>
              <div id="firstPart">
                <img src='images/image-product-1-thumbnail.jpg' alt="product"/>
                <div>
                  <h1>Fall Limited Edition Sneakers</h1>
                  <p>$125.00 x 0 <strong>$125</strong></p>
                </div>
                <button onClick={() => (setShowProduct(false))}>
                  <img src='images/icon-delete.svg' alt="delete"/>
                </button> 
              </div>
              <div id="secondPart">
                <button>Checkout</button>
              </div> 
              </> : <p>Your cart is empty.</p>}
            </div>
          </div>
          }
      </header>
    )
}