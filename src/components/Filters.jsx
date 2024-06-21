import { useState } from 'react'
import './Filters.css'
const options = [['all', "Todos"], ['laptops', 'Laptops'], ['smartphones', 'Celulares'], ["fragrances", 'Perfume'], ['skincare', 'Skincare'], ['groceries', 'Comestibles']]
function Filters() {
  const [minPrice, setMinPrice] = useState(0)
  function handleChangeMinPrice(e) {
    setMinPrice(e.target.value)
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">
          Precio a partir de
        </label>
        <input type="range" id="price" min={0} max={10000} onChange={handleChangeMinPrice}/>
        <span>${minPrice}</span>
      </div>
      
      <div>
        <label htmlFor="category">Categoría</label>
        <select>
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
