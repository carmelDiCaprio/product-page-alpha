const express= require('express');
const router = express.Router();
const palletInfo = require('./controllers/pallet-controller');
const controllerTwo = require('./controllers/extra-controller');
const cors = require('cors');


console.log(palletInfo);

// Set up route specfic middleware
router.use( cors());
// Sample Route
router.get( '/sample', (req,res,next) => {
    res.json({message:'Sample request'});
    // res.send('Error with sample request')
});


// Route uses a Route Parameter
router.route('/pallets-type/:id')
  .get( palletInfo.getPallet);


// Check how many pallets left
  router.get('/supply',(req,res,next) => {
      function checkSupply(){
          let num = Math.random();
          if(num < .33 ){
            res.json({ message: 'Almost sold out', color:'danger'})
          } else if(num > .66){
            res.json({message: 'Medium amount left', color: 'warning'})
          } else {
            res.json({ message: 'Supply is stocked', color: 'success'})
          }
      }
      return checkSupply();
  })

router.route('/reviews/:id')
    .get( controllerTwo.getReviews );




module.exports = router;
