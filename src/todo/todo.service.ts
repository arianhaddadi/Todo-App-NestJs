import { Injectable } from '@nestjs/common';
import TaskEntity from 'src/db/entity/task.entity';
import CreateTaskDto from './dto/create-task.dto';

@Injectable()
export class TodoService {

    async insert(taskDetails: CreateTaskDto) {
        const taskEntity: TaskEntity = TaskEntity.create();
        const {name} = taskDetails;
        taskEntity.name = name;
        await TaskEntity.save(taskEntity);
        return taskEntity;
    }
}
