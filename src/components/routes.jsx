import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { routeData } from '../mock/routes'
import Bread from './bread'

class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = { routeArr: [], visible: false }
    }

    componentDidMount() {
        routeData(routeArr => {
            this.setState({ routeArr, visible: window.location.pathname === '/login' ? true : false })
        })
        if (window.location.pathname === '/' && localStorage.getItem('auth')) {
            this.props.history.push('/array/length')
        } else if (window.location.pathname !== '/login' && !localStorage.getItem('auth')) {
            window.location.href = '/login'
        }
    }

    render() {
        return (
            <div className="app-warp-right">
                {
                    !this.state.visible ? <Bread className="route-top" /> : null
                }
                <div className="route-content">
                    {
                        this.state.routeArr.map((val, key) => {
                            return (
                                <Route path={val.path} exact key={key} component={val.component}></Route>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Routes)