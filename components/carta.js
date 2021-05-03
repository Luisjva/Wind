import React from 'react'
import SuperHost from './super'

class Carta extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

        <section>
          <img className="img" src={this.props.photo} />


          <div className="div2">

            <SuperHost
              super={this.props.superHost}
              type={this.props.type}
              beds={this.props.beds}
            />

            <div className="votacion">
              <img className="estrella" src="/estrella.svg" />
              <p className="votacion-p">{this.props.rating}</p>
            </div>
          </div>


          <p className="descripcion">{this.props.title}</p>

          <p className="titulo">{this.props.superHost}</p>
        </section>

        <style jsx>{`
          section {
            width: 320px;
            margin: 2rem auto 0 auto;
            border-radius: 1.5rem;
            padding-bottom: 0.5rem;
          }

          section:hover {
            border: 1px solid #333
          }
  
          .img {
            width: 320px;
            height: 212px;
            border-radius: 1.5rem;
            object-fit: cover;          
          }  
  
          section div {
            width: 100%;
          }
  
          .div2 {
            display: flex;
            justify-content: space-between;
          }
  
          .div2 div {
            width: auto;
            margin: none;
            padding-top: .5rem;
            padding-left: .4rem;
            padding-right: .4rem
          }
  
          .descripcion {
            padding: .4rem;
          }
  
          .votacion {
            display: flex;
            font-size: .8rem; 
            align-content: center;
          }
  
          .votacion-p {
            margin-block-start: 0;
            margin-block-end: 0;   
            margin-top: 1px       
          }
  
          .titulo {
            margin-block-start: 0;
            margin-block-end: 0;
          }

        `}</style>
      </div>
    )

  }
}
export default Carta
