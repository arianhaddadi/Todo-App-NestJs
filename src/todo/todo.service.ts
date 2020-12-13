import { Injectable } from '@nestjs/common';
import CategoryEntity from 'src/db/entity/category.entity';
import ItemEntity from 'src/db/entity/item.entity';
import TagEntity from 'src/db/entity/tag.entity';
import TaskEntity from 'src/db/entity/task.entity';
import CreateCategoryDto from './dto/create-category.dto';
import CreateItemDto from './dto/create-item.dto';
import CreateTagDto from './dto/create-tag.dto';
import CreateTaskDto from './dto/create-task.dto';
import CreateTaskItemDto from './dto/create-taskItems.dto';
import UpdateTaskDto from './dto/update-task.dto';

@Injectable()
export class TodoService {

    async createANewItem(itemDetails: CreateTaskItemDto) {
        const newItem = ItemEntity.create();
        const {dueDate, name} = itemDetails;
        if (dueDate) newItem.dueDate = dueDate;
        newItem.name = name;
        await ItemEntity.save(newItem);
        return newItem;
    }

    async insertTask(taskDetails: CreateTaskDto) {
        const taskEntity: TaskEntity = TaskEntity.create();
        const {name, categoryId, items, tags} = taskDetails;
        taskEntity.name = name;
        taskEntity.category = await CategoryEntity.findOne(categoryId);
        taskEntity.items = [];
        if (items) {
            for(let i = 0; i < items.length; i++) {
                const newItem = await this.createANewItem(items[i]);
                taskEntity.items.push(newItem);
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

    
    async removeDeprecatedItems() {
        const items = await ItemEntity.find({where: {task: null}});
        items.forEach(async elem => await ItemEntity.remove(elem));
    }

    async updateTask(taskDetails: UpdateTaskDto) {
        const {id, name, categoryId, items, tags} = taskDetails;
        const taskEntity: TaskEntity = await TaskEntity.findOne(id);
        taskEntity.name = name;
        taskEntity.category = await CategoryEntity.findOne(categoryId);
        taskEntity.items = [];
        if (items) {
            for(let i = 0; i < items.length; i++) {
                const newItem = await this.createANewItem(items[i]);
                taskEntity.items.push(newItem);
            }
        }
        taskEntity.tags = [];
        if (tags) {
            for(let i = 0; i < tags.length; i++) {
                taskEntity.tags.push(await TagEntity.findOne(tags[i]));
            }
        }
        await TaskEntity.save(taskEntity);
        this.removeDeprecatedItems();
        return taskEntity;
    }

    async deleteTask(taskId: number) {
        const taskEntity: TaskEntity = await TaskEntity.findOne(taskId);
        await TaskEntity.remove(taskEntity);
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
        const {name, dueDate, taskId} = itemDetails;
        itemEntity.name = name;
        itemEntity.task = await TaskEntity.findOne(taskId);
        if (dueDate) itemEntity.dueDate = dueDate;
        await ItemEntity.save(itemEntity);
        return itemEntity;
    }

    async deleteItem(itemId: number) {
        const itemEntity: ItemEntity = await ItemEntity.findOne(itemId);
        ItemEntity.delete(itemEntity);
        return itemEntity;
    }
}
