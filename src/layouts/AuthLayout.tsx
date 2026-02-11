import { Outlet } from "react-router-dom"

export default function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md space-y-8 p-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Herrayma</h1>
                    <p className="text-sm text-muted-foreground">Enterprise Resource Planning</p>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
