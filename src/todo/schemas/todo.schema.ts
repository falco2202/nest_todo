import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ToDoDocument = Todo & Document;

@Schema()
export class Todo {
    @Prop({ require: true})
    title: string;

    @Prop()
    description?: string;

    @Prop()
    updatedAt?: Date;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;
}

export const ToDoSchema = SchemaFactory.createForClass(Todo)