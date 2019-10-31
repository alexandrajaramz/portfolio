import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
