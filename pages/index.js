import Head from 'next/head'
import Cartas from '../components/cartas'
import React from 'react'
import Nav from "../components/general/nav"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: "",
    };
    this.getActual = this.getActual.bind(this);
  }

  getActual(get) {
    this.setState({ get })
  }

  render() {
    const getvalor = this.state.get
    return (
      <div>
        <Head></Head>
        <Nav
          getactual={this.getActual}
        />
        <h1>Stays in Finland</h1>
        <Cartas
          estado={this.state.get}
        />
        <style jsx>{`
          div {
            width: 90%;
            margin: auto;
          }  
        `}</style>
      </div>
    )
  }
}

export default Home;