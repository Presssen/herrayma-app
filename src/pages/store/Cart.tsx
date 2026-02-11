import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trash, Minus, Plus } from "lucide-react"

export default function Cart() {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {[1, 2].map((i) => (
                        <Card key={i}>
                            <CardContent className="p-4 flex gap-4">
                                <div className="h-24 w-24 bg-muted rounded-md flex-shrink-0" />
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-semibold">Professional Cordless Drill</h3>
                                            <p className="text-sm text-muted-foreground">SKU: TOOL-00{i}</p>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-destructive"><Trash className="h-4 w-4" /></Button>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="icon" className="h-8 w-8"><Minus className="h-3 w-3" /></Button>
                                            <span className="w-8 text-center text-sm">1</span>
                                            <Button variant="outline" size="icon" className="h-8 w-8"><Plus className="h-3 w-3" /></Button>
                                        </div>
                                        <div className="font-bold text-lg">$149.00</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>$298.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Shipping</span>
                                <span>Calculating...</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Tax</span>
                                <span>$23.84</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-bold">
                                <span>Total</span>
                                <span>$321.84</span>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col gap-4">
                            <Input placeholder="Promo Code" />
                            <Button className="w-full size-lg">Proceed to Checkout</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
