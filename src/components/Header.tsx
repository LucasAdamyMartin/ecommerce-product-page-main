import { useState } from "react";
import '../assets/styles/Header.css'

export function Header() {
    const navigation_items : string[] = [
        "Collections",
        "Men",
        "Women",
        "About",
        "Contact"
      ]
    
      const [cartIsOpen, setCartIsOpen] = useState(false);

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
              Your cart is empty.
            </div>
          </div>
          }
      </header>
    )
}