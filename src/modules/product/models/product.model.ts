import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { ObjectId, Schema, SchemaTypes } from 'mongoose';
import { ProductTypeEnum } from 'src/shared/enum/product.enum';

@ObjectType()
export class ProductModel {
  @Field(() => SchemaTypes.String, { nullable: false })
  product_name: string;

  @Field(() => SchemaTypes.String, { nullable: false })
  product_thumb: string;

  @Field(() => SchemaTypes.String)
  product_description: string;

  @Field(() => SchemaTypes.Number, { nullable: false })
  product_price: number;

  @Field(() => SchemaTypes.Number, { nullable: false })
  product_quantity: number;

  @Field(() => SchemaTypes.String)
  @Field(() => ProductTypeEnum, {
    nullable: false,
    defaultValue: ProductTypeEnum.ELECTRONICS,
  })
  product_type: ProductTypeEnum;

  @Field(() => ID, { nullable: false })
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Shop' })
  product_shop: ObjectId;

  @Field(() => SchemaTypes.Mixed)
  product_attributes: Schema.Types.Mixed;

  @Field(() => SchemaTypes.Array)
  @Prop({ defaultValue: [] })
  product_variations: Schema.Types.Array;

  @Field(() => Boolean)
  isDraft: boolean;

  @Field(() => Boolean)
  isPublished: boolean;
}
