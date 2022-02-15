export class coupon{

  constructor(
    public  couponId: string,
    public  provider: string,
    public  couponCode: string,
    public  category: string,
    public  description: string,
    public  expiryDate: string,
  )
  {
    this.couponId=couponId;
    this.provider=provider;
    this.couponCode=couponCode;
    this.category=category;
    this.description=description;
    this.expiryDate=expiryDate;
}

}
