import { Button } from "@/components/ui/button"

export default function StoreHome() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20 px-6">
                <div className="container mx-auto max-w-5xl text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        Premium Industrial Tools & Supplies
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-300">
                        Equip your business with the best. Fast shipping, bulk discounts, and dedicated support for enterprise clients.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">Shop Catalog</Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">Request Quote</Button>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-16 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {['Power Tools', 'Safety Gear', 'Fasteners', 'Hand Tools', 'Maintenance', 'Storage'].map((cat) => (
                            <div key={cat} className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-video flex items-center justify-center cursor-pointer hover:shadow-lg transition-all">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <span className="relative text-2xl font-bold text-white max-w-[80%] text-center">{cat}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold">New Arrivals</h2>
                        <Button variant="link">View all &rarr;</Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white dark:bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                <div className="aspect-square bg-gray-200" />
                                <div className="p-4 space-y-2">
                                    <h3 className="font-semibold truncate">Industrial Grade Drill Driver 20V</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-lg">$129.99</span>
                                        <Button size="sm">Add</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
