import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

// Mock Deals
const stages = [
    { id: "lead", title: "Lead", color: "bg-gray-100 dark:bg-gray-800" },
    { id: "contacted", title: "Contacted", color: "bg-blue-50 dark:bg-blue-900/20" },
    { id: "proposal", title: "Proposal", color: "bg-yellow-50 dark:bg-yellow-900/20" },
    { id: "won", title: "Closed Won", color: "bg-green-50 dark:bg-green-900/20" },
]

const deals = [
    { id: 1, title: "Enterprise License", company: "TechCorp", value: 12000, stage: "lead" },
    { id: 2, title: "Website Redesign", company: "Bakery Co.", value: 4500, stage: "contacted" },
    { id: 3, title: "Annual Support", company: "LogiTrans", value: 2500, stage: "proposal" },
    { id: 4, title: "Custom Integration", company: "MegaCorp", value: 25000, stage: "won" },
    { id: 5, title: "Mobile App", company: "StartApp", value: 15000, stage: "contacted" },
    { id: 6, title: "Consulting", company: "IndieDev", value: 1200, stage: "lead" },
]

export default function Pipeline() {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Deals & Pipeline</h2>
                <Button><Plus className="mr-2 h-4 w-4" /> New Deal</Button>
            </div>

            <div className="flex-1 min-h-0 overflow-x-auto">
                <div className="flex h-full gap-4 min-w-[1000px] pb-4">
                    {stages.map((stage) => (
                        <div key={stage.id} className={`flex-1 flex flex-col rounded-lg ${stage.color} p-4`}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold">{stage.title}</h3>
                                <Badge variant="secondary">{deals.filter(d => d.stage === stage.id).length}</Badge>
                            </div>

                            <div className="space-y-3 overflow-y-auto flex-1 pr-2">
                                {deals.filter(d => d.stage === stage.id).map((deal) => (
                                    <Card key={deal.id} className="cursor-pointer hover:shadow-md transition-shadow">
                                        <CardContent className="p-3">
                                            <div className="font-medium text-sm mb-1">{deal.title}</div>
                                            <div className="text-xs text-muted-foreground mb-2">{deal.company}</div>
                                            <div className="flex justify-between items-center text-xs">
                                                <Badge variant="outline">${deal.value.toLocaleString()}</Badge>
                                                <span className="text-muted-foreground">2d ago</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
