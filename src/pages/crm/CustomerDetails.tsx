import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// Removed missing/unused Avatar and Tabs imports
import { Mail, Phone, Calendar, ArrowLeft, Send } from "lucide-react"

// Simple Avatar since I don't have one
function SimpleAvatar({ initials }: { initials: string }) {
    return (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
            {initials}
        </div>
    )
}

export default function CustomerDetails() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
                <div className="flex items-center gap-4">
                    <SimpleAvatar initials="AS" />
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Alice Smith</h2>
                        <p className="text-sm text-muted-foreground">CEO at TechCorp • Active Customer</p>
                    </div>
                </div>
                <div className="ml-auto flex gap-2">
                    <Button variant="outline"><Phone className="mr-2 h-4 w-4" /> Call</Button>
                    <Button><Mail className="mr-2 h-4 w-4" /> Email</Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Info</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span>alice@techcorp.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>Last contact: 2 days ago</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Tags</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            <Badge variant="secondary">VIP</Badge>
                            <Badge variant="secondary">Tech</Badge>
                            <Badge variant="secondary">Early Adopter</Badge>
                        </CardContent>
                    </Card>
                </div>

                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Activity & Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-blue-100 p-2 rounded-full dark:bg-blue-900">
                                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium">Email Sent: Proposal Review</p>
                                    <p className="text-sm text-muted-foreground">Sent the updated proposal for the enterprise license.</p>
                                    <p className="text-xs text-muted-foreground">Yesterday at 2:30 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-green-100 p-2 rounded-full dark:bg-green-900">
                                    <Phone className="h-4 w-4 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium">Call Logged: Requirements Discovery</p>
                                    <p className="text-sm text-muted-foreground">Discussed requirements for the new warehouse module integration.</p>
                                    <p className="text-xs text-muted-foreground">Oct 24, 2023</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                                    <Send className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium">Note Added</p>
                                    <p className="text-sm text-muted-foreground">Alice mentioned they are looking to expand to Europe next Q3.</p>
                                    <p className="text-xs text-muted-foreground">Oct 20, 2023</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
