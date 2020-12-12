import { Injectable } from '@nestjs/common';
import CategoryEntity from 'src/db/entity/category.entity';
import ItemEntity from 'src/db/entity/item.entity';
import TagEntity from 'src/db/entity/tag.entity';
import TaskEntity from 'src/db/entity/task.entity';
import CreateCategoryDto from './dto/create-category.dto';
import CreateItemDto from './dto/create-item.dto';
import CreateTagDto from './dto/create-tag.dto';
import CreateTaskDto from './dto/create-task.dto';

@Injectable()
export class TodoService {

    async insertTask(taskDetails: CreateTaskDto) {
        const taskEntity: TaskEntity = TaskEntity.create();
        const {name, categoryId, items, tags} = taskDetails;
        taskEntity.name = name;
        taskEntity.category = await CategoryEntity.findOne(categoryId);
        taskEntity.items = [];
        if (items) {
            for(let i = 0; i < items.length; i++) {
                taskEntity.items.push(await ItemEntity.findOne(items[i]));
            }
        }
        taskEntity.tags = [];
        if (tags) {
            for(let i = 0; i < tags.length; i++) {
                taskEntity.tags.push(await TagEntity.findOne(tags[i]));
            }
        }
        await TaskEntity.save(taskEntity);
        return taskEntity;
    }

    async insertCategory(categoryDetails: CreateCategoryDto) {
        const categoryEntity: CategoryEntity = CategoryEntity.create();
        const {name} = categoryDetails;
        categoryEntity.name = name;
        await CategoryEntity.save(categoryEntity);
        return categoryEntity;
    }

    async insertTag(tagDetails: CreateTagDto) {
        const tagEntity: TagEntity = TagEntity.create();
        const {name} = tagDetails;
        tagEntity.name = name;
        await TagEntity.save(tagEntity);
        return tagEntity;
    }

    async insertItem(itemDetails: CreateItemDto) {
        const itemEntity: ItemEntity = ItemEntity.create();
        const {name} = itemDetails;
        itemEntity.name = name;
        await ItemEntity.save(itemEntity);
        return itemEntity;
    }
}
