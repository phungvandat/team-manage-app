const ProjectMembers = require("../../../domain/project_member");

module.exports = {
    //decode body request member join group
    MemberJoinProjectFunc: function (req) {
        var reqCreate = new ProjectMembers(req.body.project_members.id || '', req.params.project_id || '', req.body.project_members.member_id || '');
        return reqCreate;
    },
}