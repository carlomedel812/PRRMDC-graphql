import { Field, ObjectType } from "type-graphql";
import { IPageInfo } from "../../core/interfaces/IPageInfo";
import { User } from "../../entities";

@ObjectType()
export class UserConnection {
    @Field(() => [User])
    nodes: User[]

    @Field()
    pageInfo: IPageInfo
}