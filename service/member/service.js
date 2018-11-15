var mw_vaidation = require('./mw_validation');

module.exports = {
    //define object member service
    MemberService: function (poolPG) {
        this.poolPG = poolPG;
        this.Create = mw_vaidation.CreateFunc;
    },
}