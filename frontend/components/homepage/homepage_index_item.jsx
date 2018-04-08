import React from 'react';
import { Link } from 'react-router-dom';


const HomepageIndexItem = ({ product }) => {

  return (
    <li className="homepage items">
      <ul>
        <li><img className='homepage productImg' src={product.imageUrl}/></li>
        <li className='home productName'><Link to={`/products/${product.id}`} className="home productName">{product.productName}</Link></li>
        <li className="home productSeller">{product.seller.username}</li>
        <li className="home productRating">Rating</li>
        <li className='home productCost'>${(product.cost).toFixed(2)}</li>
      </ul>
    </li>);
};

export default HomepageIndexItem;
