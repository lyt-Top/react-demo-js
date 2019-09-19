import React from 'react'

class ArrayOf extends React.Component {
    componentDidMount() {
        window.nProgress(100)
    }

    render() {
        return (
            <div className="route-warp">
                <div className="route-warp-msg">Array.prototype</div>
            </div>
        )
    }
}

export default ArrayOf