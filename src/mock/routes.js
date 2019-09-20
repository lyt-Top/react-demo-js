// Array
import ArrayLength from '../view/Array/Array.length'
import ArrayPrototype from '../view/Array/Array.prototype'
import ArrayFrom from '../view/Array/Array.from'
import ArrayIsArray from '../view/Array/Array.isArray'
import ArrayOf from '../view/Array/Array.of'

// Object
import ObjectKeys from '../view/Object/Object.keys'
import ObjectValues from '../view/Object/Object.values'

/**
 * @param {*} callback 路由配置（视图）
 */
export const routeData = callback => { 
    const routerConfig = [
        // 数组
        {
            path: '/',
            component: ArrayLength
        },
        {
            path: '/array/prototype',
            component: ArrayPrototype
        },
        {
            path: '/array/from',
            component: ArrayFrom
        },
        {
            path: '/array/isArray',
            component: ArrayIsArray
        },
        {
            path: '/array/of',
            component: ArrayOf
        },
        
        // 对象
        {
            path: '/object/keys',
            component: ObjectKeys
        },
        {
            path: '/object/values',
            component: ObjectValues
        }
    ]
    callback(routerConfig)
}