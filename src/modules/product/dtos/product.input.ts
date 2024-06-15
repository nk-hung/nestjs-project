import { InputType } from '@nestjs/graphql';
import { BasePaginationArgs } from 'src/shared/graphql/type/common.type';

@InputType()
export class ProductInput extends BasePaginationArgs {}
