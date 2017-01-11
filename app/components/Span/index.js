/**
*
* Span
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';


class Span extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
  	
    return (
      <span>
        {this.props.spanProp}
      </span>
    );
  }
}

export default Span;
