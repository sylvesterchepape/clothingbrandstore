var express= require("express"),
    app  =express(),
    mongoose=require("mongoose"),
  
    bodyParser=require('body-parser');

const localhost="127.0.0.1";
const port=8080;
//connecting to mongodb
mongoose.connect(process.env.DATABASEURL||"mongodb://localhost:port/clothing", { useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false});


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");


var ProductSchema = new mongoose.Schema({
    name: String,
    brand:String,
    price:String,
    image: String,
    size:String,
    description: String,
    qty:Number
    
 })  ; 
 var Product = mongoose.model("Product", ProductSchema);

//array of clothes
/*var products=[{brand:"nike",size:"S",product:"t-shirt",image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",price:"123",decription:"image1"},
                 {brand:"adidas",size:"S",product:"t-shirt",image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",price:"123",decription:"image2"},
                 {brand:"puma",size:"S",product:"t-shirt",image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",price:"123",decription:"image3"},
                 {brand:"lavis",size:"S",product:"t-shirt",image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",price:"123",decription:"image4"}];

*/



//landing routes
app.get("/",function(req,res){
    res.render("landing");

});
//clothes routes
app.get("/brands",function(req,res){
    Product.find({},function(err,allproduct){
        if(err){
            console.log(err);
        }else{
            res.render("brands",{products:allproduct})
        }
    });
            
});

app.post("/brands", function(req, res){
    // get data from form and add to campgrounds array
    var name=req.body.name
    var brand = req.body.brand;
    var size=req.body.size;
    var image = req.body.image;
    var description=req.body.decription;
    var price=req.body.price;
    var qty=req.body.qty;
    var newproduct = {name:name,brand: brand, size: size,image:image,decription:description,price:price,qty:qty}
  
    //create a new product and store it in db
Product.create(newproduct,function(err,createdproduct){
    if(err){
        console.log(err);
    }else{
        res.redirect("/brands")
    }
});
    
});
//show a form to create new product
app.get("/brands/new",function(req,res){
   res.render("newP") ;
}
);

//show product info routes
app.get("/brands/:id",function(req,res){
    //find the product id
    Product.findById(req.params.id,function(err,foundproduct){
        if(err){
            console.log(err);
        }else{
            //rendering the show tampletes
            res.render("show",{products:foundproduct});
        }
    });
})






    app.listen(port,localhost,function(){
        console.log("clothing sever is listerning on port 8080");
    })


    