import { ApiProperty } from '@nestjs/swagger'; 
import CreateTaskDto from './create-task.dto';

export default class UpdateTaskDto extends CreateTaskDto {
    @ApiProperty({type: "number" ,description:"Enter Task's Id."}) 
    readonly id: number;
}