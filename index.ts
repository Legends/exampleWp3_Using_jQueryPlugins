

var oldjQuery: any = require("imports-loader?$=../../libs/jQuery.1.4.2.js!myjqPlugin"); // v1.4.2

oldjQuery("body").append("<h1 id='h1' style='width:380px;margin:50px auto'></h1>");
oldjQuery("#h1").html("jQuery-Version: " + oldjQuery.fn.jquery + ": I should be greeeeeeen!");
oldjQuery("*").greenify();


import * as $ from "jquery"; // v3.x

$("body").append("<h1 id='h2' style='color:red;width:380px;margin:100px auto'></h1>");
$("#h2").html("jQuery-Version: " + $.fn.jquery + ": I should be red!");

