import './Footer.css'
export function Footer({ filters }) {
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters)
      }
      {/* <h4>Prueba de carrito</h4>
      <span>@yuoo</span>
      <h5>useContext & useReducer</h5> */}
    </footer>
  )
}

