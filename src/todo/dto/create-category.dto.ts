import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateCategoryDto {
    @ApiProperty({type: "string" ,description:"Enter Category's Name.", maxLength: 500}) 
    readonly name: string;
}