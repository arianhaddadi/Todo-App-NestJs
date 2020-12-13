import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateTaskItemDto {
    @ApiProperty({type: "string" ,description:"Enter Item's Name.", maxLength: 500}) 
    readonly name: string;

    

    @ApiPropertyOptional({type: "date" ,description:"Enter Item's due date if such thing exists."}) 
    readonly dueDate: Date;
}