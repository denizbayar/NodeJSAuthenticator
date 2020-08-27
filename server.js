const express = require('express');
const app = express();

const projectRouter = require('./routes/projects');
const { users, ROLE } = require('./data');

const { checkUserExist,checkAdmin } = require('./basicAuth');


app.use(express.json());
app.use(setUser);
app.use('/projects', projectRouter);

app.get('/', (req,res)=>{
    res.send('Home Page')
})

app.get('/dashboard', checkUserExist, (req,res)=>{
    res.send('Dashboard Page')
})

app.get('/admin', checkAdmin,  (req,res)=>{
    res.send('Admin Page')
})

function setUser(req, res, next){
    const userId = req.body.userId;
    if(userId){
        req.userId =users.find(user=> user.id===userId);
    }
    next();
}

app.listen(3000);

