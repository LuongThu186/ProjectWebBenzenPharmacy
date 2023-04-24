export class Medicines{
  constructor(
    public _id: any = null,
    public Name: string = '',
    public Price: string = '',
    public Image: string = '',
    public Description: string = '',
    public Ingredients: string = '',
    public Uses: string = '',
    public Directions: string = '',
    public Store: string = '',
    public Warnings: string = '',
    public Brand: string = '',
    public Manufacturer: string = '',
    public Category: string = '',
    public SubCategory: string = '',
    public Create_date: string = `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`
  ) {}
}
