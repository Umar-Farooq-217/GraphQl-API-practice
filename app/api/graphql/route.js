const { ApolloServer } = require("@apollo/server");
const { startServerAndCreateNextHandler } = require("@as-integrations/next");


const gql = String.raw
const dummyProducts = [
    {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    },
    {
        title: 'test ',
        price: 13.4567,
        description: 'lorem ipsum set fghjkl;',
        image: 'https://i.pravatar.cc',
        category: 'Designer'
    },
    {
        title: ' product',
        price: 13.9876,
        description: 'lorem ipsum set   fghjk dfghjkl fghj',
        image: 'https://i.pravatar.cc',
        category: 'magnetic'
    },
    {
        title: 'Umar ',
        price: 13.23456,
        description: 'lorem ipsum set tgyhjukl; rtyui rftgyhjk jdfgh',
        image: 'https://i.pravatar.cc',
        category: 'Fashion'
    }
]


 const typeDefs = gql`
 type Query {
    getProducts:[product]
 }
 type product {
    title:String
    description:String
    price: Float
    image:[images]
    category:String
 }
 type images {
    url:String
 }
 `
const resolvers = {
    Query :{
        getProducts :()=>{
            return dummyProducts
        }
        }
    }





    const server = new ApolloServer({
        typeDefs,
        resolvers
      });
      

 const handler = startServerAndCreateNextHandler(server)
 export {handler as GET,handler as POST}