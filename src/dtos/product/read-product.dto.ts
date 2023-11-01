import {Exclude } from 'nestjs-class-transformer'
import { BaseProductDto } from './base-product.dto';

@Exclude()
export class readProductDto extends BaseProductDto{
    
    @Expose


}