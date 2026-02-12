import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const data = [
    { metric: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month" },
    { metric: "Subscriptions", value: "+2350", change: "+180.1% from last month" },
    { metric: "Sales", value: "+12,234", change: "+19% from last month" },
    { metric: "Active Now", value: "+573", change: "+201 since last hour" },
]

const recentSales = [
    { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", status: "Success" },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", status: "Processing" },
    { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", status: "Success" },
    { name: "William Kim", email: "will@email.com", amount: "+$99.00", status: "Failed" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", status: "Success" },
]

export default function Reports() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard & Reports</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {data.map((item, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {item.metric}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {item.change}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-end justify-between px-4 gap-2">
                            {[30, 40, 20, 50, 70, 40, 80, 50, 60, 90, 45, 75].map((h, i) => (
                                <div key={i} className="bg-primary/20 hover:bg-primary/40 transition-colors w-full rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between px-4 pt-2 text-xs text-muted-foreground">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <div className="text-sm text-muted-foreground">
                            You made 265 sales this month.
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {recentSales.map((sale, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{sale.name}</p>
                                        <p className="text-sm text-muted-foreground">{sale.email}</p>
                                    </div>
                                    <div className="ml-auto font-medium">{sale.amount}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentSales.map((sale, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="font-medium">{sale.name}</div>
                                        <div className="text-sm text-muted-foreground">{sale.email}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={sale.status === "Success" ? "default" : sale.status === "Processing" ? "secondary" : "destructive"}>
                                            {sale.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{sale.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
