export const salesData = [
    { name: "Jan", total: 12000, profit: 4000 },
    { name: "Feb", total: 14500, profit: 4800 },
    { name: "Mar", total: 18000, profit: 6000 },
    { name: "Apr", total: 16000, profit: 5200 },
    { name: "May", total: 21000, profit: 7500 },
    { name: "Jun", total: 24000, profit: 8000 },
    { name: "Jul", total: 22500, profit: 7200 },
]

export const recentOrders = [
    {
        id: "ORD-001",
        customer: "Alice Smith",
        total: 250.00,
        status: "Pending",
        date: "2023-10-25",
        items: [
            { id: "PROD-001", name: "Premium Widget", quantity: 2, price: 29.99 },
            { id: "PROD-003", name: "Super Thingamajig", quantity: 1, price: 190.02 } // Adjusted to match total roughly or just mock it
        ]
    },
    {
        id: "ORD-002",
        customer: "Bob Jones",
        total: 120.50,
        status: "Shipped",
        date: "2023-10-24",
        items: [
            { id: "PROD-002", name: "Basic Gadget", quantity: 5, price: 15.99 },
            { id: "PROD-007", name: "Flexi Tube", quantity: 5, price: 5.99 }
        ]
    },
    {
        id: "ORD-003",
        customer: "Charlie Brown",
        total: 450.00,
        status: "Delivered",
        date: "2023-10-23",
        items: [
            { id: "PROD-006", name: "Hyper Gizmo", quantity: 3, price: 150.00 }
        ]
    },
    {
        id: "ORD-004",
        customer: "Diana Prince",
        total: 89.99,
        status: "Processing",
        date: "2023-10-25",
        items: [
            { id: "PROD-004", name: "Mega Whatzit", quantity: 1, price: 49.99 },
            { id: "PROD-001", name: "Premium Widget", quantity: 1, price: 29.99 }
        ]
    },
    {
        id: "ORD-005",
        customer: "Evan Wright",
        total: 1200.00,
        status: "Shipped",
        date: "2023-10-22",
        items: [
            { id: "PROD-005", name: "Ultra Doo-dad", quantity: 96, price: 12.50 }
        ]
    },
]

export const inventoryItems = [
    { id: "PROD-001", name: "Premium Widget", stock: 120, location: "A-01-1", price: 29.99, description: "High quality widget for all your needs." },
    { id: "PROD-002", name: "Basic Gadget", stock: 50, location: "B-03-2", price: 15.99, description: "Standard gadget, reliable and affordable." },
    { id: "PROD-003", name: "Super Thingamajig", stock: 5, location: "C-05-4", price: 99.99, description: "Advanced technology for professionals." },
    { id: "PROD-004", name: "Mega Whatzit", stock: 0, location: "D-02-1", price: 49.99, description: "Heavy duty whatzit." },
    { id: "PROD-005", name: "Ultra Doo-dad", stock: 200, location: "A-45-1", price: 12.50, description: "Small but essential component." },
    { id: "PROD-006", name: "Hyper Gizmo", stock: 75, location: "B-12-3", price: 150.00, description: "Top of the line gizmo." },
    { id: "PROD-007", name: "Flexi Tube", stock: 300, location: "A-02-1", price: 5.99, description: "Flexible tube." },
    { id: "PROD-008", name: "Rigid Bar", stock: 150, location: "A-02-2", price: 8.99, description: "Solid metal bar." },
    { id: "PROD-009", name: "Corner Piece", stock: 80, location: "C-25-1", price: 3.50, description: "Essential for corners." },
    { id: "PROD-010", name: "End Cap", stock: 500, location: "D-50-4", price: 1.25, description: "Finishing touch." },
]

// Map<UserId, Map<ProductId, CustomPrice>>
export const customerPricing: Record<string, Record<string, number>> = {
    "user-david": {
        "PROD-001": 25.00, // Discounted from 29.99
        "PROD-003": 85.00, // Discounted from 99.99
        "PROD-006": 140.00 // Discounted from 150.00
    }
}
