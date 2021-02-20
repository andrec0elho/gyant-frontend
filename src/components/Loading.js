import Loader from "react-loader-spinner";
import React from 'react';

export class LoadingComponent extends React.Component {

  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#fec40e"
        height={100}
        width={100}
      />
    )
  }
}
