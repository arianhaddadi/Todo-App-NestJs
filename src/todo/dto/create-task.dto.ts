import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateTaskDto {
    @ApiProperty({type: "string" ,description:"Enter Task's Name.", maxLength: 500}) 
    readonly name: string;

    @ApiProperty({type: "number" ,description:"Enter Task's Category Id."}) 
    readonly categoryId: number;

    @ApiPropertyOptional({type: "array" , items: {type: "number"}, description:"Enter Task's Items Ids."}) 
    readonly items: number[];

    @ApiPropertyOptional({type: "array" , items: {type: "number"}, description:"Enter Task's Tags Ids."}) 
    readonly tags: number[];
}