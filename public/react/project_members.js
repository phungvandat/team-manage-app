var list;
var Node = React.createClass({
    render: function () {
        return (<div className="div-node">
            status : {this.props.status}
        </div>
        );
    }
});

var List = React.createClass({
    getInitialState() {
        list = this;
        return { array: [] };
    },
    render: function () {
        return (
            <div className="div-list">
                <div id="div-add"></div>
                {
                    this.state.array.map(function (node, index) {
                        return <Node status={node.status} />
                    })
                }
            </div>
        );
    }
});

var InputDiv = React.createClass({
    create() {
        var data = { "project_members": { "member_id": this.refs.memberID.value } };
        $.ajax({
            url: "http://localhost:3000/projects/" + this.refs.projectID.value+ "/members",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data),
            async: false,
            success: function (response) {
                if (response.error != null) {
                    alert(response.error);
                } else {
                    var item = { "status" : response.status };
                    list.setState({ array: list.state.array.concat(item) });
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                err = JSON.parse(xhr.responseText)
                alert(err.error);
            }
        });
    },
    render: function () {
        return <div>
            <input type="text" ref="projectID" placeholder="Enter projectID" />
            <input type="text" ref="memberID" placeholder="Enter memberID" />
            <button onClick={this.create}>JOIN</button>
        </div>
    }
});

ReactDOM.render(
    <div>
        <InputDiv />
        <List />
    </div>,
    document.getElementById("member-join-project")
);