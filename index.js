const http = require("http");
var url = require("url");

http
  .createServer(function serverStarted(req, resp) {
    resp.writeHead(200, { "Content-Type": "text/html" });

    var pathname = url.parse(req.url, true).pathname;
    //console.log(path); // /products?search=Bananna
    //console.log(pathname); // /products

    if (pathname == "/profile") {
      resp.write("<h3>This is the /profile page.</h3>");
    } else if (pathname == "/products") {
      resp.write("<h3>This is the /products page.</h3>");

      var qry = url.parse(req.url, true).query;

      if (qry.search !== undefined) {

        // Get the search parameter
        let searchParam = [qry.search];
        let needleText = JSON.stringify(searchParam);
        // http://localhost:8080/products?search=Bananna

        const arrayHaystack = [
          "Milk",
          "Eggs",
          "Cheese",
          "Pork",
          "Shrimp",
          "Chicken",
        ];

        let flag = false;
        function myFunction(item, index) {
          item = '["' + item.toString() + '"]';

          console.log("item = " + item + " | " + typeof item);
          if (item == needleText) {
            flag = true;
            console.log("Found the needle in the haystack.");
          }
        }

        needleTxt = needleText.toString();
        console.log("needleText = " + needleText + " | " + typeof needleText);

        arrayHaystack.forEach(myFunction);

        // let mySearch = arrayContains(needleText);
        console.log("Flag: " + flag);
        if (flag) {
          resp.write(`Product ${needleText} was found.`);
        } else {
          resp.write(`Product ${needleText} was NOT found.`);
        }

        // console.log("mySearch: " + typeof mySearch);
        // console.log("mySearch: " + mySearch);
        console.log("============================");
      }
    } else if (pathname === "/cart") {
      resp.write("<h3>This is the /cart page.</h3>");
    } else if (pathname === "/register") {
      resp.write("<h3>This is the /register page.</h3>");
    } else if (pathname === "/login") {
      resp.write("<h3>This is the /login page.</h3>");
    } else {
      resp.write("I couldn't find that url: " + req.url);
    }
    resp.end();
  })
  .listen(8080); // This is the port the server is listening too
// ----------
// localhost:8080/summer, localhost:8080/winter, and localhost:8080/random_endpoint
