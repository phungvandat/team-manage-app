var uuid4 = require('uuid4');
module.exports = {
    //function create project
    CreateFunc: function (poolPG, project) {
        return new Promise((resolve, reject) => {
            project.SetId(uuid4());
            textQuery = "INSERT INTO projects(id, name) VALUES ('" + project.id + "','" + project.name + "')";
            poolPG.query(textQuery, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(project);
            });
        });
    },

    //function get detail a project
    GetDetailFunc: function (poolPG, projectID) {
        return new Promise((resolve, reject) => {
            //get information project
            var projectExistQuery = "SELECT id,name FROM projects WHERE id = '" + projectID + "'";
            poolPG.query(projectExistQuery, (errProject, resProject) => {
                if (errProject) {
                    return reject(new Error(err.message));
                } else {
                    //get all members join project
                    var memberQuery = "SELECT members.id, members.name, members.phone FROM members, project_members WHERE project_members.project_id = '" + projectID +
                        "' AND project_members.member_id = members.id";
                    poolPG.query(memberQuery, (errMembers, resMembers) => {
                        if (errMembers) {
                            return reject(new Error("2 " + err.message));
                        }
                        return resolve({project: resProject.rows[0], members : resMembers.rows});
                    });
                }
            });
        });
    },
}