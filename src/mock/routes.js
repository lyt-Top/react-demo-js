// Array
import ArrayLength from '../view/Array/Array.length'
import ArrayOf from '../view/Array/Array.of'

// Object
import ObjectKeys from '../view/Object/Object.keys'
import ObjectValues from '../view/Object/Object.values'

/**
 * @param {*} callback 路由配置（视图）
 */
export const routeData = callback => { 
    callback([
        { path: '/', component: ArrayLength },
        { path: '/array/of', component: ArrayOf },
        { path: '/object/keys', component: ObjectKeys },
        { path: '/object/values', component: ObjectValues }
    ])
}