



exports.getReviews = (req,res,next) => {
    switch( req.params.id){
      case 'family':
        res.json({ names: getFamilyReviews().names, reviews: getFamilyReviews().reviews })
        break;

      case 'pet':
        getPetReviews();
        res.json({ names: getPetReviews().names , reviews: getPetReviews().reviews });
        break;

      default:
        getGenericReviews();
        res.json({ names: getGenericReviews().names , reviews: getGenericReviews().reviews });
    }
}


 const getFamilyReviews = () => {
    return {
        names: [ 'Sally', 'Kaleb'],
        reviews : ['My pallet is awesome ,thank you so much', 'This brought my family to tears !' ]
    }
 }

 const getPetReviews = () => {
      return {
          names: [ 'Madonna', 'Brad'],
          reviews: ["My dog lucy means the world to me, thank you so much", 'Incredible incredible incredible work jared, i will e sure to share with friends' ]
      }
 }

 const getGenericReviews = () => {
   return  {
      names: ['Chide Okeem', 'Natasha'],
      reviews: ['At first i was hesitant , but this deciscion ended up being one of th best ever', 'Your pallet hangs on my walls to this very day and it gets all kinds of awesome compliments' ]

   }
 }
