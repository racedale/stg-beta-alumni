import React from 'react';
import base from '../../base';

import AlumniList from './AlumniList';

class Alumni extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      alumni: {
        "alumData": [
          {
          "firstName": "John",
          "lastName": "Adams"
        },
        {
        "firstName": "Todd",
        "lastName": "Allen"
      },
      ]
      }
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`/alumni`,
      {
        context: this,
        state: 'alumni'
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return(
      <div className="flex">
        <p>
          Here is an update on some Alumni of Beta Chapter.
          If you have not already, please provide us your information in the "Tell us About Yourself" tab.
          When you have more time there is a tab, "More Bio Details" for providing additional details and thoughts beyond that.
        </p>
        {this.state.alumni.alumData.map((alum, index) => {
          return <AlumniList key={index} alum={alum}/>
        }
      )}
      </div>
    )
  }
}

export default Alumni;
