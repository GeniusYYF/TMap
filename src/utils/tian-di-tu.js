export default {
    install: function () {
        return new Promise((resolve, reject) => {
            console.log(resolve,reject)
            // 插入script脚本
            const scriptNode = document.createElement('script')
            scriptNode.setAttribute('type', 'text/javascript')
            scriptNode.setAttribute('src', "http://api.tianditu.gov.cn/api?v=4.0&tk=8233ed8b6593ee2f7613722f980f9135")
            document.body.appendChild(scriptNode)

            // window.onload = function () {
            //     console.log('地图脚本初始化成功...')
            //     // eslint-disable-next-line
            //     resolve(window.T)
            // }
        })
    }
}