import { gql } from "apollo-server";
import { NewsModel } from "./model/NewsModel";
import { AddInputNews, UpdateInputNews } from "./interface";
export const typeDefs = gql`
  type News {
    img: String
    title: String
    by: String
    description: String
    id: ID
  }
  type Query {
    getNews(id: String!): News
    getAllNews: [News]
  }
  type Mutation {
    addNews(addInputNews: addInputNews): News
    updateNews(updateInputNews: updateInputNews): Boolean
    deleteNews(id: String!): Boolean
  }
  input addInputNews {
    img: String
    title: String!
    by: String!
    description: String!
  }
  input updateInputNews {
    id: ID
    img: String
    title: String
    by: String
    description: String
  }
`;

export const resolvers = {
  Query: {
    getNews: async (_: any, { id }: { id: String }) => {
        const response = await NewsModel.findById(id)
        return response;
    },
    getAllNews: async () => {
      const response = await NewsModel.find()
      return response;
  },
  },
  Mutation: {
    addNews: async (_: any, { addInputNews }: { addInputNews: AddInputNews }) => {
      const response = await NewsModel.create(addInputNews);
      return response;
    },
    updateNews:async (_: any, { updateInputNews }: { updateInputNews: UpdateInputNews}) => {
      const response = await NewsModel.updateOne({ _id: updateInputNews.id } ,  
        { img: updateInputNews.img, title: updateInputNews.title, by: updateInputNews.by, description: updateInputNews.description }
      )
      return response.modifiedCount > 0 ? true : false
    },
    deleteNews: async (_: any, { id }: { id: String}) => {
      const response = await NewsModel.deleteOne({ _id: id })
      return response.deletedCount > 0 ? true : false
    }
  },
};
