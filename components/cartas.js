let lugares = [
  {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": false,
    "title": "Stylist apartment in center of the city",
    "rating": 4.4,
    "maxGuests": 3,
    "type": "Entire apartment",
    "beds": 2,
    "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
  },
  {
    "city": "Turku",
    "country": "Finland",
    "superHost": false,
    "title": "Nice apartment in center of Helsinki",
    "rating": 4.2,
    "maxGuests": 5,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": true,
    "title": "Arty interior in 1900 wooden house",
    "rating": 4.5,
    "maxGuests": 10,
    "type": "Entire house",
    "beds": 6,
    "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": false,
    "title": "Apartment next to market spuare",
    "rating": 4.48,
    "maxGuests": 3,
    "type": "Entire apartment",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
  },
  {
    "city": "Turku",
    "country": "Finland",
    "superHost": true,
    "title": "Villa Aurora guest-house",
    "rating": 4.75,
    "maxGuests": 9,
    "type": "Entire house",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
  },
  {
    "city": "Vaasa",
    "country": "Finland",
    "superHost": true,
    "title": "A cosy family house",
    "rating": 4.95,
    "maxGuests": 6,
    "type": "Entire house",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Vaasa",
    "country": "Finland",
    "superHost": false,
    "title": "Lovely Studio near Railway Station",
    "rating": 4.68,
    "maxGuests": 2,
    "type": "Private room",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
  },
  {
    "city": "Oulu",
    "country": "Finland",
    "superHost": false,
    "title": "Peaceful little home in city center",
    "rating": 4.12,
    "maxGuests": 6,
    "type": "Entire house",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Oulu",
    "country": "Finland",
    "superHost": false,
    "title": "Beautiful new studio apartment nearby the center",
    "rating": 4.49,
    "maxGuests": 2,
    "type": "Entire apartment",
    "beds": 1,
    "photo": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
  },
  {
    "city": "Oulu",
    "country": "Finland",
    "superHost": true,
    "title": "Cozy woodhouse flat with wooden sauna",
    "rating": 4.38,
    "maxGuests": 4,
    "type": "Entire house",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
  },
  {
    "city": "Vaasa",
    "country": "Finland",
    "superHost": false,
    "title": "Brand new studio apartment near the harbour",
    "rating": 4.89,
    "maxGuests": 6,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Helsinki",
    "country": "Finland",
    "superHost": false,
    "title": "Beautiful and comfortable old wooden house",
    "rating": 4.63,
    "maxGuests": 10,
    "type": "Entire house",
    "beds": null,
    "photo": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
  },
  {
    "city": "Turku",
    "country": "Finland",
    "superHost": false,
    "title": "Turku Nordic Home near city center",
    "rating": 4.24,
    "maxGuests": 5,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
  },
  {
    "city": "Turku",
    "country": "Finland",
    "superHost": true,
    "title": "Nice 2 room apartment close to everything",
    "rating": 4.34,
    "maxGuests": 6,
    "type": "Entire apartment",
    "beds": 3,
    "photo": "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
  }
]

import Carta from './carta'

let total
let cantidad = lugares.length

function Todas(props) {
  if (props.estado == "") {
    cantidad = lugares.length
    total = (
      lugares.map((lugar) =>
        <Carta
          key={lugar.photo}
          superHost={lugar.superHost}
          photo={lugar.photo}
          title={lugar.title}
          rating={lugar.rating}
          type={lugar.type}
          beds={lugar.beds}
          country={lugar.country}
        />
      )
    )
  } else {
    let lugaresRestringidos = [];
    for (let i = 0; i < lugares.length; i++) {
      if (lugares[i].city.includes(props.estado)) {
        lugaresRestringidos.push(lugares[i])
      }
    }
    console.log(cantidad, lugaresRestringidos)
    total = (
      lugaresRestringidos.map((lugar) =>
        <Carta
          key={lugar.photo}
          superHost={lugar.superHost}
          photo={lugar.photo}
          title={lugar.title}
          rating={lugar.rating}
          type={lugar.type}
          beds={lugar.beds}
        />
      )
    )
    cantidad = lugaresRestringidos.length
  }

  return (
    <div className="lugares-contenedor">
      {total}
      <style jsx>{`
          .lugares-contenedor {
            display:grid;
            grid-template-columns: 1fr;
          }

          @media screen and (min-width: 700px) {
            .lugares-contenedor {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media screen and (min-width: 770px) {
            .lugares-contenedor {
              width: 90%;
              margin: auto;
            }
          }

          @media screen and (min-width: 850px) {
            .lugares-contenedor {
              width: 85%;
              margin: auto;
            }
          }

          @media screen and (min-width: 1000px) {
            .lugares-contenedor {
              grid-template-columns: repeat(3, 1fr);
              width: 100%;
            }
          }
        `}</style>
    </div>
  )
}

export default function Cartas(props) {
  return (
    <div>
      <Todas
        estado={props.estado}
      />
    </div>
  )
}