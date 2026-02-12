import { Button } from "@/components/ui/button"
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react"
import { Link } from "react-router-dom"

export default function StoreHome() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 z-0" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 z-[-1]" />

                <div className="container mx-auto max-w-6xl relative z-10 text-center space-y-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
                        New Industrial Standards 2024
                    </span>
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        Power Your Industry <br /> With Precision
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-300 leading-relaxed">
                        Access a connected inventory of premium tools and machinery.
                        Direct integration with our ERP ensures real-time availability.
                    </p>
                    <div className="flex justify-center gap-6 pt-4">
                        <Link to="/store/products">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 h-auto rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                Shop Catalog
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6 h-auto rounded-full font-semibold backdrop-blur-sm transition-all hover:scale-105">
                            Enterprise Solutions
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 bg-gray-50/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Lightning Fast Logistics", desc: "Same-day dispatch for orders before 2PM. Real-time tracking via our integrated WMS." },
                            { icon: ShieldCheck, title: "Certified Quality", desc: "All tools meet ISO 9001 standards. Extended warranty available for enterprise partners." },
                            { icon: Star, title: "Premium Support", desc: "24/7 technical assistance from certified engineers. We solve problems, not just sell tools." }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Visuals */}
            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Trending Equipment</h2>
                            <p className="text-gray-500">Most requested items this month by our partners.</p>
                        </div>
                        <Link to="/store/products" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2 group">
                            View all products <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Placeholder visual cards */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer">
                                <div className={`absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-110`} />
                                {/* Mock image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-blue-300 text-sm font-bold mb-1">BESTSELLER</p>
                                    <h3 className="text-xl font-bold mb-2">Precision Series X{item}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Engineered for high-performance tasks. Available now.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 bg-black text-white">
                <div className="container mx-auto max-w-4xl text-center space-y-6">
                    <h2 className="text-3xl font-bold">Ready to upgrade your inventory?</h2>
                    <p className="text-gray-400 text-lg">Create a business account to access wholesale pricing and bulk order tools.</p>
                    <div className="pt-4">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 rounded-full">Get Started</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
