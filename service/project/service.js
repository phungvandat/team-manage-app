var mw_vaidation = require('./mw_validation');

module.exports = {
    //define object project service
    ProjectService: function (poolPG) {
        this.poolPG = poolPG;
        this.Create = mw_vaidation.CreateFunc;
        this.GetDetail = mw_vaidation.GetDetailFunc;
    },
}