import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Users,
    Box,
    Settings,
    BarChart,
    Truck,
    ScanBarcode,
    Store,
} from "lucide-react"

const navItems = [
    {
        title: "Overview",
        href: "/admin",
        icon: LayoutDashboard,
        type: "admin",
    },
    {
        title: "CRM",
        href: "/crm",
        icon: Users,
        type: "crm",
    },
    {
        title: "Orders",
        href: "/orders",
        icon: ShoppingCart,
        type: "ops",
    },
    {
        title: "WMS",
        href: "/wms",
        icon: Box,
        type: "wms",
    },
    {
        title: "Inventory",
        href: "/inventory",
        icon: Package,
        type: "ops",
    },
    {
        title: "Picking",
        href: "/picking",
        icon: ScanBarcode,
        type: "picker",
    },
    {
        title: "Shipping",
        href: "/shipping",
        icon: Truck,
        type: "ops",
    },
    {
        title: "Reports",
        href: "/reports",
        icon: BarChart,
        type: "admin",
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
        type: "admin",
    },
    {
        title: "Tienda Online",
        href: "/store",
        icon: Store,
        type: "store",
        external: true,
    },
]

import { ChevronLeft, ChevronRight } from "lucide-react"

interface SidebarProps {
    className?: string
    isCollapsed?: boolean
    toggleCollapse?: () => void
}

export function Sidebar({ className, isCollapsed = false, toggleCollapse }: SidebarProps) {
    const location = useLocation()

    return (
        <div className={cn(
            "h-screen sticky top-0 border-r bg-background hidden md:block transition-all duration-300 ease-in-out z-30 flex flex-col",
            isCollapsed ? "w-[60px]" : "w-64",
            className
        )}>
            {/* Toggle Button */}
            {toggleCollapse && (
                <button
                    onClick={toggleCollapse}
                    className="absolute -right-3 top-6 z-40 h-6 w-6 rounded-full border bg-background shadow-md flex items-center justify-center hover:bg-muted"
                >
                    {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
                </button>
            )}

            <div className="space-y-4 py-4 flex-1 overflow-y-auto overflow-x-hidden">
                <div className="px-3 py-2">
                    <div className={cn("mb-2 flex items-center h-8", isCollapsed ? "justify-center px-0" : "px-4")}>
                        {isCollapsed ? (
                            <Store className="h-6 w-6 text-primary" />
                        ) : (
                            <h2 className="text-lg font-semibold tracking-tight text-primary whitespace-nowrap">
                                Herrayma
                            </h2>
                        )}
                    </div>

                    <div className="space-y-1">
                        {navItems.map((item) => (
                            item.external ? (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "flex items-center rounded-lg py-2 text-sm font-medium transition-all hover:text-primary hover:bg-muted group relative",
                                        "text-muted-foreground",
                                        isCollapsed ? "justify-center px-2" : "px-3"
                                    )}
                                    title={isCollapsed ? item.title : undefined}
                                >
                                    <item.icon className={cn("h-4 w-4 shrink-0", !isCollapsed && "mr-2")} />
                                    {!isCollapsed && <span>{item.title}</span>}
                                </a>
                            ) : (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={cn(
                                        "flex items-center rounded-lg py-2 text-sm font-medium transition-all hover:text-primary hover:bg-muted group relative",
                                        location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                                            ? "bg-secondary text-primary"
                                            : "text-muted-foreground",
                                        isCollapsed ? "justify-center px-2" : "px-3"
                                    )}
                                    title={isCollapsed ? item.title : undefined}
                                >
                                    <item.icon className={cn("h-4 w-4 shrink-0", !isCollapsed && "mr-2")} />
                                    {!isCollapsed && <span>{item.title}</span>}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
