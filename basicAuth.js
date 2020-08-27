const {users, ROLE} = require('./data')

function checkUserExist(req,res,next){
    const userId =parseInt(req.body.userId);
    req.userId= users.find(user=> user.id=== userId);
    if(req.userId){
      return next();
    }
    res.status(404);
    return res.send("Only members can see this page");
}

function checkAdmin(req,res,next){
  const userId = parseInt(req.body.userId);
  const isAdmin = users.find(user=>user.id===userId && user.role===ROLE.ADMIN);
  if(isAdmin){
      return next();
  }
  res.status(403);
  return res.send('Only admin can display this page.');
}


module.exports= {checkUserExist , checkAdmin};