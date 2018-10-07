function Get(yourUrl){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
var json_obj = JSON.parse(Get("https://www.reddit.com/.json"));

console.log(json_obj["data"]["children"][0]["data"]["title"]);