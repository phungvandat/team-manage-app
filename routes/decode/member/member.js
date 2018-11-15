const Member = require("../../../domain/member");

module.exports = {
    //decode body request create member
    CreateRequestFunc: function (req) {
        var reqCreate = new Member(req.body.member.id || '', req.body.member.name || '', req.body.member.phone || '');
        return reqCreate;
    },
}