import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const gridCells = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    type: i % 10 === 2 || i % 10 === 7 ? "aisle" : i % 20 === 5 ? "shelf" : "floor",
    occupied: i % 20 === 5,
}))

export default function WarehouseEditor() {
    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Warehouse Layout</h2>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Reset</Button>
                    <Button>Save Layout</Button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 h-full">
                <div className="col-span-3 space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tools</CardTitle>
                            <CardDescription>Drag items to the grid</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="h-20 flex flex-col gap-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-sm" />
                                Shelf (Standard)
                            </Button>
                            <Button variant="outline" className="h-20 flex flex-col gap-2">
                                <div className="w-12 h-8 bg-orange-500 rounded-sm" />
                                Pallet Rack
                            </Button>
                            <Button variant="outline" className="h-20 flex flex-col gap-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                                Packing Station
                            </Button>
                            <Button variant="outline" className="h-20 flex flex-col gap-2">
                                <div className="w-full h-2 bg-yellow-400" />
                                Wall / Barrier
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Properties</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm text-muted-foreground text-center py-8">
                                Select an item on the grid to view properties.
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="col-span-9 bg-muted/20 overflow-hidden">
                    <CardContent className="p-6 h-full overflow-auto flex items-center justify-center">
                        <div className="grid grid-cols-10 gap-1 p-8 bg-background shadow-sm border rounded-lg" style={{ width: '600px', height: '600px' }}>
                            {gridCells.map((cell) => (
                                <div
                                    key={cell.id}
                                    className={`
                           relative rounded-sm transition-colors cursor-pointer hover:ring-2 hover:ring-primary/50
                           ${cell.type === 'aisle' ? 'bg-transparent' : ''}
                           ${cell.type === 'shelf' ? 'bg-blue-500 shadow-sm' : ''}
                           ${cell.type === 'floor' ? 'bg-muted/30 border border-muted' : ''}
                        `}
                                    title={`Cell ${cell.id} - ${cell.type}`}
                                >
                                    {cell.occupied && <div className="absolute inset-1 bg-blue-300/20 rounded-sm" />}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
