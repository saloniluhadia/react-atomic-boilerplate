/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Product from 'components/Product';
import ProdWrapper from './prod-wrapper';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App(props) {
  var productList=[];
    for(var i=0; i<300; i++){
      productList.push(<Product/>);
    }
  return (
    <AppWrapper>
    <Header/>
    <ProdWrapper>
      {productList}
     </ProdWrapper>
     <Footer/>
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
