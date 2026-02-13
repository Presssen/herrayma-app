import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { inventoryItems } from "@/data/mockData"
import { Filter, Download, Plus, LayoutGrid, List } from "lucide-react"
import { ProductSearch } from "@/components/wms/ProductSearch"
import { WarehouseVisualizer } from "@/components/wms/WarehouseVisualizer"

export default function Inventory() {
    const [highlightedLocation, setHighlightedLocation] = useState<string | null>(null)
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
    const [viewMode, setViewMode] = useState<'visual' | 'list'>('visual')

    const handleProductSelect = (product: any) => {
        setSelectedProduct(product)
        setHighlightedLocation(product.location)
    }

    return (
        <div className="flex flex-col h-[calc(100vh-100px)] gap-6">
            <div className="flex items-center justify-between shrink-0">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
                    <p className="text-muted-foreground">Manage stock levels and view warehouse layout.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filter</Button>
                    <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export</Button>
                    <Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> Add Product</Button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
                {/* Left Panel: Search & List */}
                <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col gap-4">
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle>Product Search</CardTitle>
                            <CardDescription>Find product location instantly</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ProductSearch onSelectProduct={handleProductSelect} />
                        </CardContent>
                    </Card>

                    {selectedProduct && (
                        <Card className="bg-primary/5 border-primary/20">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Selected Item</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Name:</span>
                                    <span className="font-semibold">{selectedProduct.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">SKU:</span>
                                    <span className="font-mono">{selectedProduct.id}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Location:</span>
                                    <Badge>{selectedProduct.location}</Badge>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Stock:</span>
                                    <span>{selectedProduct.stock} units</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Price:</span>
                                    <span>${selectedProduct.price}</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <Card className="flex-1 flex flex-col min-h-0">
                        <CardHeader className="py-3 px-4 border-b">
                            <CardTitle className="text-sm font-medium">Quick List</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 overflow-auto flex-1">
                            <div className="divide-y">
                                {inventoryItems.map((item: any) => (
                                    <div
                                        key={item.id}
                                        className={`
                                            p-3 flex items-center justify-between hover:bg-muted cursor-pointer transition-colors text-sm
                                            ${selectedProduct?.id === item.id ? 'bg-muted border-l-4 border-primary pl-2' : ''}
                                        `}
                                        onClick={() => handleProductSelect(item)}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="font-medium truncate">{item.name}</p>
                                            <p className="text-xs text-muted-foreground">{item.id}</p>
                                        </div>
                                        <div className="text-right shrink-0 ml-2">
                                            <Badge variant="outline" className="text-[10px] px-1 h-5">{item.location}</Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Panel: Visualization */}
                <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col min-h-0">
                    <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center p-1 bg-muted rounded-lg">
                                <Button
                                    variant={viewMode === 'visual' ? 'secondary' : 'ghost'}
                                    size="sm"
                                    className="gap-2 h-8"
                                    onClick={() => setViewMode('visual')}
                                >
                                    <LayoutGrid className="h-4 w-4" /> Visual Map
                                </Button>
                                <Button
                                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                                    size="sm"
                                    className="gap-2 h-8"
                                    onClick={() => setViewMode('list')}
                                >
                                    <List className="h-4 w-4" /> List View
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 min-h-0 relative">
                            {viewMode === 'visual' ? (
                                <WarehouseVisualizer highlightedLocation={highlightedLocation} />
                            ) : (
                                <Card className="h-full">
                                    <CardContent className="p-6 flex items-center justify-center text-muted-foreground h-full">
                                        List view placeholder (Standard table view)
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
