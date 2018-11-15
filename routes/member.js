var express = require('express');
var router = express.Router();
var memberDecode = require("./decode/member/member");
var service = require("../service/service").NewService();

//create member
router.post('/', function (req, res, next) {
    //decode body request
    var reqCreate = memberDecode.CreateRequestFunc(req);

    //create endpoint for user
    service.GetMemberService().Create(reqCreate, res);

});

module.exports = router;