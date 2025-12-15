import { signOut } from 'next-auth/react';

export default function logOut() {
    return (
        <>
            <button onClick={() => signOut({callbackUrl: '/login'})}  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-blue-700 disabled:opacity-50"
            >
                Sair
            </button>
        </>


    )
}