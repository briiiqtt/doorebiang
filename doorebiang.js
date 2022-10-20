const express = require("express");
const app = express();

const axios = require('axios');

const accessToken = require('./_access_token.json');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/fetch", (req, res) => {
				axios.get(`https://openapi.band.us/v2/band/posts?access_token=${accessToken.accessToken}`)
								.then(r=>{res.send(r.data)});
});

app.get('/',(req,res)=>{
				res.sendFile(__dirname+'/index.html');
});

app.listen((port = 80), () => {
  console.log(`server started, port: ${port}`);
});

