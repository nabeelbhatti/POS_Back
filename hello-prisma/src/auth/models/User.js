import { prisma } from "_services/prisma";
import {schemaComposer} from "graphql-compose";

export const UserTC = schemaComposer.createObjectTC({
    name: 'User',
    fields: {
      id: 'Int!',
      userName: {
          type: 'String',
          description: 'An optional extra argument for log in.'
      },
      name: 'String!',
      password: {
          type: 'String!',
          description: 'Encrypted User Password. Only works in wirte-mode.'
      },
      size:{
          type:'Int!',
          secription:'Size'
      }
    }
  });

  UserTC.addResolver({
      kind: 'query',
      name: 'test',
      type: UserTC.getType(),
      resolve: () => {
        return {
            id: 1,
            name: 'Nabeel',
            password: '123'
        }
      }
  })

  UserTC.addResolver({
      kind: 'query',
      name: 'all',
      type: '[User]',
      resolve: async () => {
          console.log(prisma)
          const users = await prisma.user.findMany()

          console.log(users)
        
          return users
      }
  })

  UserTC.addResolver({
    kind: 'mutation',
    name: 'create',
    args: UserTC.getFields(),
    type: UserTC.getType(),
    resolve: async ({args}) => {
        const user = await prisma.user.create({
            data: args
        })

        console.log(user)

        return user
    }
})