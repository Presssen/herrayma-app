import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface SheetProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    children: React.ReactNode
    side?: "left" | "right"
}

export function Sheet({ open, onOpenChange, children, side = "left" }: SheetProps) {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in"
                onClick={() => onOpenChange(false)}
            />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed z-50 h-full w-3/4  border-r bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out sm:max-w-sm",
                    side === "left" ? "left-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left" : "right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
                )}
            >
                <button
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                    onClick={() => onOpenChange(false)}
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </button>
                {children}
            </div>
        </div>
    )
}
