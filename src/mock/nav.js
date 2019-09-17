/**
 * @param {*} callback 路由配置（控制器）
 */
export const navData = callback => {
    callback([
        {
            title: 'Array', isShow: false, children: [
                { path: '/', label: 'array.length' },
                { path: '/array/of', label: 'array.of' }
            ]
        },
        {
            title: 'Object', isShow: false, children: [
                { path: '/object/keys', label: 'object.keys' },
                { path: '/object/values', label: 'object.values' }
            ]
        }
    ])
}