import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: ''
        }

        this.state = this.initialState
    }

    handleChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
              imageName: URL.createObjectURL(event.target.files[0]),
            });
          }
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto my-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" name="imageName" onChange={this.handleChange} className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                        
                        <button className="btn btn-primary w-100" type="button" id="button-addon2" onClick={this.submitForm}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form