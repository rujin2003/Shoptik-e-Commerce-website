import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useProductsContext } from "../context/products_context"
import { Loading, Error, ProductImage, Product_title } from "../components"
import { getUniqueValues } from "../utils/helper"
import { useFilterContext } from "../context/filter_context"
import ReactGA from "react-ga4"
const HomeProduct = () => {
  const { products_loading, products_error } = useProductsContext()
  const {
    filters: { category },
    all_products,
    updateFilters,
    filtered_products: products,
  } = useFilterContext()
  if (products_loading) return <Loading />
  if (products_error) return <Error />
  const dummydata=useState([{id:1,sale:"sold",new_in_market:false},{id:2,sale:"sold2",new_in_market:false},{id:3,sale:"sold3",new_in_market:false},{id:4,sale:"sold4",new_in_market:false}])
  const categories = getUniqueValues(all_products, "category");
  
  return (
    <>
      <section className=" mt-20 md:mt-28 ">
        <div className="container mx-auto px-5 text-xs md:text-base xl:px-28  ">
          {/* Right buttons */}
          <div className="scrollbar-hide flex snap-x space-x-5 overflow-auto md:space-x-14  ">
            {categories.map((categoryButton, index) => {
              return (
                <button
                  name="category"
                  key={index}
                  onClick={(e) => {
                    updateFilters(e)
                    ReactGA.event({
                      category: "example category",
                      action: "tab button clicked",
                      label: "Example Button",
                    })
                  }}
                  className={` snap-start text-start font-medium uppercase tracking-widest ${
                    category === categoryButton
                      ? "border-b-[1.8px] border-primary text-primary "
                      : null
                  } `}
                >
                  {categoryButton}
                </button>
              )
            })}
          </div>
          {/* Left button */}
          {/* <div className="space-x-2 text-xs  ">
            <button className="uppercase tracking-widest border-r pr-2 border-black">
              Back
            </button>
            <button className="uppercase tracking-widest">Next</button>
          </div> */}
        </div>

        <div className="container mx-auto mt-10 px-5 xl:px-28">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {products.slice(0, 8).map((product) => {
              const { id, sale, new_in_market } = product
              return (
                <article key={id} className=" group relative space-y-5 ">
                  <ProductImage
                    product={product}
                    className="h-40 p-4 md:p-5 lg:h-44 xl:h-80 xl:p-8 "
                  />
                  <Product_title product={product} />
                  {sale && (
                    <div className="absolute -top-7 right-3 bg-red-500 px-2 py-[2px] text-[8px]  uppercase tracking-wider text-gray-100 xl:px-3 xl:text-xs">
                      <p>Sale</p>
                    </div>
                  )}
                  {new_in_market && (
                    <div className="absolute -top-7 right-3 bg-green-500 px-2 py-[2px] text-[8px]  uppercase tracking-wider text-gray-100 xl:px-3 xl:text-xs ">
                      <p>new</p>
                    </div>
                  )}
                </article>
                // <div key={product.id} className="flex border-[1.5px] border-black border-solid bg-slate-400 w-[100px] h-[100px]">
                //     id is {product.id}
                //     <p> sale:{product.sale}</p>
                // </div>
              )
            })}
          
          </div>

          {/* Button */}
          <div className="my-10 flex flex-row items-center justify-between space-x-4">
            <div className=" w-2/3 border-b bg-gray-600 xl:w-2/5"></div>
            <Link
              to="/shop"
              className=" w-full border border-primary py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-700 md:w-1/2 xl:w-1/6 xl:text-base"
            >
              Go to shop
            </Link>
            <div className=" w-2/3 border-b bg-gray-600 xl:w-2/5"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeProduct
