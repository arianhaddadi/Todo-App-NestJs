import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import CreateBookDto from './create-book.dto';

export default class UpdateBookDto extends CreateBookDto {
    
    @ApiProperty({type: "number" ,description:"Enter book's id.", maxLength: 500}) 
    readonly id: number;
}