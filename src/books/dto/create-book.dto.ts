import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateBookDto {
    @ApiProperty({type: "string" ,description:"Enter book's name.", maxLength: 500}) 
    readonly name: string;

    @ApiProperty({type: "number" ,description:"Enter the id of the user owning the book."}) 
    readonly userID: number;

    @ApiProperty({type: "array", items:{type: "number"} ,description:"Enter ids of the genres associated with the book."}) 
    readonly genreIDs: number[];
}