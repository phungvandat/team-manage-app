class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    GetId() {
        return this.id;
    }

    GetName() {
        return this.name;
    }

    SetId(id) {
        this.id = id;
    }

    SetName(name) {
        this.name = name;
    }

}


module.exports = Project;