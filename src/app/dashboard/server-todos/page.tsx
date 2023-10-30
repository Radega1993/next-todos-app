export const dynamic = 'force-dynamic'

import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Server Actions',
  description: 'Página con todos los Todos'
}

export default async function ServerActionsPage() {
  
  const user = await getUserSessionServer();

  if (!user) redirect('/api/auth/signin');


  const todos = await prisma.todo.findMany({ 
    where: { userId: user.id },
    orderBy: { description: 'asc' } 
  });


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
