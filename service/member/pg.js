var uuid4 = require('uuid4');
module.exports = {
    //function create member
    CreateFunc: function (poolPG, member) {
        return new Promise((resolve, reject) => {
            member.SetId(uuid4());
            var textQuery = "INSERT INTO members(id , name, phone) VALUES ('" + member.id + "','" + member.name + "','" + member.phone + "')";
            poolPG.query(textQuery, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(member);
            });
        });
    },
}
