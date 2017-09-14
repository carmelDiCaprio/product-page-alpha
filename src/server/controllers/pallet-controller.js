
//Instantiate some varables to be reused
class Item{
    constructor(size, price){
        this.size = size;
        this.price = price;
    }
}
// Helper Functions part 1

function editArr(edit){
    return newArr = productArr.map( curren => curren[edit] );
}
var returnSizes = editArr.bind(null,'size');        // first argument is null since no "this"
var returnPrices = editArr.bind(null,'price');     // first argument is null since no "this"
const productArr  = [ new Item('Standard', 189.00), new Item('Portrait',89.00 ), new Item('Square', 105.00), new Item('Social',129.00 ) , new Item('Classic',144.00 ) , new Item('Large',299.00)]


exports.getPallet = function(req,res,next){
    switch(req.params.id){
        case 'family':
          getFamily(req,res,next);
          break;

        case 'pet':
          getPets(req,res,next);
          break;

        case 'wedding':
          getWedding(req,res,next);
          break;

        default:
          getGeneric(req,res,next);



    }

}




// Helper Functions part 2

var getFamily = function(req,res,next){
    // Pull from a database
    let fam = {
      name: 'Family Pallet',
      details: `<p> Your favorite family moments like you have never seen before!  Each pallet is carefully designed and constructed to highlight each member of your family.  You don't have to worry about a space between planks going right through someone's face!
                <br>  All of our beautiful photo pallets are handmade from 100% recycled wood to bring out the best look for your photo, satisfaction guaranteed!</p>` ,
      images: [ "//cdn.shopify.com/s/files/1/0856/4220/products/dogfam2_110x110@2x.jpg?v=1491416984","//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_71_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/dog_fam_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_139_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_131_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_135_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_53_110x110@2x.jpg?v=1491416984", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_55_110x110@2x.jpg?v=1491416984"]
      ,sizes: returnSizes(),
      prices: returnPrices()
    }
      res.json({message: fam});
}

var getWedding = function(req,res,next){
    let wedding = {
      name: 'Wedding Pallet',
      details:`<p> New love, lifelong soulmates, or somewhere in between, a custom photo pallet is the perfect way to showcase your affection. Nothing says I love you better than a Chix Beach Original!
                  <br>  All of our beautiful photo pallets are handmade from 100% recycled wood to bring out the best look for your photo, satisfaction guaranteed! </p> ` ,
      images: ["//cdn.shopify.com/s/files/1/0856/4220/products/just_wedding_pallet_for_site_110x110@2x.jpg?v=1499877551", "//cdn.shopify.com/s/files/1/0856/4220/products/wedding1_110x110@2x.jpg?v=1499877551", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_130_110x110@2x.jpg?v=1499877551", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_61_110x110@2x.jpg?v=1499877551", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_79_110x110@2x.jpg?v=1499877551", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_59_110x110@2x.jpg?v=1499877551", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_86_110x110@2x.jpg?v=1499877551", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_137_110x110@2x.jpg?v=1499877551" ]
      , sizes: returnSizes(),
      prices: returnPrices()
    }

    res.json({message:wedding})
}


var getPets = function(req,res,next){
    let pet = {
        name: 'Pet Pallet',
        details: `<p> The photo pallets of my dogs hanging in my studio never cease to amaze people who come and visit. If you love your four legged companions as much as I do, then you’ll love showing them off with on a beautiful Chix Beach Photo Pallet!
                  <br> All of our beautiful photo pallets are handmade from 100% recycled wood to bring out the best look for your photo, satisfaction guaranteed! </p>` ,
        images:["//cdn.shopify.com/s/files/1/0856/4220/products/dog_pallet_for_site_110x110@2x.jpg?v=1499877254", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_52_110x110@2x.jpg?v=1499877254","//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_63_110x110@2x.jpg?v=1499877254", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_60_110x110@2x.jpg?v=1499877254", "//cdn.shopify.com/s/files/1/0856/4220/products/dogtongue_110x110@2x.jpg?v=1499877254", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_136_110x110@2x.jpg?v=1499877254", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_64_110x110@2x.jpg?v=1499877254"]
        , sizes: returnSizes(),
        prices: returnPrices()
      }
      res.json({message:pet});
};


var getMemory = function(req,res,next){
  let memory = {
      name: 'In Memory ... Of',
      details: 'sample',
      images: [ ]
      , sizes: returnSizes(),
      prices: returnPrices()
    }
  res.json({message:memory});
}

var getVacation = function(req,res,next){
    let vacay = {
        name: 'Vacation Pallet',
        details: 'sample',
        images: [ ],
        sizes: returnSizes(),
        prices: returnPrices()
    }
    res.json({message:vacay});
}


var getKids = function(req,res,next){
    let kids = {
        name: 'Kids Pallet',
        details: 'sample',
        images: [ ],
        sizes: returnSizes(),
        prices: returnPrices()
    }
      res.json({message:kids});
}


var getGeneric= (req,res,next) => {
    let generic = {
      name: 'Generic Any Photo Pallet',
      details: `<p> Transform your best photos from your smart phone or camera into wooden works of art!  Capture your favorite moment, spot or feeling on a completely custom designed piece of decor that is constructed from retired shipping pallets. Your Photo Pallet is specifically planned out for the image you give us, and each plank is cut and spaced to highlight the main elements of your photo.  Each pallet comes ready to hang right out of the box, so go ahead and clear some space off those walls!
            <br> Follow the steps below to create your own!  Don't hesitate to chat with our agent or shoot us an email or call if you have any questions about starting your custom piece!
            <br> All of our Photo Pallets are handmade from 100% recycled wood to bring out the best look for your photo, satisfaction guaranteed! </p>`,
      images:["//cdn.shopify.com/s/files/1/0856/4220/products/tree_pallet_for_site_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_270_110x110@2x.jpg?v=1501015056","//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_70_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_99_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_272_110x110@2x.jpg?v=1501015056","//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_93_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_67_110x110@2x.jpg?v=1501015056", "//cdn.shopify.com/s/files/1/0856/4220/products/FullSizeRender_271_110x110@2x.jpg?v=1501015056" ]
      , sizes: returnSizes(),
      prices: returnPrices()
    }
    res.json({message:generic});
}
