import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';

@ArgsType()
@InputType()
export class BasePaginationArgs {
  @Field(() => Int, { defaultValue: 10, nullable: true })
  limit: number;

  @Field(() => Int, { defaultValue: 0, nullable: true })
  skip: 0;
}
