const products = require("../data/products");

const productsCount = products .length;

 const list = (req, res) =>{
    res.json(products);
 };

 const show = (req, res) => {
    const id = req.params.productsId;
    const foundProducts  = products.filter(products  => products._id === Number(id));
    res.json(foundProducts );
};


const create = (req, res) =>{
    console.log(req.body);

    const newProducts ={  
    _id: productsCount + 1,
        ...req.body,
    };
    products.push(newProducts);
    res.json(newProducts);

};

module.exports = {
    list,
    show,
    create
};
