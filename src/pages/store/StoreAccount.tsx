import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

export default function StoreAccount() {
    return (
        <div className="container mx-auto py-8 px-4 flex gap-8">
            {/* Sidebar Nav */}
            <aside className="w-64 hidden md:block space-y-1">
                <Button variant="secondary" className="w-full justify-start">Orders</Button>
                <Button variant="ghost" className="w-full justify-start">Quotes</Button>
                <Button variant="ghost" className="w-full justify-start">Invoices</Button>
                <Button variant="ghost" className="w-full justify-start">Addresses</Button>
                <Button variant="ghost" className="w-full justify-start">Account Details</Button>
                <div className="pt-4 mt-4 border-t">
                    <Button variant="ghost" className="w-full justify-start text-destructive">Logout</Button>
                </div>
            </aside>

            <div className="flex-1 space-y-6">
                <div>
                    <h1 className="text-2xl font-bold">My Orders</h1>
                    <p className="text-muted-foreground">View and track your recent orders.</p>
                </div>

                <Card>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[1, 2, 3].map((i) => (
                                    <TableRow key={i}>
                                        <TableCell className="font-medium">#ORD-329{i}</TableCell>
                                        <TableCell>Oct {20 + i}, 2023</TableCell>
                                        <TableCell>
                                            <Badge variant={i === 1 ? "secondary" : "outline"}>
                                                {i === 1 ? "Processing" : "Delivered"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">$2,450.00</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">View</Button>
                                            <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Billing Address</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                            <p className="font-medium">Acme Inc.</p>
                            <p>123 Corporate Blvd</p>
                            <p>Suite 400</p>
                            <p>San Francisco, CA 94107</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Account Manager</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                SM
                            </div>
                            <div>
                                <p className="font-medium">Sarah Miller</p>
                                <p className="text-sm text-muted-foreground">sarah.m@herrayma.com</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
