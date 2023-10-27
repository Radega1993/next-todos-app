'use server'

import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"
import { revalidatePath } from "next/cache";

export const toggleTodo = async( id: string, complete: boolean ): Promise<Todo> => {
    const todo = await prisma.todo.findFirst({where: { id } });

    if ( !todo ) {
        throw `Todo con id ${ id } no encontrado`;
    }

    const updatedTodo = await prisma.todo.update({ where: { id }, data: { complete }})
    revalidatePath('/dashboard/server-todos');

    return updatedTodo;
}

export const createTodo = async( description: string ): Promise<Todo> => {
    const todo = await prisma.todo.create({data: { description } })
    revalidatePath('/dashboard/server-todos');

    return todo;
}

export const deleteCompleted = async( ) => {

    await prisma.todo.deleteMany({where: { complete: true } });
    revalidatePath('/dashboard/server-todos');

}