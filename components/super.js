export default function SuperHost(props) {
  let numero = 0;
  if (props.beds == 1) {
    numero = " 1 bed"
  } else if (props.beds > 1) {
    numero = ` ${props.beds} beds`
  } else if (props.beds == null) {
    numero = ""
  }

  if (props.super) {
    return (
      <div>
        <span className="super">SUPER HOST</span>
        <p className="p">{props.type} {numero}</p>
        <style jsx>{`
          div {
            width: auto;
            margin: none;
            padding-top: .5rem;
            padding-left: .4rem;
            padding-right: .4rem
          }

          .super {
            border: 1px solid #000;
            border-radius: 12.5px;
            padding: .3rem .4rem;
            font-size: .6rem;
          }

          .p {
            margin-block-start: 0;
            margin-block-end: 0;
            display: inline-block; 
            margin-left: .5rem;
            color: #999;
            font-size: .8rem;
          }
        `}</style>
      </div>
    )
  }
  return (
    <div>
      <p className="p">{props.type} . {numero}</p>
      <style jsx>{`
        .p {
          margin-block-start: 0;
          margin-block-end: 0;
          display: inline-block; 
          margin-top: .55rem;
          margin-left: .5rem;
          color: #999;
          font-size: .8rem;
        }
      `}</style>
    </div>
  )
}