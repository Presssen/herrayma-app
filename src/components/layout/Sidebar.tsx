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
]

export function Sidebar({ className }: { className?: string }) {
    const location = useLocation()

    return (
        <div className={cn("pb-12 h-screen border-r bg-background w-64 hidden md:block", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-primary">
                        Herrayma
                    </h2>
                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary hover:bg-muted",
                                    location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                                        ? "bg-secondary text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
