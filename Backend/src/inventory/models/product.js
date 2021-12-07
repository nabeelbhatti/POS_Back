import { schemaComposer } from "graphql-compose";
import { prisma } from "_services/prisma"


export const ProductTC = schemaComposer.createObjectTC({
    name: 'Product',
    fields: {
        id: 'Int!',
        productName: 'String',
        productDescription: {
            type: 'String',
            description: 'Product description'
        },
        productPrice: {
            type: 'Int!',
            description: 'Enter the price of the product'
        },
        size: 'Int!'
    }
});

ProductTC.addResolver({
    kind: 'query',
    name: 'test1',
    type: ProductTC.getType(),
    resolve: () => {
        return {
            id: 12,
            productName: 'Lays',
            productDescription: 'Cheese Lays',
            productPrice: 100,
            size: 600

        }
    }
})


ProductTC.addResolver({
    kind: 'query',
    name: 'UniqueProduct',
    type: 'Product',
    resolve: async () => {
        const products = await prisma.product.findUnique({
            where:{
                id: 12
            },
        })

        console.log(products)
        return products
    }
})

ProductTC.addResolver({
    kind: 'mutation',
    name: 'CreateProduct',
    args: ProductTC.getFields(),
    type: ProductTC.getType(),
    resolve: async ({args}) => {
        const product = await prisma.product.create({
            data: args
        })
        
        return product
    }
    
})



