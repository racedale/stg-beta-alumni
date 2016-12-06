import React from 'react';
import './loading.css'

const Loading = (props) => {
  return (
    <div className="loading">
      <img src="/images/loading.png" className="loading-logo" alt="logo"/>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
