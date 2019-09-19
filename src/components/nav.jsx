import React from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from '../mock/nav'
import PubSub from 'pubsub-js'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { navArr: [], icon: 'icon-youjiantou1 iconfont' }
        this.ulRef = []
    }

    componentDidMount() {
        navData(navArr => { this.setState({ navArr }) })
        setTimeout(() => {
            const { navArr = [] } = this.state
            navArr.forEach((item, index) => {
                item.children.forEach((val, key) => {
                    if (window.location.pathname === val.path) {
                        navArr[index].isShow = true
                        this.ulRef[index].style.cssText = `height:${item.children.length * 48}px;transition: all 0.3s ease;`
                        PubSub.publish('breadcrumb', { title: item.title, label: item.children[key] }) // 发送消息
                    }
                })
            })
            this.setState({ navArr })
        }, 100)
    }

    // 是否只保持一个子菜单的展开 uniqueopened，默认为不开启 `false`
    onTaggleNavTitle(index) {
        const { navArr = [] } = this.state
        const ulMaxHeight = `height:${navArr[index].children.length * 48}px;transition: all 0.3s ease;`
        const ulMinHeight = `height:1px;transition: all 0.3s ease;`
        // 不保持一个子菜单的展开
        if (this.props.uniqueopened === 'false') {
            navArr[index].isShow = !navArr[index].isShow
            navArr[index].isShow ? this.ulRef[index].style.cssText = ulMaxHeight : this.ulRef[index].style.cssText = ulMinHeight
        }
        // 只保持一个子菜单的展开（手风琴效果）
        else {
            navArr.forEach((val, key) => { val.isShow = false; this.ulRef[key].style.cssText = ulMinHeight })
            navArr[index].isShow = true
            this.ulRef[index].style.cssText = ulMaxHeight
        }
        this.setState({ navArr })
    }

    // 右侧顶部 Breadcrumb 面包屑数据
    onNavLinkClick(val, k) {
        PubSub.publish('breadcrumb', { title: val.title, label: val.children[k] }) // 发送消息
    }

    render() {
        const { icon } = this.state
        return (
            <div {...this.props}>
                {
                    this.state.navArr.map((val, key) => {
                        return (
                            <div key={key}>
                                <div className="nav-title" onClick={e => this.onTaggleNavTitle(key)}>
                                    <i className={'iconfont ' + val.icon}></i>
                                    <p>{val.title}</p>
                                    <div className="icon">
                                        <span className={val.isShow ? 'rotate ' + icon : icon}></span>
                                    </div>
                                </div>
                                <ul ref={ulRef => this.ulRef[key] = ulRef}>
                                    {
                                        val.children.map((v, k) => {
                                            return (
                                                <li key={k} onClick={e => this.onNavLinkClick(val, k)}>
                                                    <NavLink to={v.path} exact activeClassName='blue'>{v.label}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Nav