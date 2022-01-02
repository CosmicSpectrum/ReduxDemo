const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(cors())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/authUser', (req,res)=>{
    res.json({status: true});
})

app.get('/getBalance', (req,res)=>{
    const userId = JSON.parse(req.query.data).userId;
    switch(userId){
        case '322260464':
            res.json({balance: 100});
            break;
        case '1234567':
            res.json({balance: 2000});
            break;
        default:
            res.json(null);
            break;
    }
})