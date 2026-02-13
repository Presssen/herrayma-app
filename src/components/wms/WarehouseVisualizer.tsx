import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { inventoryItems } from "@/data/mockData"

interface WarehouseVisualizerProps {
    highlightedLocation?: string | null
}

const RACKS = ['A', 'B', 'C', 'D']
const METERS = 50

export function WarehouseVisualizer({ highlightedLocation }: WarehouseVisualizerProps) {
    const [selectedCell, setSelectedCell] = useState<{ row: string, meter: number } | null>(null)
    const [showDetails, setShowDetails] = useState(false)

    // Parse highlighted location
    useEffect(() => {
        if (highlightedLocation) {
            const [row, meterStr] = highlightedLocation.split('-')
            const meter = parseInt(meterStr)
            if (row && !isNaN(meter)) {
                setSelectedCell({ row, meter })
                setShowDetails(true) // Automatically show details when highlighted
            }
        }
    }, [highlightedLocation])

    const getItemsInCell = (row: string, meter: number) => {
        return inventoryItems.filter(item => {
            const [r, m] = item.location.split('-')
            return r === row && parseInt(m) === meter
        })
    }

    // Check if cell has any items
    const isCellOccupied = (row: string, meter: number) => {
        return getItemsInCell(row, meter).length > 0
    }

    const handleCellClick = (row: string, meter: number) => {
        setSelectedCell({ row, meter })
        setShowDetails(true)
    }

    return (
        <div className="flex gap-4 h-full">
            <Card className="flex-1 h-full overflow-hidden flex flex-col border shadow-sm">
                <CardHeader className="pb-2 border-b bg-muted/40">
                    <CardTitle>Warehouse Layout Map</CardTitle>
                    <CardDescription>
                        Interactive Top-down view. Click any cell for details.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 overflow-auto p-6 bg-slate-50">
                    <div className="min-w-[800px] flex flex-col gap-6">
                        {RACKS.map(row => (
                            <div key={row} className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-lg w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                                        {row}
                                    </span>
                                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Row {row} (50m)</span>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex-1 grid grid-cols-[repeat(50,minmax(18px,1fr))] gap-[2px] p-2 bg-white border rounded-lg shadow-sm">
                                        {Array.from({ length: METERS }).map((_, i) => {
                                            const meter = i + 1
                                            const occupied = isCellOccupied(row, meter)
                                            const isSelected = selectedCell?.row === row && selectedCell?.meter === meter

                                            return (
                                                <div
                                                    key={`${row}-${meter}`}
                                                    className={`
                                                        h-10 rounded-sm cursor-pointer transition-all duration-200 border
                                                        ${isSelected
                                                            ? 'ring-2 ring-primary ring-offset-2 z-10 bg-primary/20 border-primary'
                                                            : 'hover:scale-110 hover:shadow-md hover:border-primary/50'
                                                        }
                                                        ${occupied
                                                            ? 'bg-blue-500 border-blue-600 shadow-sm'
                                                            : 'bg-slate-100 border-slate-200 hover:bg-slate-200'
                                                        }
                                                    `}
                                                    title={`Row ${row}, Meter ${meter}`}
                                                    onClick={() => handleCellClick(row, meter)}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <div className="p-3 border-t bg-background flex items-center justify-center gap-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-slate-100 border border-slate-200 rounded-sm"></div>
                        <span>Empty Space</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 border border-blue-600 rounded-sm"></div>
                        <span>Occupied Space</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary/20 border-2 border-primary rounded-sm"></div>
                        <span>Selected / Highlighted</span>
                    </div>
                </div>
            </Card>

            {/* Details Panel / Sidebar */}
            {showDetails && selectedCell && (
                <Card className="w-80 h-full flex flex-col border shadow-sm animate-in slide-in-from-right-10 duration-300">
                    <div className="bg-primary px-4 py-3 text-primary-foreground flex justify-between items-center rounded-t-lg">
                        <div>
                            <h4 className="font-bold text-lg">Location {selectedCell.row}-{selectedCell.meter < 10 ? `0${selectedCell.meter}` : selectedCell.meter}</h4>
                            <p className="text-xs opacity-90">Rack View (Side Profile)</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20" onClick={() => setShowDetails(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <CardContent className="p-4 space-y-4 flex-1 overflow-auto">
                        <div className="grid grid-rows-4 gap-2 bg-slate-100 p-3 rounded-md border">
                            {[4, 3, 2, 1].map(level => {
                                const items = getItemsInCell(selectedCell.row, selectedCell.meter)
                                const itemsAtLevel = items.filter(item => {
                                    const parts = item.location.split('-')
                                    return parseInt(parts[2]) === level
                                })
                                const hasItem = itemsAtLevel.length > 0

                                return (
                                    <div
                                        key={level}
                                        className={`
                                            h-12 flex items-center justify-between px-3 text-xs border rounded-md transition-colors
                                            ${hasItem
                                                ? 'bg-white border-blue-200 shadow-sm'
                                                : 'bg-slate-50 border-transparent text-muted-foreground'
                                            }
                                        `}
                                    >
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-slate-500">Level {level}</span>
                                        </div>
                                        {hasItem ? (
                                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0">
                                                {itemsAtLevel.length} Item{itemsAtLevel.length !== 1 ? 's' : ''}
                                            </Badge>
                                        ) : (
                                            <span className="text-slate-300 italic">Empty</span>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        {getItemsInCell(selectedCell.row, selectedCell.meter).length > 0 ? (
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-foreground border-b pb-2">Stored Items</p>
                                <ul className="space-y-2">
                                    {getItemsInCell(selectedCell.row, selectedCell.meter).map(item => (
                                        <li key={item.id} className="text-sm bg-muted/40 p-3 rounded border flex flex-col gap-1 hover:bg-muted/60 transition-colors">
                                            <div className="flex justify-between items-start gap-2">
                                                <span className="font-medium truncate">{item.name}</span>
                                                <Badge variant="outline" className="text-[10px] h-5 shrink-0">{item.id}</Badge>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mt-1">
                                                <div className="bg-background px-2 py-1 rounded border text-center">
                                                    Level {item.location.split('-')[2]}
                                                </div>
                                                <div className="bg-background px-2 py-1 rounded border text-center">
                                                    Qty: {item.stock}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center justify-center p-8 text-center border-2 border-dashed rounded-lg bg-slate-50">
                                <span className="text-sm text-muted-foreground italic">No items stored in this section.</span>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
