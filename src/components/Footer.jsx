import { useContext } from 'react'
import './Footer.css'
import { FiltersContext } from '../context/filters'
export function Footer() {
  const {filters} = useContext(FiltersContext)
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

