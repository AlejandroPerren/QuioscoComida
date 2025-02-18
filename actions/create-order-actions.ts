"use server"

import { OrderSchema } from "@/src/schema"



export async function createOrder(data: unknown) {
    const result = OrderSchema.safeParse(data)

    
}