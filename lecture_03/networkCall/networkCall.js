let axios = require("axios");
let fs = require("fs");
let path = require("path")
async function fetchUser(username){
    let url = "https://api.github.com/users/" + username;
    let response = await axios.get(url);
    console.log(response.status);
    if (response.status == 200){
    let usr_img = response.data.avatar_url;
    let img_data = await axios({url: usr_img,method:"get",responseType:"stream"});
    let location = path.resolve(__dirname,"images",username+".png");
    let writer = fs.createWriteStream(location);
    img_data.data.pipe(writer);
    } else if (response.status == 404){
        console.log("Wrong username "+ username);
    } else {
        console.log("something went wrong");
    }
}

fetchUser("rishiagrawal2609");