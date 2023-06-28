import { product } from "@/sanity/schemas/product-schema"
import { type SchemaTypeDefinition } from "sanity"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
