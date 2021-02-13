import { Component } from 'react';
import { Route } from 'react-router-dom';
import './main.scss';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    login: false,
  }

  componentDidMount() {
    const isLogged = JSON.parse(localStorage.getItem('login'));
    if (isLogged) this.setState({ login: true });
  }

  loginFunction = () => {
    localStorage.setItem('login', JSON.stringify(true));
    this.setState({ login: true })
  }

  render() {
    return (
      <div className="App" >
        <Navbar loginFunc={this.loginFunction} login={this.state.login} />
        <div className="container">
          <div className="page">
            <Route path='/' exact component={Home} />
            {this.state.login ? <Route path='/profile' component={Profile} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
