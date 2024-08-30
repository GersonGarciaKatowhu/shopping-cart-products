import { useId } from 'react'
import './Filters.css'
import useFilters from '../hooks/useFilters'
function Filters() {
  const {setFilters, filters, options } = useFilters()
  const categoryFilterId = useId()
  const minPriceFilterId = useId()
  function handleChangeMinPrice(e) {
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
          Price from
        </label>
        <input type="range" id={minPriceFilterId} min={0} max={2000} onChange={handleChangeMinPrice} value={filters.minPrice}/>
        <span>${filters.minPrice}&nbsp;</span>
      </div>
      
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
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
