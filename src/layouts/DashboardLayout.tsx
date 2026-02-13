import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { Sheet } from "@/components/ui/sheet"

export default function DashboardLayout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className={`grid min-h-screen w-full transition-all duration-300 ease-in-out ${isCollapsed ? "md:grid-cols-[60px_1fr]" : "md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
            }`}>
            <Sidebar isCollapsed={isCollapsed} toggleCollapse={() => setIsCollapsed(!isCollapsed)} />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <div className="h-full py-4">
                    <Sidebar className="w-full border-r-0 block h-full" />
                </div>
            </Sheet>
            <div className="flex flex-col">
                <Header onMenuClick={() => setMobileMenuOpen(true)} />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/10">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
