import React from 'react';

class Alumni extends React.Component {

  render() {
    return(
      <p>
        <strong>{this.props.alum.firstName} {this.props.alum.lastName}</strong> - 
        If you have not already, please provide us your information in the "Tell us About Yourself" tab.
        When you have more time there is a tab, "More Bio Details" for providing additional details and thoughts beyond that.
      </p>
    )
  }
}

export default Alumni;
