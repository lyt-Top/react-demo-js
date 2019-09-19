import React from 'react';
import { Route } from 'react-router-dom';
import { routeData } from '../mock/routes'
import Bread from './bread'

class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = { routeArr: [] }
    }

    componentDidMount() {
        routeData(routeArr => {
            this.setState({ routeArr })
        })
    }

    render() {
        return (
            <div {...this.props}>
                <Bread className="route-top" />
                <div className="route-content">
                    {
                        this.state.routeArr.map((val, key) => {
                            return (
                                <Route path={val.path} exact component={val.component} key={key}></Route>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Routes