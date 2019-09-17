import React from 'react'

class ObjectKeys extends React.Component {
    componentDidMount() {
        window.nProgress(100)
    }

    render() {
        return (
            <div className="route-warp">
                <div className="route-warp-msg">Object.Keys</div>
            </div>
        )
    }
}

export default ObjectKeys