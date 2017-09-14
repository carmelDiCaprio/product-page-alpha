

// Helpers and Classes
// name -> string , details  -> html , reviews --> array of obejcts , mainPoints --> html , quantitiy -> number
class Product{
    constructor(type, name, details, quant, images, reviews, mainPoints){
        this.type = type;
        this.sizes = ['Standard', 'Portrait','Square','Social'];
        this.prices = [189.00 , 89.00, 105.00 , 129.00];
        this.name = name;
        this.details = details;
        this.quantity = quant;
        this.images = images;
        reviews?  this.reviews = reviews : this.reviews = [];
        mainPoints ? this.mainPoints = mainPoints : this.mainPoints = `<ul> </ul>`


    }
}
class CustomerReview{
    constructor(name,review){
        this.name = name;
        this.review = review;
    }
}
let one = new Product('chris','<p> more life </p>',5, [ {name: 'mike', review: 'i loved it mate'}, {name: 'rider', review:'great great work bruv'} ]);
//console.log(one);

const returnGeneric = () =>{
    let genericReviews = [new CustomerReview('nate', 'fuck yeah good stuff'), new CustomerReview('Lassie','love these scenic pallets') ];
    let deets = `<p> Your favorite family moments like you have never seen before!  Each pallet is carefully designed and constructed to highlight each member of your family.  You don't have to worry about a space between planks going right through someone's face!
              <br>  All of our beautiful photo pallets are handmade from 100% recycled wood to bring out the best look for your photo, satisfaction guaranteed!</p>` ;
    let pics = [ "//cdn.shopify.com/s/files/1/0856/4220/products/dogfam2_110x110@2x.jpg?v=1491416984","//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_71_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/dog_fam_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_139_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_131_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_135_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_53_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_55_110x110@2x.jpg?v=1491416984"];
    let points = `<ul> <li> Hand Made </li> <li> 100% Made in USA</li> <li>  Recycled Material </li> <li> Supports Small Business </li> </ul>`;
   return new Product('Generic','Generic Pallet',deets,9, pics, genericReviews, points )
}

const returnFamily = () => {
  let genericReviews = [new CustomerReview('rider', 'this is all thats on my mind'), new CustomerReview('Keith', 'Bruhh , these are fyree') ];
  let deets = `<p> Your favorite family moments like you have never seen before!  Each pallet is carefully designed and constructed to highlight each member of your family.  You don't have to worry about a space between planks going right through someone's face!
            <br>  All of our beautiful photo pallets are handmade from 100% recycled wood to bring out the best look for your photo, satisfaction guaranteed!</p>`;
  let pics = [ "//cdn.shopify.com/s/files/1/0856/4220/products/dogfam2_110x110@2x.jpg?v=1491416984","//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_71_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/dog_fam_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_139_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_131_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_135_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_53_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_55_110x110@2x.jpg?v=1491416984"];
  let points = `<ul> <li> Hand Made </li> <li> 100% Made in USA</li> <li>  Recycled Material </li> <li> Supports Small Business </li> </ul>`;
  return new Product('Family','Family Pallet', deets, 5, pics, genericReviews, points)
}

const returnPets = () => {
  let genericReviews = [ new CustomerReview('Salt', 'pallets are thumpin'), new CustomerReview('Peppa', 'im always getting compliments for these, thanks b') ];
  let points = `<ul> <li> Hand Made </li> <li> 100% Made in USA</li> <li>  Recycled Material </li> <li> Supports Small Business </li> </ul>`;
  let deets =`<p> The photo pallets of my dogs hanging in my studio never cease to amaze people who come and visit. If you love your four legged companions as much as I do, then you’ll love showing them off with on a beautiful Chix Beach Photo Pallet!
            <br> All of our beautiful photo pallets are handmade from 100% recycled wood to bring out the best look for your photo, satisfaction guaranteed! </p>` ;
  let pics = ["//cdn.shopify.com/s/files/1/0856/4220/products/tree_pallet_for_site_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_270_110x110@2x.jpg?v=1501015056","//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_70_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_99_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_272_110x110@2x.jpg?v=1501015056","//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_93_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_67_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_271_110x110@2x.jpg?v=1501015056" ];
 return new Product('Pet','Pet Pallet',deets,21,pics,genericReviews,points);
}




exports.getProductsObj = (req,res,next) => {
  console.log('Attempting switch execution');
  switch(req.params.id){
      case 'family':
        console.log('return fam');
        res.json({ data: returnFamily()})
        break;

      case 'pet':
        console.log('return pet');
        res.json({ data: returnPets()})
        break;

      default:
        console.log('return default');
        res.json({ data: returnGeneric() })
  }

}
