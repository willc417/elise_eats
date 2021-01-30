import React from 'react';
import {Link} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'

class Desserts extends React.Component {
  render() {
    return (
      <div>
      <div className="aboutTextHolder">
      <h1 className="dessertTitle">Featured Homemade Desserts</h1>
      <h2 className="dessertHeader">Pies - $16</h2>
      <ul className="dessertList">
        <li>Lemon Ice Box</li>
        <li>Chocolate</li>
        <li>Chess</li>
        <li>Chocolate Chess</li>
        <li>Pecan</li>
        <li>Coconut</li>
        <li>Strawberry</li>
     </ul>
     <h2 className="dessertHeader">Layer Cakes - $40</h2>
     <ul className="dessertList">
       <li>Strawberry</li>
       <li>Caramel</li>
       <li>Italian Cream</li>
       <li>Carrot</li>
       <li>Strawberry Lemonade</li>
    </ul>
    <h2 className="dessertHeader">Square Cakes - $25</h2>
    <ul className="dessertList">
      <li>Chocolate Coke Cake</li>
      <li>Butterfinger Cake</li>
      <li>Mother's Brownies</li>
   </ul>
      </div>
      </div>
    )
  }
}

export default Desserts
