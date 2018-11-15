
module.exports = {
    //define object service
    Service: function (memberService, projectService, projectMembersService) {
        this.memberService = memberService;
        this.GetMemberService = function () {
            return this.memberService;
        };

        this.projectService = projectService;
        this.GetProjectService = function(){
            return this.projectService;
        }

        this.projectMembersService = projectMembersService;
        this.GetProjectMembersService = function(){
            return this.projectMembersService;
        }
    },

    //Create new service
    NewService: function () {
        var poolPG = require("../config/database/pg/pg").pool;
        
        var ms = require("../service/member/service");
        var memberSrv = new ms.MemberService(poolPG);

        var ps = require("../service/project/service");
        var projectSrv = new ps.ProjectService(poolPG);

        var pms = require("../service/project_member/service");
        var projectMembersSrv = new pms.ProjectMemberService(poolPG);

        var s = require("../service/service");
        var service = new s.Service(memberSrv,projectSrv, projectMembersSrv);
        return service;
    }
}