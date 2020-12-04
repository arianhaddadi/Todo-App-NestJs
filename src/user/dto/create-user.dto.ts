import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateUserDto {
    @ApiProperty({type: "string" ,description:"Enter User's Name.", maxLength: 500}) 
    readonly name: string;

    @ApiPropertyOptional({type: "array", items: {type: "number"} ,description:"Enter Book Ids associated with user Name."}) 
    readonly books: number[] ;
}