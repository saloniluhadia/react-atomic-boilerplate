/**
*
* Product
*
*/

import React from 'react';
import Div from 'components/Div';
import A from 'components/A';
import Span from 'components/Span';
import Img from 'components/Img';
import Banner from './image1.jpg';
import Flipkart from './logo.jpg';
import messages from './messages';
import ImgClass from './product';
import Logo from './logo';
import Wrapper from './Wrapper';

function Product() {
  var name = {...messages.prodName}.defaultMessage,
      rating = {...messages.prodRating}.defaultMessage,
      review = {...messages.prodReview}.defaultMessage,
      price = {...messages.prodPrice}.defaultMessage;
  return (
    <Wrapper>
      	 
        <A href="#">
       
            <ImgClass src={Banner} alt="react-boilerplate - Logo" />
        
        </A>
        <div>
          <A href="#">
              <Span spanProp = {name}/>
          </A>
          <div>
            <Span spanProp = {rating} />
            <Span spanProp = {review} />
            <Logo src={Flipkart} alt="flipkart - Logo" />
          </div>
          <Span spanProp = {price} />
        </div>
        
    </Wrapper>
  );
}

export default Product;
