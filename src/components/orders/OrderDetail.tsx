import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Modal } from "@/components/ui/modal"

interface OrderItem {
    id: string
    name: string
    quantity: number
    price: number
}

interface Order {
    id: string
    customer: string
    total: number
    status: string
    date: string
    items?: OrderItem[]
}

interface OrderDetailProps {
    order: Order | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function OrderDetail({ order, open, onOpenChange }: OrderDetailProps) {
    if (!order) return null

    return (
        <Modal
            isOpen={open}
            onClose={() => onOpenChange(false)}
            title={`Order ${order.id}`}
            className="max-w-3xl"
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                        Placed on {new Date(order.date).toLocaleDateString()} by <span className="font-medium text-foreground">{order.customer}</span>
                    </div>
                    <Badge variant={
                        order.status === 'Delivered' ? 'default' :
                            order.status === 'Shipped' ? 'secondary' :
                                order.status === 'Processing' ? 'outline' : 'destructive'
                    }>
                        {order.status}
                    </Badge>
                </div>

                <Separator />

                <div className="space-y-4">
                    <h4 className="font-medium leading-none">Order Items</h4>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="text-right">Quantity</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {order.items && order.items.length > 0 ? (
                                order.items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <div className="font-medium">{item.name}</div>
                                            <div className="text-xs text-muted-foreground">{item.id}</div>
                                        </TableCell>
                                        <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                                        <TableCell className="text-right">{item.quantity}</TableCell>
                                        <TableCell className="text-right font-medium">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center text-muted-foreground h-24">
                                        No items details available for this order.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    <div className="flex flex-col gap-2 items-end pt-4 border-t">
                        <div className="flex justify-between w-48 text-sm">
                            <span className="text-muted-foreground">Subtotal:</span>
                            <span>${order.total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between w-48 text-sm">
                            <span className="text-muted-foreground">Shipping:</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between w-48 text-sm">
                            <span className="text-muted-foreground">Tax:</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between w-48 font-bold text-lg border-t pt-2 mt-2">
                            <span>Total:</span>
                            <span>${order.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
