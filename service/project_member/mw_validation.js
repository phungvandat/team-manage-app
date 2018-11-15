var pg = require('./pg');
var uuid4 = require('uuid4');

module.exports = {
    //middleware member join project
    MemberJoinProjectFunc: function (projectMember,response) {
        //check vavid projectID
        if (!uuid4.valid(projectMember.projectID)) {
            response.send({ error: "projectID invalid"});
            return;
        }

        //check valid memberID
        if (!uuid4.valid(projectMember.memberID)) {
            response.send({ error: "memberID invalid"});
            return;
        }
        //data processing at the database
        return pg.MemberJoinProjectFunc(this.poolPG, projectMember)
            .then(result => {
                response.send({ status: result });
            })
            .catch(err => {
                response.send({ error: "member join project failed by error " + err.message });
            });;
    },
}