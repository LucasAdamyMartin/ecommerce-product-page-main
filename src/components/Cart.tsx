import { useImage } from "../hooks/UseImage"
import '../assets/styles/Cart.css'

export function Cart () {
    const {showProduct, countPanier, setShowProduct} = useImage()
    return (
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
                      <p>$125.00 x {countPanier} <strong>${125 * countPanier}.00</strong></p>
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
    )
}