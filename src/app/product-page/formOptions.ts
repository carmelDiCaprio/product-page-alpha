
class PalletOptions{
    constructor(private type:string){}
}


export const palletTypeOptions:PalletOptions[] = [
      new PalletOptions('Family'),
      new PalletOptions('Pet'),
      new PalletOptions('Kids'),
      new PalletOptions('Vacation'),
      new PalletOptions('Wedding'),
      new PalletOptions('In Memory Of .... ')
];


class SizeOpt{
    constructor(public name:string , public specs:string, public price:number ){ }
}
export const sizeOptions:SizeOpt[] = [
    new SizeOpt('Standard', '18" x 24"', 189.00),
    new SizeOpt('Portrait', '8" x 10"', 89.00 ),
    new SizeOpt('Classic', '13" x 19"', 144.00),
    new SizeOpt('Social','12" x 16"', 129.00),
    new SizeOpt('Large', '24" x 36"', 299.00)
]


export const showSizeModal = () => {
      console.log('Code to show size guide');
}
