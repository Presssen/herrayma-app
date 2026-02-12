import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle, CardHeader, CardFooter, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2, Minus, Plus, ArrowRight, ShieldCheck, Truck } from "lucide-react"

export default function Cart() {
    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-3xl font-extrabold tracking-tight mb-8">Shopping Cart</h1>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {/* Cart Items */}
                    {[1, 2].map((i) => (
                        <div key={i} className="flex gap-6 py-6 border-b">
                            <div className="h-32 w-32 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center text-gray-400 font-bold text-xl">
                                IMG
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900">Professional Cordless Drill X{i}00</h3>
                                            <p className="text-sm text-muted-foreground mt-1">Ref: TOOL-00{i} • Series X</p>
                                        </div>
                                        <span className="font-bold text-lg">$149.00</span>
                                    </div>
                                    <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
                                        <ShieldCheck className="h-3 w-3" /> In Stock
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center gap-3 border rounded-lg p-1">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-gray-100"><Minus className="h-3 w-3" /></Button>
                                        <span className="w-8 text-center text-sm font-medium">1</span>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-gray-100"><Plus className="h-3 w-3" /></Button>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                                        <Trash2 className="h-4 w-4 mr-2" /> Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-6 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                        <Truck className="h-4 w-4 text-blue-600" />
                        <span>All items in your cart are eligible for <strong>Free Express Shipping</strong>.</span>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <Card className="shadow-lg border-0 bg-gray-50/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                                <CardDescription>Estimated costs for standard delivery.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-medium">$298.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Shipping Estimate</span>
                                    <span className="font-medium text-emerald-600">Free</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Tax (8%)</span>
                                    <span className="font-medium">$23.84</span>
                                </div>

                                <Separator className="my-4" />

                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span>$321.84</span>
                                </div>
                            </CardContent>
                            <CardFooter className="flex-col gap-4 pt-6">
                                <div className="flex w-full gap-2">
                                    <Input placeholder="Promo Code" className="bg-white" />
                                    <Button variant="outline">Apply</Button>
                                </div>
                                <Button className="w-full h-12 text-md font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                                    Checkout <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <div className="text-center text-xs text-muted-foreground mt-2">
                                    Secure checkout powered by Stripe
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
