const Project = require("../../../domain/project");

module.exports = {
    //decode body request create project
    CreateRequestFunc: function (req) {
        var reqCreate = new Project(req.body.project.id || '', req.body.project.name || '');
        return reqCreate;
    },

    //decode body request  get detail project
    GetDetailFunc: function(req){
        var reqGetDetail = req.params.project_id || '';
        return reqGetDetail;
    }
}