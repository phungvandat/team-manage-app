var pg = require('./pg');
var uuid4 = require('uuid4');
module.exports = {
    //middleware create a project.
    CreateFunc: function (project, response) {
        //check name project valid
        if (project.GetName() == '') {
            response.send({ error: "name project is required"});
            return;
        }

        //data processing at the database
        return pg.CreateFunc(this.poolPG, project)
            .then(result => {
                response.send(result);
            })
            .catch(err => {
                response.send({ error: "create project failed by error " + err.message });
            });;
    },

    //middleware get detail a project
    GetDetailFunc: function (projectID, response) {
        //check projectID valid
        if (!uuid4.valid(projectID)) {
            response.send({ error: "projectID invalid"});
            return;
        }

        //data processing at the database
        return pg.GetDetailFunc(this.poolPG, projectID)
            .then(result => {
                response.send(result);
            })
            .catch(err => {
                response.send({ error: "get detail project failed by error " + err.message });
            });;

    }
}