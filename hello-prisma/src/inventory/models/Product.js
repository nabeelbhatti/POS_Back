import { prisma } from "_services/prisma";
import { schemaComposer } from "graphql-compose";


export const ProductTC = schemaComposer.createObjectTC({
    name: 'Product',
    fields:{
        id:'Int!',
        productName:{
            type:'String',
            description:'An ProductName is optional'
        },
        productDescription:{
            type:'String',
            description:'Add description'
        },
        productPrice:{
            type:'Int!',
            description:'Add Price'
        },
        size:{
            type:'Int!',
            description:'Add size'
        }
    }
});

ProductTC.addResolver({
    kind:'mutation',
    name:'All',
    args: ProductTC.getField(),
    type: ProductTC.getType(),
    resolve: async (args)=>{
        const products = await prisma.product.create({
            data:args
        })

        console.log(products)
        return products
    }
    
})