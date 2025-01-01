const express= require('express');
const router = express.Router();
const Post = require('../models/post');


//Routes

//GET - HOME ROUTE
router.get('', async(req, res) =>{
    const locals = {
        title: 'nodejs blog',
        description: 'simple boggdhjasdfvgygd'
    }
    try{
        const data = await Post.find();
        res.render('index', {locals, data});
    } catch(error){
        console.error(error)
    }
});


router.get('/about', (req, res) =>{
    res.render('about')
});
module.exports = router