const main_func = require('./main')
var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library
var cors = require("cors");
var querystring = require("querystring");
var cookieParser = require("cookie-parser");
const { append } = require('express/lib/response');
 
userAcessToken = localStorage.getItem("accessToken");

