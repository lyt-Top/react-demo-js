import React from 'react'
import './../styles/Login.scss'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { pass: 'lyt', isError: false }
        this.input = React.createRef()
        this.onSubmitClick = this.onSubmitClick.bind(this)
        this.onSureClick = this.onSureClick.bind(this)
    }

    componentDidMount() {
        window.nProgress(300)
        this.input.current.focus()
        localStorage.removeItem('auth')
        document.addEventListener('keydown', this.onKeydown, false)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown, false)
    }

    onSubmitClick() {
        this.setVerification(this.input.current.value)
    }

    onSureClick() {
        this.setState({ isError: false })
        setTimeout(() => { this.input.current.focus() }, 100);
    }

    onKeydown = e => {
        // this 指向问题
        if (e.keyCode !== 13) return
        this.state.isError ? this.onSureClick() : this.setVerification(e.target.value)
    }

    setVerification(value) {
        if (value !== '' && value === this.state.pass) {
            localStorage.setItem('auth', Math.random().toString(36).substr(2))
            this.setState({ isError: false })
            window.location.href = '/array/length'
        } else {
            this.setState({ isError: true })
        }
    }

    render() {
        const { isError } = this.state
        return (
            <div className="login-watp">
                <div className="login-center-box">
                    <i className="login-icon iconfont icon-danren"></i>
                    <div className="login-user-name">帅比李狗蛋</div>
                    <div className="login-input-warp">
                        {
                            !isError ? (

                                <div className="login-input">
                                    <input className="login-input-left" type="password" placeholder="密码" maxLength="18" ref={this.input} />
                                    <div className="login-input-right" onClick={this.onSubmitClick}>
                                        <i className="iconfont icon-youjiantou2"></i>
                                    </div>

                                </div>
                            ) : (
                                    <div className="login-error">
                                        <div className="login-error-msg">密码不正确，请再试一次！</div>
                                        <div className="login-error-btn" onClick={this.onSureClick}>确定</div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default Login