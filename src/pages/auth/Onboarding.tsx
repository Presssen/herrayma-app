import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { Check } from "lucide-react"

export default function OnboardingWizard() {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1)
        } else {
            navigate('/admin') // Finish onboarding
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium ${step >= i ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted text-muted-foreground'}`}>
                                {step > i ? <Check className="h-4 w-4" /> : i}
                            </div>
                        ))}
                    </div>
                    <CardTitle>Welcome to Herrayma</CardTitle>
                    <CardDescription>
                        {step === 1 && "Let's set up your company profile."}
                        {step === 2 && "Configure your first warehouse."}
                        {step === 3 && "Invite your team members."}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {step === 1 && (
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label>Company Name</label>
                                <Input placeholder="Acme Inc." />
                            </div>
                            <div className="grid gap-2">
                                <label>Industry</label>
                                <Input placeholder="E-commerce, Logistics, etc." />
                            </div>
                            <div className="grid gap-2">
                                <label>Base Currency</label>
                                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                    <option>GBP (£)</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label>Warehouse Name</label>
                                <Input placeholder="Main Warehouse" />
                            </div>
                            <div className="grid gap-2">
                                <label>Location / Address</label>
                                <Input placeholder="123 Storage Lane" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <label>Zones</label>
                                    <Input type="number" placeholder="5" />
                                </div>
                                <div className="grid gap-2">
                                    <label>Aisles per Zone</label>
                                    <Input type="number" placeholder="10" />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label>Invite Team (Email addresses)</label>
                                <Input placeholder="colleague@example.com" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="h-4 w-4 rounded border border-primary bg-primary text-primary-foreground flex items-center justify-center">
                                    <Check className="h-3 w-3" />
                                </div>
                                <span className="text-sm text-muted-foreground">Send invite emails immediately</span>
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
                        Back
                    </Button>
                    <Button onClick={handleNext}>
                        {step === 3 ? "Finish & Go to Dashboard" : "Next"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
