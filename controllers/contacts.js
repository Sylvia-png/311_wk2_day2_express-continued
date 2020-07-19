const contacts = require("../data/contacts");

const contactCount = contacts.length;

 const list = (req, res) =>{
    res.json(contacts);
 };

 const show = (req, res) => {
    const id = req.params.contactId;
    const foundContact = contacts.filter(contact => contact._id === Number(id));
    res.json(foundContact);
};


const create = (req, res) =>{
    console.log(req.body);

    const newUser ={  
    _id: contactCount + 1,
        ...req.body,
    };
    contacts.push(newUser);
    res.json(newUser);

};

module.exports = {
    list,
    show,
    create
};
