var mw_vaidation = require('./mw_validation');

module.exports = {
    //define object project members service
    ProjectMemberService: function (poolPG) {
        this.poolPG = poolPG;
        this.MemberJoinProject = mw_vaidation.MemberJoinProjectFunc;
    },
}