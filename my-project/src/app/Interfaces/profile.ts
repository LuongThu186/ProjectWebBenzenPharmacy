<<<<<<< HEAD
<<<<<<< HEAD
// export interface Profile {
//     CustomerID : number,
//     CustomerName: string,
//     Phone: string,
//     Mail: string,
//     BOD: string,
//     Gender: string,
//     Membership: string,
//     AccountCode: number,
//     RecipientAddressID: number,
//     Image: string

// }
=======
=======
>>>>>>> 79195124d9c18ed03c869aa320644c6322e180da
export interface Profile {
    CustomerID : number,
    CustomerName: string,
    Phone: string,
    Mail: string,
    BOD: string,
    Gender: string,
    Membership: string,
    AccountCode: number,
    RecipientAddressID: number,
    Image: string

}
<<<<<<< HEAD
>>>>>>> 79195124d9c18ed03c869aa320644c6322e180da
=======
>>>>>>> 79195124d9c18ed03c869aa320644c6322e180da

export class Profile {
    constructor(
        public CustomerID : number=0,
        public CustomerName: string="",
        public Phone: string="",
        public Mail: string="",
        public BOD: string="",
        public Gender: string="",
        public Membership: string="",
        public AccountCode: number=0,
        public RecipientAddressID: number=0,
        public Image: string=""
    ){}
}
