import React from 'react'

class ObjectValues extends React.Component {
    componentDidMount() {
        window.nProgress(100)
    }

    render() {
        return (
            <div className="route-warp">
                <div className="route-warp-msg">Object.values</div>
            </div>
        )
    }
}

export default ObjectValues