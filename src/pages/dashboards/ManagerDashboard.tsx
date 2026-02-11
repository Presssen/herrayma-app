import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress" // I need to create Progress component or use simple div
import { Button } from "@/components/ui/button"
import { Package, Truck, AlertTriangle, CheckCircle } from "lucide-react"
import { recentOrders, inventoryItems } from "@/data/mockData"

// Simple Progress Component since I didn't create it yet
function SimpleProgress({ value, className }: { value: number, className?: string }) {
    return (
        <div className={`h-2 w-full overflow-hidden rounded-full bg-secondary ${className}`}>
            <div className="h-full bg-primary transition-all" style={{ width: `${value}%` }} />
        </div>
    )
}

export default function ManagerDashboard() {
    return (
        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">128</div>
                        <p className="text-xs text-muted-foreground">12 urgent</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ready to Ship</CardTitle>
                        <Truck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45</div>
                        <p className="text-xs text-muted-foreground">Carrier arriving in 2h</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">Needs reordering</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Returns</CardTitle>
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Pending inspection</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Warehouse Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span>Main Warehouse Capacity</span>
                                    <span className="font-medium">85%</span>
                                </div>
                                <SimpleProgress value={85} />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span>Zone A (Electronics)</span>
                                    <span className="font-medium">92%</span>
                                </div>
                                <SimpleProgress value={92} className="bg-red-100" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span>Zone B (Home Goods)</span>
                                    <span className="font-medium">45%</span>
                                </div>
                                <SimpleProgress value={45} />
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="mb-2 text-sm font-medium">Quick Actions</h4>
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline">Print Picking List</Button>
                                <Button size="sm" variant="outline">Generate Labels</Button>
                                <Button size="sm" variant="outline">Receive Stock</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Low Stock Alerts</CardTitle>
                        <CardDescription>Items below 10 units</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead className="text-right">Stock</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {inventoryItems.filter(i => i.stock < 60).map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <div className="font-medium">{item.name}</div>
                                            <div className="text-xs text-muted-foreground">{item.location}</div>
                                        </TableCell>
                                        <TableCell className="text-right text-red-500 font-bold">
                                            {item.stock}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
