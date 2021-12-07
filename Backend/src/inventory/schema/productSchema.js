import { ProductTC } from "../models/product";

console.log("Resolver is ", ProductTC)
export const ProductQueries = {
    productTest: ProductTC.getResolver('test1'),
    allProducts: ProductTC.getResolver('UniqueProduct')
}

export const ProductMutations = {
    productcreate: ProductTC.getResolver('CreateProduct')
    
} 