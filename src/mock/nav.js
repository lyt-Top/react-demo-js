/**
 * @param {*} callback 路由配置（控制器）
 */
export const navData = callback => {
    const navComfig = [
        {
            title: 'Array', isShow: false, icon: 'icon-yuyin',
            children: [
                {
                    path: '/',
                    label: 'array.length'
                },
                {
                    path: '/array/prototype',
                    label: 'array.prototype'
                },
                {
                    path: '/array/from',
                    label: 'array.from'
                },
                {
                    path: '/array/isArray',
                    label: 'array.isArray'
                },
                {
                    path: '/array/of',
                    label: 'array.of'
                }
            ]
        },
        {
            title: 'Object', isShow: false, icon: 'icon-shoucang',
            children: [
                {
                    path: '/object/keys',
                    label: 'object.keys'
                },
                {
                    path: '/object/values',
                    label: 'object.values'
                }
            ]
        }
    ]
    callback(navComfig)
}