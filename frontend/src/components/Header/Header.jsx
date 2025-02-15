import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
          <div className="header-contents">
                <h2>Order your favourite food here.</h2>
                <p>Taste Our Foods with enjoyness your Day!</p>
                <a href='#explore-menu'><button>View Menu</button></a>
          </div>
    </div>
  )
}

export default Header