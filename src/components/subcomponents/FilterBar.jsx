import { useState } from "react"


const FilterBar = () => {

    const [sort, setSort] = useState("alphabetically");

  return (
    <div className="flex justify-between items-center gap-4 w-full rounded-3xl border py-3 px-8 mb-12">
      <ul className="flex gap-5 text-2xl">
        <li><span className="bi bi-grid"></span></li>
        <li><span className="bi bi-list"></span></li>
      </ul>
      <form className="flex gap-2 items-center">
        <label htmlFor="sort" className="text-gray-400">Sort By</label>
        <select name="" id="sort" onChange={(e)=>setSort(e.target.value)}>
            <option value="alphabetically">Alphabetically A - Z</option>
            <option value="priceDesc">Price (Lowest to highest)</option>
            <option value="priceAsc">price (Highest to Lowest)</option>
        </select>
      </form>
      <ul className="md:hidden">
        <li>Filter By <span className="bi bi-chevron-down"></span></li>
      </ul>
    </div>
  )
}

export default FilterBar
