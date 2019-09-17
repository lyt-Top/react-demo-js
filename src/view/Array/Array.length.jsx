import React from 'react'

class Home extends React.Component {
    componentDidMount() {
        window.nProgress(100)
    }

    render() {
        return (
            <div className="route-warp">
                <div className="route-warp-msg">Array.length</div>
            </div>
        )
    }
}

export default Home