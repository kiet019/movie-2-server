import { ApolloServer } from 'apollo-server';
import connectDB from './db';
import { typeDefs, resolvers } from './graphql';

async function startApolloServer() {
  await connectDB();
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen()
  console.log(`Server is running at ${url}`);
}

startApolloServer().catch((err) => {
  console.error('Lỗi khởi chạy Apollo Server:', err);
});
