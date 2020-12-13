import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import CreateTaskItemDto from './create-taskItems.dto';

export default class CreateTaskDto {
    @ApiProperty({type: "string" ,description:"Enter Task's Name.", maxLength: 500}) 
    readonly name: string;

    @ApiProperty({type: "number" ,description:"Enter Task's Category Id."}) 
    readonly categoryId: number;

    @ApiPropertyOptional({type: "array" , items: {type: "ItemEntity"}, description:"Enter Task's Items."}) 
    readonly items: CreateTaskItemDto[];

    @ApiPropertyOptional({type: "array" , items: {type: "number"}, description:"Enter Task's Tags Ids."}) 
    readonly tags: number[];
}