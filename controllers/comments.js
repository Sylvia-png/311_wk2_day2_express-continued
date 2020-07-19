const comments = require("../data/comments");

const commentsCount = comments.length;

 const list = (req, res) =>{
    res.json(comments);
 };

 const show = (req, res) => {
    const id = req.params.commentsId;
    const foundComments = comments.filter(comments => comments._id === Number(id));
    res.json(foundComments);
};


const create = (req, res) =>{
    console.log(req.body);

    const newComments ={  
    _id: commentsCount + 1,
        ...req.body,
    };
    comments.push(newComments);
    res.json(newComments);

};

module.exports = {
    list,
    show,
    create
};
