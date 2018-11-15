class Member {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }

    GetId() {
        return this.id;
    }

    GetName() {
        return this.name;
    }

    GetPhone() {
        return this.phone;
    }

    SetId(id) {
        this.id = id;
    }

    SetName(name) {
        this.name = name;
    }

    SetPhone(phone) {
        this.phone = phone;
    }
}

module.exports = Member;