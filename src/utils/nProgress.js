import NProgress from 'nprogress'

/**
 * 全局进度条显示
 */
window.nProgress = (time) => { 
    NProgress.start()
    setTimeout(() => { NProgress.done() }, time)
}