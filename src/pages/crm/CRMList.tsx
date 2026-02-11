import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, MoreHorizontal } from "lucide-react"

// Mock customers
const customers = [
    { id: 1, name: "Alice Smith", company: "TechCorp", email: "alice@techcorp.com", status: "Active", ltv: 12500 },
    { id: 2, name: "Bob Jones", company: "BuildIt Inc.", email: "bob@buildit.com", status: "Active", ltv: 8400 },
    { id: 3, name: "Charlie Brown", company: "LogiTrans", email: "charlie@logitrans.com", status: "Inactive", ltv: 3200 },
    { id: 4, name: "Diana Prince", company: "Themyscira Ltd.", email: "diana@themyscira.com", status: "Active", ltv: 45000 },
]

export default function CRMList() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Customers</h2>
                <Button><Plus className="mr-2 h-4 w-4" /> Add Customer</Button>
            </div>

            <div className="flex items-center gap-2 max-w-sm">
                <div className="relative w-full">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search customers..." className="pl-8" />
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Company</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Lifetime Value</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((cust) => (
                                <TableRow key={cust.id}>
                                    <TableCell className="font-medium">{cust.name}</TableCell>
                                    <TableCell>{cust.company}</TableCell>
                                    <TableCell>{cust.email}</TableCell>
                                    <TableCell>
                                        <Badge variant={cust.status === "Active" ? "default" : "secondary"}>{cust.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">${cust.ltv.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
