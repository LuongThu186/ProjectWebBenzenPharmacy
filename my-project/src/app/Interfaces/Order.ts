export class Orders{
  constructor(
    public _id: any = null,
    public OrderID: string = '',
    public CustomerName: string = '',
    public OrderDate: string = '',
    public ShipDate: string = '',
    public Status: string = '',
    public Phone: string = '',
    public Email: string = '',
    public Address: string = '',
    public PaymentMethod: string = '',
    public TotalPrice: number = 0,
    public PrePrice: number = 0,
    public DeliveryFee: number = 0,
    public DiscountPrice: number = 0,
    public CustomerID: number = 0,
    public RecipientAddressID: number = 0
  ){}
}
