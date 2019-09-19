import React from 'react'

class Home extends React.Component {
    componentDidMount() {
        window.nProgress(100)
    }

    onOpenReact() {
        window.open('https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/')
    }

    render() {
        return (
            <div className="route-warp">
                <div className="route-warp-msg" onClick={this.onOpenReact}>Array.length</div>
            </div>
        )
    }
}

export default Home