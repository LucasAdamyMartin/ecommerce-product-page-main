import './App.css'

function App() {
  const navigation_items : string[] = [
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact"
  ]

  return (
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
        <img src="/images/icon-cart.svg" alt="cart"/>
        <a href="/">
          <img id="profile" src="/images/image-avatar.png" alt="profile"/>
        </a>
      </div>
    </header>
  )
}

export default App
