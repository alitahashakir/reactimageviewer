import React, {Component} from 'react'

class Gallery extends Component {
    render() {
        const images = this.props.imagesData.map((image, index) => {
            return (
                <li key={index} className="list-inline-item"><img src={image.imageName} /></li>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto my-5">
                        <ul className="list-inline text-center images">
                            {images}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery