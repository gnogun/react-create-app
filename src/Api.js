/* eslint-disable react/no-array-index-key */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

class Api extends Component {
  state = {
    data: [],
  };
  

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  const [couponList, setCouponList] = React.useState(Array<Coupon>());

  render() {
    const { data } = this.state;

    const result = data.map((entry, index) => <li key={index}>{entry}</li>);

    return <><ul>{result}</ul> {param} </>;
  }
}

export default Api;
