import React, {Component} from "react";

class FormOne extends Component {


    constructor() {
        super()
        this.state = {
            username: '',
            course: "React",
            reason: ""
        }
 }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCourseChange = (event) => {
        this.setState({
            course: event.target.value
        })
    }

    handleReasonChange = (event) => {
        this.setState({
            reason: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        alert(
            `${this.state.username} ${this.state.course} ${this.state.reason}`
        )
        event.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label>Username : </label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                        />
                    </div>
                    <div>
                    <label>Course : </label>
                    <select value={this.state.course} onChange={this.handleCourseChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div>
                    <label>Reason : </label>
                    <textarea value={this.state.reason} onChange={this.handleReasonChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default FormOne;