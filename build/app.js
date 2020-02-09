"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Company_1 = require("./modules/Company");
var app = express();
var company = new Company_1.Company();
company.init();
app.get("/", function (req, res) {
    res.send("Hello World");
});
app.listen(3000, function () {
    console.log("Example app listening on port: 3000");
});
