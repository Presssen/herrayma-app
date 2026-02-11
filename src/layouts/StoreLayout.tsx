import { Outlet, Link } from "react-router-dom"
import { ShoppingCart, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Simple Store Header
function StoreHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center mx-auto px-4">
                <Link to="/store" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold">Herrayma Store</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link to="/store/products" className="transition-colors hover:text-foreground/80 text-foreground/60">Products</Link>
                    <Link to="/store/deals" className="transition-colors hover:text-foreground/80 text-foreground/60">Deals</Link>
                    <Link to="/store/support" className="transition-colors hover:text-foreground/80 text-foreground/60">Support</Link>
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <div className="w-full md:w-auto md:flex-none">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search catalog..."
                                className="h-9 w-full md:w-[300px] lg:w-[400px] pl-8"
                            />
                        </div>
                    </div>
                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">Cart</span>
                    </Button>
                    <Link to="/login">
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

function StoreFooter() {
    return (
        <footer className="border-t bg-muted/50">
            <div className="container mx-auto py-10 px-4 md:px-6">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold">About</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>Warning: Mockup</li>
                            <li>Demo Purpose Only</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Shop</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>All Products</li>
                            <li>New Arrivals</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>Contact Us</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Legal</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default function StoreLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <StoreHeader />
            <main className="flex-1">
                <Outlet />
            </main>
            <StoreFooter />
        </div>
    )
}
