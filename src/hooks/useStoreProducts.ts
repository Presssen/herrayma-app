import { useAuth } from "@/context/AuthContext"
import { inventoryItems, customerPricing } from "@/data/mockData"

export interface StoreProduct {
    id: string
    name: string
    price: number
    originalPrice?: number
    stock: number
    description?: string
    location?: string
}

export function useStoreProducts() {
    const { user } = useAuth()

    const getProducts = (): StoreProduct[] => {
        return inventoryItems.map(item => {
            let price = item.price
            let originalPrice = undefined

            // Apply customer specific pricing if available
            if (user && customerPricing[user.id] && customerPricing[user.id][item.id]) {
                price = customerPricing[user.id][item.id]
                originalPrice = item.price // Keep track of original price to show discount
            }

            return {
                ...item,
                price,
                originalPrice
            }
        })
    }

    return {
        products: getProducts()
    }
}
