import React from 'react'
import { useProductsContext } from "../context/products_context"
import { CategoryProducts } from "../components"

const ProductCategory = () => {
  const { products, products_loading } = useProductsContext()

 
  if (products_loading) {
    return <p>Loading...</p> 
  }

  
  const all_Decoration_products = products.filter(
    (product) => product.category.toLowerCase() === "decoration"
  )
  const all_Architect_products = products.filter(
    (product) => product.category.toLowerCase() === "architect"
  )

  return (
    <>
      <section className="mt-20 md:mt-28">
        <div className="container mx-auto px-5 xl:px-28 py-2">
          <CategoryProducts
            products={all_Decoration_products}
            category_name="Decoration"
          />
          <CategoryProducts
            products={all_Architect_products}
            category_name="Architect"
          />
        </div>
      </section>
    </>
  )
}

export default ProductCategory
