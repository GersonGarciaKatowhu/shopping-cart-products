import { useState, useId, useContext } from 'react'
import './Filters.css'
import { FiltersContext } from '../context/filters'
const options = [['all', "Todos"], ['laptops', 'Laptops'], ['smartphones', 'Celulares'], ["fragrances", 'Perfume'], ['skincare', 'Skincare'], ['groceries', 'Comestibles']]
function Filters() {
  const {setFilters, filters } = useContext(FiltersContext)
  const [minPrice, setMinPrice] = useState(0)
  const categoryFilterId = useId()
  const minPriceFilterId = useId()
  function handleChangeMinPrice(e) {
    setMinPrice(e.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }
  function handleChangeCategory(e) {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>
          Precio a partir de
        </label>
        <input type="range" id={minPriceFilterId} min={0} max={2000} onChange={handleChangeMinPrice}/>
        <span>${minPrice}</span>
      </div>
      
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          {
            options.map((option)=>(
              <option key={option[0]} value={option[0]}>{option[1]}</option>
            ))
          }
        </select>
      </div>
    </section>

  )
}

export default Filters
