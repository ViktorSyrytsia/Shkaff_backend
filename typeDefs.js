import { gql } from 'apollo-server';
import CategoryType from './modules/newCategory/category.graphql';

const typeDefs = gql`${CategoryType}`;

export default typeDefs;