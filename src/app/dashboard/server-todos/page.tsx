import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: 'Server Actions',
  description: 'Página con todos los Todos'
}

export default async function ServerActionsPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <>
      <span className="text-3xl">Server Actions (Alpha)</span>
        <div className="w-full px-3 mx-5 mb-5">
          <NewTodo />
        </div>

        <TodosGrid todos={ todos }/>
    </>
  )
}