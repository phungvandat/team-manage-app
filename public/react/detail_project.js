var list;
var NodeProject = React.createClass({
    render: function () {
        return (<div className="div-node">
            id : {this.props.id} <br />
            name : {this.props.name} <br />
        </div>
        );
    }
});

var NodeMember = React.createClass({
    render: function () {
        return (<div className="div-node-mem">
            id : {this.props.id} <br />
            name : {this.props.name} <br />
            phone : {this.props.phone} <br />
        </div>
        );
    }
});

var List = React.createClass({
    getInitialState() {
        list = this;
        return { detail: [] };
    },
    render: function () {
        return (
            <div className="div-list">
                <div id="div-add"></div>
                {
                    this.state.detail.map(function (node, index) {
                        return <div>
                            <NodeProject id={node.project.id} name={node.project.name} />
                            {
                                node.members.map(function (nodeMem, indexMen) {
                                    return <NodeMember id={nodeMem.id} name={nodeMem.name} phone={nodeMem.phone} />
                                })
                            }
                        </div>
                    })
                }
            </div>
        );
    }
});

var InputDiv = React.createClass({
    create() {
        $.ajax({
            url: "http://localhost:3000/projects/" + this.refs.projectID.value,
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            async: false,
            success: function (response) {
                if (response.error != null) {
                    alert(response.error);
                } else {
                    list.setState({ detail: list.state.detail.concat(response) });
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
            <button onClick={this.create}>GET DETAIL</button>
        </div>
    }
});

ReactDOM.render(
    <div>
        <InputDiv />
        <List />
    </div>,
    document.getElementById("project-detail")
);