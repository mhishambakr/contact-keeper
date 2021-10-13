const express= require('express');
const router = express.Router();

// @router      GET api/contacts
// @desc        get all users contacts
// @access      Private
router.post('/', (req,res)=>{
    res.send('get all users contacts')
})

// @router      POST api/users
// @desc        register a user
// @access      Private
router.get('/', (req,res)=>{
    res.send('register a user')
})

// @router      PUT api/contacts
// @desc        update existing contact
// @access      Private
router.put('/:id', (req,res)=>{
    res.send('update existing contact')
})

// @router      DELETE api/contacts
// @desc        delete a contact
// @access      Private
router.delete('/:id', (req,res)=>{
    res.send('delete a contact')
})

module.exports = router;