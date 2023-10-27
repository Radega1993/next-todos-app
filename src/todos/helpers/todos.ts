import { Todo } from "@prisma/client";

export const updateTodo = async( id: string, complete: boolean): Promise<Todo> => {
    
    
    const body = { complete };

    const dbTodo = await fetch(`/api/todos/${ id }`,{
        method: 'PUT',
        body: JSON.stringify( body ),
        headers: {
            'content-Type': 'application/json'
        }
    }).then(res => res.json() );

    return dbTodo;
}

export const createTodo = async( description: string ): Promise<Todo> => {
    const body = { description };

    const dbTodo = await fetch('/api/todos',{
        method: 'POST',
        body: JSON.stringify( body ),
        headers: {
            'content-Type': 'application/json'
        }
    }).then(res => res.json() );

    return dbTodo;
}

export const deleteCompletedTodo = async(): Promise<boolean> => {

    const dbTodo = await fetch('/api/todos',{
        method: 'DELETE',
        headers: {
            'content-Type': 'application/json'
        }
    }).then(res => res.json() );

    return true;
}