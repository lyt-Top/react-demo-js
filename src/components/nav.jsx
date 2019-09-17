import React from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from '../mock/nav'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { navArr: [], ulHeight: 0 }
        this.ulRef = []
    }

    componentDidMount() {
        navData(navArr => {
            this.setState({ navArr })
        })
        setTimeout(() => {
            this.ulRef[0].style.cssText = `height:${this.state.navArr[0].children.length * 48}px;transition: all 0.3s ease;`
        }, 100)
    }

    onTaggleNavTitle(index) {
        if (!this.state.navArr[index].isShow) {
            this.ulRef[index].style.cssText = `height:${this.state.navArr[index].children.length * 48}px;transition: all 0.3s ease;`
        }
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
                                <ul style={{ height: val.isShow ? this.state.ulHeight : '' }} ref={ulRef => this.ulRef[key] = ulRef}>
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