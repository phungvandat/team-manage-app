var express = require('express');
var router = express.Router();
var projectDecode = require("./decode/project/project");
var projectMembersDecode = require("./decode/project_members/project_members");
var service = require("../service/service").NewService();

//create project
router.post('/', function (req, res, next) {
    //decode body request
    var reqCreate = projectDecode.CreateRequestFunc(req);

    //create endpoint for user
    service.GetProjectService().Create(reqCreate,res);

});

//member join project
router.post('/:project_id/members', function (req, res, next) {
    //decode body request
    var reqCreate = projectMembersDecode.MemberJoinProjectFunc(req);

    //create endpoint for user
    service.GetProjectMembersService().MemberJoinProject(reqCreate,res);

});

//get detail project
router.get('/:project_id', function (req, res, next) {
    //decode body request
    var reqGetDetail = projectDecode.GetDetailFunc(req);

    //create endpoint for user
    service.GetProjectService().GetDetail(reqGetDetail,res);

});

module.exports = router;