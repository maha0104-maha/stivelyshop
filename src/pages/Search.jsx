import React, {useState,useEffect,useMemo } from "react";
import {useParams,useSearchParams} from "react-router-dom";
import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories"
import ProductGrid from "../components/ProductGrid";
import ProductFilters from "../components/ProductFilters";
import SortDropdown from "../components/SortDropdown";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";


const Search=()=>{
    //from api
    const {products,loading:productsLoading,error:productsError}=useProducts();
    const {categories,loading:categoriesLoading,error:categoriesError}=useCategories();
    //category from url
    const {name}=useParams();
    const [searchParamas]=useSearchParams();
    const searchQuery=searchParamas.get("search")||"";
    const categoryFromQuery=searchParamas.get("category")||"";
    const selectedCategory=name||categoryFromQuery;
    //states-cat,price,category
    const [category,setCategory]=useState(selectedCategory)
    const [maxPrice,setMaxPrice]=useState("");
    const [minRating,setMinRating]=useState("");
    //sort
    const [sortBy,setSortBy]=useState("default");
    //pagination
    const [currentPage,setCurrentPage]=useState(1);
    const productsPerPage=12
    useEffect(()=>{
        setCategory(selectedCategory);
    }, [selectedCategory]);
    
    //fileter and sort
    const filteredProducts=useMemo(()=>{
        let result=[...products];
        if(searchQuery.trim()){
            const query=searchQuery.toLowerCase().trim();
            result=result.filter((product) =>
                product.title?.toLowerCase().includes(query)
             );
        }
        //category
        if(category){
            result=result.filter((product)=>
            product.category?.toLowerCase()===category.toLowerCase())
        }
        //max price
        if(maxPrice){
            result=result.filter((product)=>
            product.price<=Number(maxPrice))
        }
        if(minRating){
            result=result.filter((product)=>
            product.rating>=Number(minRating))

        }
        //sort
        switch (sortBy){
            case "price-low":
                result.sort((a,b)=>a.price-b.price);
                break;

            case "price-high":
                result.sort((a,b)=>b.price-a.price);
                break;

            case "rating-high":
                result.sort((a,b)=>b.rating-a.rating);
                break;
            case "name-az":
                result.sort((a,b)=> a.title.localeCompare(b.title));
                break;
            case "name-za":
                result.sort((a,b)=> b.title.localeCompare(a.title) );
                break;
            default:
                break;
            }

     return result;
        },[products, searchQuery, category, maxPrice, minRating, sortBy]
    )
    //padination
     const totalPages=Math.ceil(filteredProducts.length/productsPerPage);
     const startIndex=(currentPage - 1)*productsPerPage;
     const currentProducts = filteredProducts.slice(startIndex,
         startIndex + productsPerPage
      );
       useEffect(() => {
    setCurrentPage(1);
        }, [
            searchQuery,
            category,
            maxPrice,
            minRating,
            sortBy,
        ]);
    //loading state
     if (productsLoading || categoriesLoading) {
    return <Loader message="Loading products..." />;
  }
  //error stare
    if (productsError || categoriesError) {
    return (
      <ErrorState
        title="Unable to load products"
        message="Something went wrong while fetching the products. Please try again."
      />
    );
  }
  return(
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 ">
          <div className="mb-6 flex justify-center">
            <SearchBar />
         </div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
          Shop
        </p>
        <h1 className="text-3xl font-semibold text-gray-900">
          {searchQuery?`Search results for "${searchQuery}"`: category
              ? "Category Products":"All Products"}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {filteredProducts.length} products found
        </p>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">

        {/* filters */}
        <aside className="lg:sticky lg:top-24">
          <ProductFilters
            category={category} setCategory={setCategory}
            maxPrice={maxPrice} setMaxPrice={setMaxPrice}
            minRating={minRating} setMinRating={setMinRating}
            categories={categories}/>
        </aside>
        <section className="min-w-0">
          <div className="mb-6 flex min-h-[40px] items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Showing{" "}
              {filteredProducts.length === 0?0: startIndex + 1}{" - "}
              {Math.min(startIndex + productsPerPage,filteredProducts.length)}
              {" of "}
              {filteredProducts.length}
            </p>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy}/>
          </div>

          {/* empty state */}
          {filteredProducts.length === 0?(
            <EmptyState
              title="No products found"
              message="Try changing your search or filters."
            /> ):(
            <>
              <ProductGrid products={currentProducts} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}

        </section>
      </div>
    </main>


  )
  }

                    
export default Search;

