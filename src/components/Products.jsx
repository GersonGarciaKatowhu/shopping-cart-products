import './Products.css'
export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map( product =>
        (
          <li key={product.id}>
            <p>No image</p>
            <div>
              <h3>{product.title} - ${product.price}</h3>
            </div>
            <div>
              <button>Add</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

