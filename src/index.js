import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import Gallery from './components/Gallery'
import './index.css'

class App extends Component {
    state = {
        images: []
    };

    handleSubmit = image => {
        this.setState({images: [...this.state.images, image]})
    }

    render() {
        const {images} = this.state
        return (
            <div>
                <Form handleSubmit = {this.handleSubmit} />
                <Gallery imagesData = {images} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);