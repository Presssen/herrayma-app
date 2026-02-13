import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Filter, Search, ArrowUpDown } from "lucide-react"
import { useStoreProducts } from "@/hooks/useStoreProducts"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Catalog() {
    const { products } = useStoreProducts()

    return (
        <div className="container mx-auto py-12 px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2">Product Catalog</h1>
                    <p className="text-muted-foreground text-lg">Browse our premium selection of industrial equipment.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" /> Filters
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <ArrowUpDown className="h-4 w-4" /> Sort
                    </Button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Search Sidebar */}
                <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">
                    <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
                        <h3 className="font-semibold mb-4 text-lg">Search</h3>
                        <div className="relative mb-6">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search..." className="pl-9 bg-background" />
                        </div>

                        <Separator className="my-6" />

                        <h3 className="font-semibold mb-4 text-lg">Categories</h3>
                        <ul className="space-y-3">
                            {['All Products', 'Power Tools', 'Hand Tools', 'Safety', 'Fasteners'].map((cat, i) => (
                                <li key={cat}>
                                    <button className={`text-sm ${i === 0 ? 'font-semibold text-primary' : 'text-muted-foreground hover:text-foreground'} transition-colors text-left w-full`}>
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <Separator className="my-6" />

                        <h3 className="font-semibold mb-4 text-lg">Availability</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="instock" className="rounded border-input text-primary focus:ring-primary" defaultChecked />
                                <label htmlFor="instock" className="text-sm">In Stock Only</label>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" id="preorder" className="rounded border-input text-primary focus:ring-primary" />
                                <label htmlFor="preorder" className="text-sm">Pre-order</label>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map((item) => {
                            const isLowStock = item.stock > 0 && item.stock < 10;
                            const isOutOfStock = item.stock === 0;

                            return (
                                <Card key={item.id} className="group overflow-hidden border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                                        {/* Mock Image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-4xl opacity-10 select-none">
                                            IMG
                                        </div>

                                        {/* Stock Badge */}
                                        <div className="absolute top-3 right-3 z-10">
                                            {isOutOfStock ? (
                                                <Badge variant="destructive" className="font-semibold uppercase shadow-sm">Out of Stock</Badge>
                                            ) : isLowStock ? (
                                                <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200 font-semibold shadow-sm">Low Stock: {item.stock}</Badge>
                                            ) : (
                                                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 font-semibold shadow-sm backdrop-blur-md">In Stock: {item.stock}</Badge>
                                            )}
                                        </div>

                                        {/* Quick Actions Overlay */}
                                        {!isOutOfStock && (
                                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                                                <Button size="sm" variant="secondary" className="shadow-lg font-semibold w-full">Quick Add</Button>
                                            </div>
                                        )}
                                    </div>

                                    <CardContent className="p-5">
                                        <div className="mb-2">
                                            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{item.id}</p>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                                        <div className="flex justify-between items-baseline mt-4">
                                            <div className="flex flex-col">
                                                <span className="text-2xl font-bold tracking-tight text-primary">${item.price.toFixed(2)}</span>
                                                {item.originalPrice && (
                                                    <span className="text-sm text-muted-foreground line-through decoration-red-500/50">${item.originalPrice.toFixed(2)}</span>
                                                )}
                                            </div>
                                            <span className="text-xs text-muted-foreground">Location: {item.location}</span>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="p-5 pt-0">
                                        <Button className="w-full font-semibold" disabled={isOutOfStock}>
                                            <ShoppingCart className="mr-2 h-4 w-4" />
                                            {isOutOfStock ? "Notify Me" : "Add to Cart"}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}

                        {/* Fillers to make grid look full if needed */}
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Card key={`filler-${i}`} className="opacity-60 grayscale border-dashed">
                                <CardContent className="h-full flex flex-col items-center justify-center p-12 text-center space-y-4">
                                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                                        <Search className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">More coming soon</h3>
                                        <p className="text-sm text-muted-foreground">We are constantly updating our inventory.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
