import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { inventoryItems } from "@/data/mockData"
import { Filter, Download, Plus } from "lucide-react"

export default function Inventory() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Inventory</h2>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
                    <Button variant="outline" size="icon"><Download className="h-4 w-4" /></Button>
                    <Button><Plus className="mr-2 h-4 w-4" /> Add Product</Button>
                </div>
            </div>

            <div className="flex items-center gap-2 max-w-sm">
                <Input placeholder="Search inventory..." />
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">SKU</TableHead>
                                <TableHead>Product Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="text-right">Stock</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {inventoryItems.map((item: any) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        {item.stock > 10 ? (
                                            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 border-green-200">In Stock</Badge>
                                        ) : item.stock > 0 ? (
                                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 border-yellow-200">Low Stock</Badge>
                                        ) : (
                                            <Badge variant="destructive">Out of Stock</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell className="text-right">${item.price}</TableCell>
                                    <TableCell className="text-right">{item.stock}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {/* Duplicating items to fill list for mockup */}
                            {inventoryItems.map((item: any) => (
                                <TableRow key={item.id + '_dup'}>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        {item.stock > 10 ? (
                                            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50 border-green-200">In Stock</Badge>
                                        ) : item.stock > 0 ? (
                                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 border-yellow-200">Low Stock</Badge>
                                        ) : (
                                            <Badge variant="destructive">Out of Stock</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell className="text-right">${item.price}</TableCell>
                                    <TableCell className="text-right">{item.stock}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
