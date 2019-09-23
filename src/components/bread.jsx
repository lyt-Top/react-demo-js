import React from 'react'
import PubSub from 'pubsub-js'

export default class Bread extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                Photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1311477199,1567457200&fm=26&gp=0.jpg',
                name: '帅比李狗蛋'
            },
            bread: {
                title: '',
                label: {}
            },
            userNav: [
                { label: 'vue', path: 'https://cn.vuejs.org/', target: '_blank' },
                { label: 'react', path: 'https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/', target: '_blank' },
                { label: 'angular', path: 'https://angular.cn/', target: '_blank' },
                { label: 'node', path: 'http://nodejs.cn/', target: '_blank' },
                { label: 'logout', path: '/login', target: '_self' }
            ]
        }
    }

    componentDidMount() {
        // 订阅消息
        PubSub.subscribe('breadcrumb', (msg, bread) => {
            this.setState({ bread })
        })
    }

    render() {
        const { userInfo, bread, userNav } = this.state
        return (
            <div {...this.props}>
                <div className="bread-left">{bread.title}<span>/</span>{bread.label.label}</div>
                <div className="bread-right">
                    <img src={userInfo.Photo} alt="" />
                    <div className="bread-name">{userInfo.name}</div>
                    <i className="icon-youjiantou1 iconfont"></i>
                    <div className="user-dropdown">
                        <ul>
                            {
                                userNav.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.path} target={item.target}>{item.label}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}