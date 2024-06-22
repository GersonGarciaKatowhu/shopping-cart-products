import Filters from './Filters'

function Header({changeFilters}) {
  return (
    <header>
      <h1>React shop</h1>
      <Filters changeFilters={changeFilters}/>
    </header>
  )
}

export default Header
