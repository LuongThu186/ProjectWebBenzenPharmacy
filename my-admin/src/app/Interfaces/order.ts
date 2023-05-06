export interface Order {
    _id: any,
    OrderID: string,
    CustomerName: string,
    OrderDate: string,
    ShipDate: string,
    Status: string,
    CustomerID: number,
    RecipientAddressID: number
}

export class Order {
    constructor(
        public _id: any=null,
        public OrderID: string="",
        public CustomerName: string="",
        public OrderDate: string="",
        public ShipDate: string="",
        public Status: string="",
        public CustomerID: number=0,
        public RecipientAddressID: number=0
    ){}
}