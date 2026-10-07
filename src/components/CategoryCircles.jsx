import React from 'react';
import {Link} from 'react-router-dom';
import useProducts from "../hooks/useProducts";
import Headingg from './Headingg';

const CategoryCircles=()=>{
    const {products,loading,error } = useProducts();
    const findDymaicProducts=(allowedCategories)=>{
        if(!products || products.length===0){
            return null;
        }
        return products.find((product)=>{
            const itemCategory=product.category?.toLowerCase()||"";
            return allowedCategories.some((category)=>itemCategory.includes(category.toLowerCase()));

        })
    }

const WomenProducts=findDymaicProducts(["womens-dresses","womens-tops"]);
const MenProducts=findDymaicProducts(["mens-shirts","trousers"]);
const ShoesProducts=findDymaicProducts(["womens-shoes","mens-shoes"]);
const AccessoriesProducts=findDymaicProducts(["womens-watches","mens-watches","womens-bags","mens-bags"]);


//routing specfic data
const categoryData=[
    {
    
      displayName:"Women",
      categoryName:'womens-dresses',
      image:WomenProducts?.images?.[0]||WomenProducts?.thumbnail,
    
    }
,
     {
    
      displayName: "Mens",
      categoryName: 'mens-shirts',
      image:MenProducts?.images?.[0]||MenProducts?.thumbnail,
    
    },
     {
      displayName: "Shoes",
      categoryName: 'shoes',
      image:ShoesProducts?.images?.[0] ||ShoesProducts?.thumbnail,
    
    },
     {
    
      displayName: "Accessories",
      categoryName: 'watches',
      image:AccessoriesProducts?.images?.[0] ||AccessoriesProducts?.thumbnail,
    
    }

]
//skeleton for loading state
//error handling for error state

  return (
    <section className="mt-[-10px] max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      
        <Headingg headingg="Explore" subheading="shop by categories"  linkto="categories" />
        {/*4categories */}
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-4 justify-items-center'>
            {categoryData.map((category)=>{
                return(
                <Link key={category.categoryName}
                to={`/search?category=${category.categoryName}`}
                className='group flex flex-col items-center focus:outline-none' >
                   <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-gray-200 bg-gray-50 hover:border-black">
                   <img src={category.image||''} alt={category.displayName}
                    className='h-full w-full object-cover transition duration-500 group-hover:scale-105' />
                     </div>
                    {/*name */}
                      <span className="mt-3 text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-black sm:text-base">
                         {category.displayName}
                      </span>
                   
                    
                </Link>
           ) })}
        </div>
    </section>

  )
}

export default CategoryCircles