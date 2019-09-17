import React from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from '../mock/nav'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { navArr: [] }
        this.ulRef = []
    }

    componentDidMount() {
        navData(navArr => {
            this.setState({ navArr })
        })

        setTimeout(() => {
            const { navArr = [] } = this.state
            navArr.forEach((item, index) => {
                item.children.forEach((val) => {
                    if (window.location.pathname === val.path) {
                        this.ulRef[index].style.cssText = `height:${item.children.length * 48}px;transition: all 0.3s ease;`
                    }
                })
            })
        }, 100)
    }

    onTaggleNavTitle(index) {
        const { navArr = [] } = this.state
        navArr.forEach((val, key) => { val.isShow = false; this.ulRef[key].style.cssText = `height:1px;transition: all 0.3s ease;` })
        navArr[index].isShow = true
        this.ulRef[index].style.cssText = `height:${this.state.navArr[index].children.length * 48}px;transition: all 0.3s ease;`
        this.setState({ navArr })
    }

    render() {
        return (
            <div {...this.props}>
                {
                    this.state.navArr.map((val, key) => {
                        return (
                            <div key={key}>
                                <div className="nav-title" onClick={e => this.onTaggleNavTitle(key)}>
                                    <i>i</i>
                                    <p>{val.title}</p>
                                    <i>c</i>
                                </div>
                                <ul ref={ulRef => this.ulRef[key] = ulRef}>
                                    {
                                        val.children.map((v, k) => {
                                            return (
                                                <li key={k}>
                                                    <NavLink to={v.path} exact activeClassName='blue'> {v.label}</NavLink>
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