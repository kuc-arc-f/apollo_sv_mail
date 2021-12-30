
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import scheme from './scheme'
import LibCsrf from './lib/LibCsrf'
import LibMail from './lib/LibMail'

const typeDefs = scheme.getTypeDefs();
/* resolvers */
const resolvers = {
  Query: {
    hello: () => 'Hello world-123',
    /* token */
    async getToken(){
      return await LibCsrf.getToken();
    },
    async validToken(_, args: any, context: any){
//console.log(args.user_id );
      const v = await LibCsrf.validToken(args);
      return "";
    },
  },
  Mutation: {
    sendMail: async (parent: any, args: any, context: any) => {
      const ret = await LibMail.sendMail(args)
      return ret
    },  
    
  }
};

/* serever-Start */
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });
// ENV
//console.log(app.get('env'));
app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});