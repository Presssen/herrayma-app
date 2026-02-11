import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ArrowLeft, Edit, Trash } from "lucide-react"
import { salesData } from "@/data/mockData"

export default function ProductDetails() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Premium Widget</h2>
                        <p className="text-sm text-muted-foreground">SKU: PROD-001 • Electronics</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">In Stock</Badge>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><Edit className="mr-2 h-4 w-4" /> Edit</Button>
                    <Button variant="destructive"><Trash className="mr-2 h-4 w-4" /> Delete</Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Inventory Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b">
                                <span>Total Stock</span>
                                <span className="font-bold text-lg">120</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                                <span>Committed</span>
                                <span className="font-bold">15</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b">
                                <span>Available</span>
                                <span className="font-bold text-green-600">105</span>
                            </div>
                            <div className="mt-4">
                                <h4 className="font-medium mb-2">Locations</h4>
                                <div className="bg-muted p-3 rounded-md text-sm">
                                    <div className="flex justify-between">
                                        <span>Zone A, Shelf 1, Bin 2</span>
                                        <span className="font-medium">80</span>
                                    </div>
                                    <div className="flex justify-between mt-1 text-muted-foreground">
                                        <span>Zone B, Pallet 5</span>
                                        <span>40</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Sales History</CardTitle>
                        <CardDescription>Last 6 months</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-blue-500" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
