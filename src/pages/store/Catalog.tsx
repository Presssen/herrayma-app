import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

export default function Catalog() {
    return (
        <div className="container mx-auto py-8 px-4 flex gap-8">
            {/* Sidebar Filters - Hidden on mobile for now */}
            <aside className="w-64 hidden lg:block space-y-6">
                <div>
                    <h3 className="font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-primary font-medium">All Products</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">Power Tools</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">Hand Tools</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">Safety Equipment</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground">Fasteners</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Price Range</h3>
                    <div className="grid gap-2">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="text-sm">Under $50</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="text-sm">$50 - $100</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="text-sm">$100 - $500</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="text-sm">$500+</span>
                        </label>
                    </div>
                </div>
            </aside>

            <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Catalog</h1>
                    <select className="border rounded-md p-2 text-sm">
                        <option>Sort by: Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <Card key={i} className="overflow-hidden flex flex-col group">
                            <div className="aspect-square bg-muted relative group-hover:scale-105 transition-transform duration-300">
                                {i === 2 && <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>}
                            </div>
                            <CardContent className="p-4 flex-1">
                                <h3 className="font-semibold text-lg mb-1">Heavy Duty Grinder {i + 1}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">High performance angle grinder with variable speed control and safety guard.</p>
                                <div className="mt-4 flex items-baseline gap-2">
                                    <span className="text-xl font-bold">$89.99</span>
                                    {i === 2 && <span className="text-sm text-muted-foreground line-through">$119.99</span>}
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full">
                                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <Button variant="outline">Load More</Button>
                </div>
            </div>
        </div>
    )
}
