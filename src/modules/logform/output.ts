import { LogForm } from "../../entities/logform";
import { Field, ObjectType } from "type-graphql";
import { IPageInfo } from "../../core/interfaces/IPageInfo";
import { User } from "../../entities";

@ObjectType()
export class LogFormConnection {
    @Field(() => [LogForm])
    nodes: LogForm[]

    @Field()
    pageInfo: IPageInfo
}