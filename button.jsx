
class Button extends React.Component {
    render() {
        return (
            <div> 
                <button onClick={this.props.function }>{this.props.btnTtext}
                </button>
            </div>
        )
    }
}