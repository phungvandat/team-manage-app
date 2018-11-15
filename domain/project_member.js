class ProjectMembers {
    constructor(id, projectID, memberID) {
        this.id = id;
        this.projectID = projectID;
        this.memberID = memberID;
    }

    GetId() {
        return this.id;
    }

    GetProjectID() {
        return this.projectID;
    }

    GetMemberID() {
        return this.memberID;
    }

    SetId(id) {
        this.id = id;
    }

    SetProjectID(projectID) {
        this.projectID = projectID;
    }

    SetMemberID(memberID) {
        this.memberID = memberID;
    }
}

module.exports = ProjectMembers;