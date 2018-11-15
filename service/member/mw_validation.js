var pg = require('./pg');

module.exports = {
    //middleware create member
    CreateFunc: function (member, response) {
        //check name member valid
        if (member.GetName() == '') {
            response.send({ error: "name member is required"});
            return;
        }

        //check phone member valid
        if (member.GetPhone() == '') {
            response.send({ error: "phone member is required"});
            return;
        }

        //data processing at the database
        return pg.CreateFunc(this.poolPG, member)
            .then(result => {
                response.send(result);
            })
            .catch(err => {
                response.send({ error: "create member failed by error " + err.message });
            });
    },
}