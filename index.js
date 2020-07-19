const express = require("express");
const bodyParser = require("body-parser");


//data
const comments = require('./data/comments');
const contacts = require('./data/contacts');
const products = require('./data/products');
const vehicles = require('./data/vehicles');


const commentsRoutes = require('./routes/comments');
const contactsRoutes = require('./routes/contacts');
const productsRoutes = require('./routes/products');
const vehiclesRoutes = require('./routes/vehicles');

// creo que no se esta utilizando esto
const commentsCount = comments.length;
const contactCount = contacts.length;
const productsCount = products.length;
const vehiclesCount = vehicles.length;


const app = express();

const port = process.env.PORT || 4001;

//middleware
app.use(express.static("public"));
app.use(bodyParser.json());


//routers
app.use(commentsRoutes);
app.use(contactsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);



//app.get("/contacts",(req, res) =>{
  //  res.json(contacts);
//});

//app.get("/contacts/:contactId", (req, res) =>{
  //  const id = req.params.contactId;
    //const foundContact = contacts.filter(contact => contact._id === Number(id));
    //res.json(foundContact);
//});

/*app.post("/contacts", (req, res) =>{
    console.log(req.body);

    const newUser ={  
    _id: contactsCount + 1,
        ...req.body,
        //name: req.body.name,
        //occupation: req.body.occupation,
        //avatar: req.body.avatar
    };
    contacts.push(newUser);
    res.json(newUser);

});*/


//app.get("/comments",(req, res) =>{
 //   res.json(comments);
//});

//app.get("/products",(req, res) =>{
//    res.json(products);
//});

//app.get("/vehicles",(req, res) =>{
//    res.json(vehicles);
//});

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

