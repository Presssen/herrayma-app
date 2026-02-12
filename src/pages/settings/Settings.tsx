import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Settings() {
    const [activeTab, setActiveTab] = useState("profile")

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Settings</h3>
                <p className="text-sm text-muted-foreground">
                    Manage your account settings and preferences.
                </p>
            </div>

            <div className="flex space-x-2 border-b pb-2">
                <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    onClick={() => setActiveTab("profile")}
                >
                    Profile
                </Button>
                <Button
                    variant={activeTab === "account" ? "default" : "ghost"}
                    onClick={() => setActiveTab("account")}
                >
                    Account
                </Button>
                <Button
                    variant={activeTab === "notifications" ? "default" : "ghost"}
                    onClick={() => setActiveTab("notifications")}
                >
                    Notifications
                </Button>
            </div>

            <div className="mt-4">
                {activeTab === "profile" && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile</CardTitle>
                            <CardDescription>
                                This is how others will see you on the site.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
                                <Input id="username" defaultValue="@johndoe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="bio" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Bio</label>
                                <Input id="bio" defaultValue="I own a computer." />
                            </div>
                            <Button>Save changes</Button>
                        </CardContent>
                    </Card>
                )}

                {activeTab === "account" && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                                Make changes to your account here.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                <Input id="name" defaultValue="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                <Input id="email" defaultValue="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                                <Input id="password" type="password" />
                            </div>
                            <Button>Save changes</Button>
                        </CardContent>
                    </Card>
                )}

                {activeTab === "notifications" && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>
                                Configure how you receive notifications.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between space-x-2">
                                <label htmlFor="emails" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Notifications</label>
                                <input type="checkbox" id="emails" defaultChecked className="h-4 w-4" />
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <label htmlFor="marketing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Marketing Emails</label>
                                <input type="checkbox" id="marketing" className="h-4 w-4" />
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <label htmlFor="security" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Security Alerts</label>
                                <input type="checkbox" id="security" defaultChecked className="h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}
