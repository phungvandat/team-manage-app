var list;
var Node = React.createClass({
    render: function () {
        return (<div className="div-node">
            id : {this.props.id} <br />
            name : {this.props.name} <br />
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
                        return <Node key={index} id={node.id} name={node.name}/>
                    })
                }
            </div>
        );
    }
});

var InputDiv = React.createClass({
    create() {
        var data = { "project": { "name": this.refs.name.value } };
        $.ajax({
            url: "http://localhost:3000/projects",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data),
            async: false,
            success: function (response) {
                if (response.error != null) {
                    alert(response.error);
                } else {
                    var item = { "id": response.id, "name": response.name};
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
            <input type="text" ref="name" placeholder="Enter name project" />
            <button onClick={this.create}>CREATE</button>
        </div>
    }
});

ReactDOM.render(
    <div>
        <InputDiv />
        <List />
    </div>,
    document.getElementById("create-project")
);