import React from 'react'

class Home extends React.Component {
    componentDidMount() {
        window.nProgress(100)
    }

    onOpenReact() {
        window.open('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array')
    }

    render() {
        return (
            <div className="route-warp">

            </div>
        )
    }
}

export default Home