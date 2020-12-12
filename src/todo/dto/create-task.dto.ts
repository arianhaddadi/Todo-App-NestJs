import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateTaskDto {
    @ApiProperty({type: "string" ,description:"Enter Task's Name.", maxLength: 500}) 
    readonly name: string;

    // @ApiProperty({type: "string" ,description:"Enter User's username.", maxLength: 500}) 
    // readonly username: string;

    // @ApiProperty({type: "string" ,description:"Enter User's password.", maxLength: 500}) 
    // readonly password: string;

    // @ApiProperty({type: "array", items: {type: "number"} ,description:"Enter Book Ids associated with user Name."}) 
    // readonly books: number[] ;
}