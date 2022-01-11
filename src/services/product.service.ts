import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, {
  ProductDocument,
  ProductInput,
} from "../models/product.model";

// create a product of format ProductInput interface using mongoose ProductModel
export async function createProduct(input: ProductInput) {
  return ProductModel.create(input);
}

// find a product using input query to FilterQuery Type format, with lean QueryOption set to make it faster
// findOne returns a query object, not a document
export async function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
  return ProductModel.findOne(query, {}, options);
}

// update a product: first find the correct product using the FilterQuery type
// then update using the UpdateQuery type
export async function findAndUpdateProduct(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions
) {
  return ProductModel.findOneAndUpdate(query, update, options);
}

// delete a product: first find the correct product using the FilterQuery type
// then use the mongoose delete method
export async function deleteProduct(query: FilterQuery<ProductDocument>) {
  return ProductModel.deleteOne(query);
}
