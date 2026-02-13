import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { inventoryItems } from "@/data/mockData"

interface ProductSearchProps {
    onSelectProduct: (product: any) => void
}

export function ProductSearch({ onSelectProduct }: ProductSearchProps) {
    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState<any[]>([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (query.length > 1) {
            const filtered = inventoryItems.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.id.toLowerCase().includes(query.toLowerCase())
            )
            setSuggestions(filtered)
            setIsOpen(true)
        } else {
            setSuggestions([])
            setIsOpen(false)
        }
    }, [query])

    const handleSelect = (product: any) => {
        onSelectProduct(product)
        setQuery(product.name)
        setIsOpen(false)
    }

    return (
        <div className="relative w-full z-20">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search product by name or SKU..."
                    className="pl-9"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query.length > 1 && setIsOpen(true)}
                />
            </div>

            {isOpen && suggestions.length > 0 && (
                <Card className="absolute mt-1 w-full bg-background border shadow-lg z-50">
                    <CardContent className="p-0">
                        <ul className="max-h-[300px] overflow-auto py-1">
                            {suggestions.map((item) => (
                                <li
                                    key={item.id}
                                    className="px-4 py-2 hover:bg-muted cursor-pointer flex justify-between items-center"
                                    onClick={() => handleSelect(item)}
                                >
                                    <div>
                                        <p className="font-medium text-sm">{item.name}</p>
                                        <p className="text-xs text-muted-foreground">{item.id}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-mono bg-secondary px-2 py-0.5 rounded text-secondary-foreground">
                                            {item.location}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
