export type OrderItem = {
    itemID: number,
    itemName: string,
    price: number,
    description: string
}


export type OrderStatus = {
    statusID: number,
    status: string
}

export type OrderType = {
    orderID: number,
    paymentAmount: number,
    status: OrderStatus,
    date: string
    items: OrderItem[]
}