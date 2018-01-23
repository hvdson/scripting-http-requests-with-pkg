var request = require("request");
var fs = require("fs");

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on("error", (err) => {
         throw err;
       })
       .on("response", (response) => {
         console.log("Downloading image...",
                     "\nResponse Status Code: ", response.statusCode,
                     "\nResponse Status Message", response.statusMessage,
                     "\nResponse Headers:", response.headers['content-type']);
       })
       .on("end", () => {
         console.log("Download complete.");
       })
       .pipe(fs.createWriteStream("./downloaded.jpeg"))
       .end();
