import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateTagDto {
    @ApiProperty({type: "string" ,description:"Enter Tag's Name.", maxLength: 500}) 
    readonly name: string;
    
}