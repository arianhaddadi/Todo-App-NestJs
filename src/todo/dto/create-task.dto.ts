import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import CategoryEntity from 'src/db/entity/category.entity';

export default class CreateTaskDto {
    @ApiProperty({type: "string" ,description:"Enter Task's Name.", maxLength: 500}) 
    readonly name: string;

    @ApiProperty({type: "number" ,description:"Enter Task's Category Id."}) 
    readonly category: number;

    @ApiPropertyOptional({type: "array" , items: {type: "number"}, description:"Enter Task's Items Ids."}) 
    readonly items: number[];

    @ApiPropertyOptional({type: "array" , items: {type: "number"}, description:"Enter Task's Tags Ids."}) 
    readonly tags: number[];
}