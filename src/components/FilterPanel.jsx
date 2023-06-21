import { useState } from "react";

const FilterPanel = () => {
  
  const [maxPrice, setMaxPrice]         = useState(500000);
  const [availability, setAvailability] = useState(null);
  const [brand, setBrand]               = useState(null);
  const [size, setSize]                 = useState(null);
  const [color, setColor]               = useState(null);
  const [Categories, setCategories]     = useState(null);

  return (
    <aside className="h-screen overflow-y-scroll hide-scrollbar lg:col-span-4 2xl:col-span-3 sticky top-14 p-5 shadow-lg">
      <div className="filter-item mb-8 border-b pb-5">
        <h6 className="text-xl font-semibold mb-5">Categories</h6>
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <input type="checkbox" name="watxhes" id="1" onChange={(e) => setCategories("watches")}/>
                <label htmlFor="1">Watches</label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="men" id="2" onChange={(e) => setCategories("men")}/>
                <label htmlFor="2">Men</label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="women" id="3" onChange={(e) => setCategories("women")}/>
                <label htmlFor="3">Women</label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="diamonds" id="4" onChange={(e) => setCategories("diamonds")}/>
                <label htmlFor="4">Diamonds</label>
            </div>
        </div>
      </div>
      <div className="filter-item mb-8 border-b pb-5">
        <h6 className="text-xl font-semibold mb-5">Brand</h6>
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <input type="checkbox" name="aces_and_gold" id="1" onChange={(e) => setBrand("aces-and-gold")}/>
                <label htmlFor="1">Aces &amp; Gold</label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="jewelryhub" id="2" onChange={(e) => setBrand("jewelryhub")}/>
                <label htmlFor="2">JewelryHub</label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="rolex" id="3" onChange={(e) => setBrand("rolex")}/>
                <label htmlFor="3">Rolex</label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="icecube" id="4" onChange={(e) => setBrand("icecube")}/>
                <label htmlFor="4">Icecube</label>
            </div>
        </div>
      </div>
      <div className="filter-item mb-8 border-b pb-5">
        <h6 className="text-xl font-semibold mb-5">Price</h6>
        <div className="flex gap-1">
            <span>1,000</span>
            <input type="range" name="price_range" id="priceRange" min={1000} max={500000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
        </div>
      </div>
      <div className="filter-item mb-8 border-b pb-5">
        <h6 className="text-xl font-semibold mb-5">Availability</h6>
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
                <input type="checkbox" name="availability" id="inStock" onChange={(e)=>setAvailability("in_stock")}/>
                <label htmlFor="inStock">In Stock <span>[3]</span></label>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="availability" id="outOfStock" onChange={(e) => setAvailability("out_stock")}/>
                <label htmlFor="outOfStock">Out of Stock <span>[5]</span></label>
            </div>
        </div>
      </div>
      <div className="filter-item mb-8 border-b pb-5">
        <h6 className="text-xl font-semibold mb-5">Material</h6>
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="small" onChange={(e)=>setMaterial("metal")}/>
              <label htmlFor="small">Metal <span>[13]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="medium" onChange={(e) => setMaterial("leather")}/>
              <label htmlFor="medium">Leather <span>[10]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="large" onChange={(e) => setMaterial("resin")}/>
              <label htmlFor="large">Resin <span>[15]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="extraLarge" onChange={(e) => setMaterial("slag")}/>
              <label htmlFor="extraLarge">Slag <span>[25]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="doubleExtraLarge" onChange={(e) => setMaterial("fiber")}/>
              <label htmlFor="doubleExtraLarge">Fiber <span>[5]</span></label>
            </div>
        </div>
      </div>
      <div className="filter-item mb-8 border-b pb-5">
        <h6 className="text-xl font-semibold mb-5">Color</h6>
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="small" onChange={(e)=>setColor("black")}/>
              <label htmlFor="small">Black <span>[13]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="medium" onChange={(e) => setColor("gold")}/>
              <label htmlFor="medium">Gold <span>[10]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="large" onChange={(e) => setColor("silver")}/>
              <label htmlFor="large">Silver <span>[15]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="extraLarge" onChange={(e) => setColor("bronze")}/>
              <label htmlFor="extraLarge">Bronze <span>[25]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="doubleExtraLarge" onChange={(e) => setColor("neon-blue")}/>
              <label htmlFor="doubleExtraLarge">Neon Blue <span>[5]</span></label>
            </div>
        </div>
      </div>
      <div className="filter-item mb-8 border-b pb-5">
        <h6 className="text-xl font-semibold mb-5">Size</h6>
        <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="small" onChange={(e)=>setSize("small")}/>
              <label htmlFor="small">S <span>[13]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="medium" onChange={(e) => setSize("medium")}/>
              <label htmlFor="medium">M <span>[10]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="large" onChange={(e) => setSize("large")}/>
              <label htmlFor="large">L <span>[15]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="extraLarge" onChange={(e) => setSize("extra-large")}/>
              <label htmlFor="extraLarge">XL <span>[25]</span></label>
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="availability" id="doubleExtraLarge" onChange={(e) => setSize("double-extra-large")}/>
              <label htmlFor="doubleExtraLarge">XXL <span>[5]</span></label>
            </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterPanel
