import React from "react"

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serch: "" }
    this.cambio = this.cambio.bind(this)
    this.submit = this.submit.bind(this)
  }

  cambio(e) {
    this.setState({ serch: e.target.value })
  }

  submit(e) {
    e.preventDefault()
    let final = this.state.serch.trim()
    this.props.getactual(final)
  }

  render() {
    return (
      <div className="contenedor">
        <img src="/logo.svg" />
        <form onSubmit={this.submit}>
          <input
            name="s" onChange={this.cambio}
            placeholder="Enter the city of Finland"
            autoComplete="off"
          />
          <img onClick={this.submit} src="/search.svg" />
        </form>
        <style jsx>{`
          .contenedor {
            padding-top: 1.5rem;
          }

          form {
            width: 75%;
            margin: 1.5rem auto 1.5rem auto; 
            display:grid;
            grid-template-columns: 8fr 1fr;  
            border-radius: 15px;
            border: 1px solid #ededed;
          }


          form input {
            outline: none;
            border:none;
            border-right: 1px solid #ededed;
            border-radius: 20px 0 0 20px;
            padding: .5rem 0 .5rem .7rem;
            font-size: .9rem
          }

          form img {
            width: 100%;
            cursor: pointer;
            padding: 10%;
          }

          @media screen and (min-width: 550px) {
            .contenedor {
              display: flex;
              justify-content: space-between;
            }

            form {
              margin: 0;
              width: 280px
            }

          }
        `}</style>
      </div>

    )
  }
}

export default Nav;