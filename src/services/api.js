const API_URL = "https://dummyjson.com";

//all products
export const getProducts=async()=>{
  const response=await fetch(`${API_URL}/products?limit=0`);
  if (!response.ok) {
    throw new Error("Failed to get products");
  }
  return response.json();
};

// ny id
export const getProductById=async(id) => {
  const response=await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to get product");
  }
  return response.json();
};

//  all categories
export const getCategories= async () => {
  const response=await fetch( `${API_URL}/products/categories`);
  if (!response.ok) {
    throw new Error("Failed to get categories");
  }
  return response.json();
};
