'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react";


export default function ProfilePage() {

  const {data: session} = useSession();
  useEffect(() => {
    console.log('client');
    
  }, [])
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

      <h1 className="text-3xl">Page Profile</h1>
      <hr />

      <div className="flex flex-col">
        <span>{session?.user?.name ?? 'No Name'}</span>
        <span>{session?.user?.email ?? 'No Email'}</span>
        <span>{session?.user?.image ?? 'No Image'}</span>
        <span>{session?.user?.id ?? 'No UUID'}</span>
        <span>{session?.user?.roles?.join(',') ?? ['NoRoles']}</span>
      </div>
      

    </div>
  );
}