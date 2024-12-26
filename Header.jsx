import React from 'react'

const Header = () => {
  return (
   <nav>
    <div className='logo'>
    <h1>PickBazar</h1>
    <select>
        <option>Grocery</option>
    </select>
    </div>
    <ul className='links'>
        <li>Shops</li>
        <li>Offers</li>
        <li>Contact</li>
        <li><select className='pages'><option>Pages</option></select></li>
        <li><button>Join</button></li>
        <li><button>Become a Seller</button></li>
    </ul>
   </nav>
  )
}

export default Header