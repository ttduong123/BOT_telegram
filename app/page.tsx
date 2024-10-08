'use client'


import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface UserData{
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;

}


export default function Home() {
  const[userdata, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user){
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
    

  }, [])

  return (
    <main className="flex items-center justify-center h-screen p-4">
      {
        userdata ?
        (
          <>
          {/* mấy cái trong "" là tailwindcss đó anh coi mà chỉnh sửa, lên gpt search các hàm cơ bản */}
          <h1 className="text-2xl font-bold mb-4 hidden">User Data</h1> 
          <ul>
            <li className="font-bold text-red-500">ID: {userdata.id}</li>
            <li className="font-bold text-red-500">First Name: {userdata.first_name}</li>
            <li className="font-bold text-red-500">Last Name: {userdata.last_name}</li>
            <li className="font-bold text-red-500 hidden">Username: {userdata.username}</li>
            <li className="font-bold text-red-500 hidden">language Code: {userdata.language_code}</li>
            <li className="font-bold text-red-500 hidden">Is Premium: {userdata.is_premium ? 'Yes' : 'No'}</li>
          </ul>
          </>
        ) :
        (
          <div>Loading...</div>
        )
      }

    </main>

  );
}
