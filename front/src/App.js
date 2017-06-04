import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


class App extends Component {
	state = {
		username : '',
	}

	submitForm = (e) => {
		e.preventDefault();
		console.log(e.target.username.value);
		axios({
			method: 'POST',
			url: 'http://localhost:8080/api/users/register',
			data: {
				'username': e.target.username.value
			}
		}
		)
		.then((results) =>{ // gere le retour de l'axios (les donnees envoyer dans le res.send)
			console.log(results.data);
			this.setState({username: results.data})
		})
	}

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

		<form onSubmit={this.submitForm}>
			<input type="text" name="username" placeholder="username"/>
		</form>
		<p>vous avez taper {this.state.username}</p>
      </div>
    );
  }
}

export default App;
