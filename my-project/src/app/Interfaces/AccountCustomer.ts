export class AccountCustomer{
    constructor(
        public _id: any = null,
        public AccountCode: number,
        public Phone:string ='',
        public Mail: string='',
        public Password: string=''
    ){}
}