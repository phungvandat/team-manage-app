var list;
var Node = React.createClass({
    render: function () {
        return (<div className="div-node">
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
        return { array: [] };
    },
    render: function () {
        return (
            <div className="div-list">
                <div id="div-add"></div>
                {
                    this.state.array.map(function (node, index) {
                        return <Node key={index} id={node.id} name={node.name} phone={node.phone} />
                    })
                }
            </div>
        );
    }
});

var InputDiv = React.createClass({
    create() {
        var data = { "member": { "name": this.refs.name.value, "phone": this.refs.phone.value } };
        $.ajax({
            url: "http://localhost:3000/members",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data),
            async: false,
            success: function (response) {
                if (response.error != null) {
                    alert(response.error);
                } else {
                    var item = { "id": response.id, "name": response.name, "phone": response.phone };
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
            <input type="text" ref="name" placeholder="Enter your name" />
            <input type="text" ref="phone" placeholder="Enter your phone" />
            <button onClick={this.create}>CREATE</button>
        </div>
    }
});

ReactDOM.render(
    <div>
        <InputDiv />
        <List />
    </div>,
    document.getElementById("create-member")
);