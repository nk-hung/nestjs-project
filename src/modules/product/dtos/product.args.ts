import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@ArgsType()
export class ProductArgs {
  @Field(() => Int)
  @Min(0)
  skip: number;

  @Field(() => Int)
  @Min(1)
  limit: number;
}
