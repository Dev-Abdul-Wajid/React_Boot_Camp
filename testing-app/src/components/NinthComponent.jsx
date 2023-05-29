import React from 'react';

// Ninth class component componentDidMount
class NinthComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null,
    };
  }

  // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ response: json }))
  }

  render() {
    const { response } = this.state;

    return (
      <div className="App">
        <h1>My Component</h1>
        <p>API Response</p>

        {
          response ? (
            <ul>
              {response.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          ) : (<p>Loading...</p>)
        }
      </div>
    );
  }
}

export default NinthComponent;
