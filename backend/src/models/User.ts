import { __Type } from "graphql";
import { Field, ID, Mutation, ObjectType, Query } from "type-graphql";

@ObjectType()
export class User {
  @Field((__Type) => ID)
  id: string;
  @Field()
  name: string;
}
