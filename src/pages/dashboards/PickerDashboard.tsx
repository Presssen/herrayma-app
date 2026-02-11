import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScanBarcode, ChevronRight, Box, CheckCircle } from "lucide-react"

// Mock picking orders
const pickingQueue = [
    { id: "ORD-009", items: 4, location: "Zone A", priority: "High" },
    { id: "ORD-012", items: 12, location: "Zone B", priority: "Normal" },
    { id: "ORD-015", items: 1, location: "Zone A", priority: "Low" },
]

export default function PickerDashboard() {
    const [activeOrder, setActiveOrder] = useState<string | null>(null)

    if (activeOrder) {
        return (
            <div className="flex flex-col h-[calc(100vh-8rem)]">
                <div className="flex items-center justify-between mb-4">
                    <Button variant="ghost" onClick={() => setActiveOrder(null)}>
                        &larr; Back
                    </Button>
                    <Badge variant="outline" className="text-lg px-3 py-1">{activeOrder}</Badge>
                </div>

                <div className="flex-1 space-y-4 overflow-auto pb-20">
                    <Card className="border-l-4 border-l-blue-500">
                        <CardContent className="p-4 flex items-center justify-between">
                            <div>
                                <div className="font-bold text-lg">Premium Widget</div>
                                <div className="text-muted-foreground text-sm">Loc: A-01-02</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-2xl">x2</div>
                                <Badge variant="secondary">unscanned</Badge>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4 flex items-center justify-between opacity-50">
                            <div>
                                <div className="font-bold text-lg">Basic Gadget</div>
                                <div className="text-muted-foreground text-sm">Loc: B-03-01</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-2xl">x1</div>
                                <Badge variant="default" className="bg-green-600">scanned</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="fixed bottom-4 left-4 right-4 grid gap-2">
                    <Button size="lg" className="w-full text-lg h-14 bg-blue-600 hover:bg-blue-700">
                        <ScanBarcode className="mr-2 h-6 w-6" /> Scan Item
                    </Button>
                    <Button size="lg" variant="secondary" className="w-full text-lg h-12">
                        Manual Entry
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-4 max-w-md mx-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Picking Queue</h2>
                <Badge variant="secondary">{pickingQueue.length} Orders</Badge>
            </div>

            <div className="grid gap-3">
                {pickingQueue.map(order => (
                    <Card key={order.id} className="cursor-pointer active:scale-95 transition-transform" onClick={() => setActiveOrder(order.id)}>
                        <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Box className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">{order.id}</div>
                                    <div className="text-sm text-muted-foreground">{order.items} items • {order.location}</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                {order.priority === "High" && <Badge className="bg-red-500">Urgent</Badge>}
                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="mt-8 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
                <CardContent className="p-4 flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                        <div className="font-bold text-lg">Shift Performance</div>
                        <div className="text-sm text-muted-foreground">You picked 45 items today. Keep it up!</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
