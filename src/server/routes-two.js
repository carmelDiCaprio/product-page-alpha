// For the second API

const express = require('express');
const router = express.Router();
const controller = require('./controllers/api-two');

// Insert Middleware 
function checkPing(req,res,next){
    console.log('Route is being pinged', req.params);
    next();
}

// Routes
router.route('/sample')
  .get( (req,res,next) => {
      res.send('Would you like this ? Yup yup you gotta keep clean');
  })


router.route("/products/:id")
  .get( checkPing, controller.getProductsObj );




module.exports = router;


/*
Blueprint:
1) Http request to get a Products Object which contains the information
    - Title
    - Description
    - Reviews
    - Bullet Points
    - Sizes
    - Prices
    - Quantitiy
2)
3)


*/
