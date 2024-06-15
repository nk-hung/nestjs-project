import { Query } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class ProductResolver {
  @Query(() => )
  sayMyName(): string {
    return '123';
  }
}
