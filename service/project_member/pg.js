var uuid4 = require('uuid4');
module.exports = {
    //function member join project
    MemberJoinProjectFunc: function (poolPG, projectMember) {
        return new Promise((resolve, reject) => {
            projectMember.SetId(uuid4());
            //check member exist
            var memberExistQuery = "SELECT * FROM members WHERE id = '" + projectMember.memberID + "'";
            poolPG.query(memberExistQuery, (err, res) => {
                if (err) {
                    return reject(err);
                }
            });

            //check project exist
            var projectExistQuery = "SELECT * FROM projects WHERE id = '" + projectMember.projectID + "'";
            poolPG.query(projectExistQuery, (err, res) => {
                if (err) {
                    return reject(err);
                }
            });

            //create a project members
            var createQuery = "INSERT INTO project_members(id, project_id, member_id) VALUES ('" + projectMember.id + "','" + projectMember.projectID + "','" + projectMember.memberID + "')";
            poolPG.query(createQuery, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve("success");
            });
        });
    },
}