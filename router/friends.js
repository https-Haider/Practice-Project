const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};



router.get("/",(req,res)=>{

  res.send(JSON.stringify({friends,length:friends.length}));
});


router.get("/:email",(req,res)=>{
  const email=req.params.email;

  res.json({user:friends[email]});
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  const email=req.body.email;
  const obj=req.body.obj;
  
  friends[email]=obj;
  res.send(JSON.stringify({friends,length:friends.length}))
});



router.put("/:email", (req, res) => {
  const email=req.params.email;
  const obj=req.body.obj;
  
  if (friends.hasOwnProperty(email)) {
    
    friends[email].firstName = obj.firstName;
    friends[email].lastName = obj.lastName;
    friends[email].DOB =obj.DOB;

    return res.send(`Friend with the email ${email} updated.`);

}
  res.send('Error!!!')
});



router.delete("/:email", (req, res) => {
  
  if (friends.hasOwnProperty(email)) {
    
    delete friends[email];
}
res.send(`Friend with the email ${email} deleted.`);
});

module.exports=router;
