import { ApiProperty } from '@nestjs/swagger'; 

export default class CreateGenreDto {
    @ApiProperty({type: "string" ,description:"Enter type of the genre."}) 
    readonly type: string;
}