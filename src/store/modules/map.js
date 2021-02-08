const state = {
    // map
    T: null,
    map: null,
    lineTool: null, // 线标注工具
    polygonTool: null, // 面标注工具
    zoom: 12,
    centerPoint: [117.3, 34.18], // 默认徐州
    centerPointStr: "117.3, 34.18",

    // marks
    icons: [{ name: "", size: [0, 0], url: "", click: false, }],
    markRandomRange: { X: [0, 0], Y: [0, 0] },
    randomX: 0,
    randomY: 0,

    // controls
    control: {
        Zoom: null, // 地图缩放控件，可以缩放和移动地图
        Scale: null, // 地图比例尺控件，用来实时的显示地图的当前比例尺。
        Copyright: null, // 此类表示版权控件，您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围
        OverviewMap: null, // 鹰眼地图控件，用来显示一个鹰眼地图, 继承自Control基类，拥有基类的所有方法。
        MapType: null, // 此类是负责切换地图类型的控件，此类继承TControl。
        militarySymbols: null, // 在地图上加载一个标绘控件，该控件包含所有标绘图形的绘制类库。
        selfControls: [], // 自定义控件
    },

    // menu
    menuWidth: 150,
    menu: null,
    menuItem: null,
    menuItems: [{ name: "", cb: () => { } }],
    emptyMenu: false,

    // 自定义事件中的数据
    cX: 117.3,
    cY: 34.18,
    clickMark: null,
    drawLine: 0,
    drawArea: 0,
    startClickMark:false, // 开启单击标注
};

const getters = {
    getSelectBox(state) {
        return state.selectBox
    }
};

const mutations = {

    GetRandomNum(state, { X, Y }) {
        let RangeX = X.max - X.min, RangeY = Y.max - Y.min;
        let RandX = Math.random(), RandY = Math.random();
        state.randomX = X.min + RangeX * RandX;
        state.randomY = Y.min + RangeY * RandY;
    },
    goTo(state, { X = 0, Y = 0, zoom = state.zoom }) {
        state.map.panTo(new state.T.LngLat(X, Y), zoom)
        state.centerPoint[0] = X
        state.centerPoint[1] = Y
        state.zoom = zoom
        state.centerPointStr = JSON.stringify(state.centerPoint)
    },
    updateMap(state) {
        console.log(state.zoom)
        state.map.panTo(new state.T.LngLat(state.centerPoint[0], state.centerPoint[1]), state.zoom)
    }

};

const actions = {
    /**
     * @name initMap
     * @description use map before init
     * @param opt include:*id,centerPoint,zoom
     * @property id:"" - request 
     * @property centerPoint:[] 
     * @property zoom:0
     * @property showDefaultCR:fasle
     * @example { id:"map",centerPoint:[0,0],zoom:12,hideDefaultCR:fasle}
     */
    initMap({ state }, opt) {
        let T = window.T

        if (!T) {
            console.error("请先引入天地图，参考http://lbs.tianditu.gov.cn/api/js4.0/guide.html")
            return false
        }
        else if (!opt.id) {
            console.error("请指定地图id容器，需要参数：{map:'id'}")
            return false
        }
        state.T = T
        //设置显示地图的中心点和级别 经度减少，地图向左；纬度减少，地图向下
        state.map = new T.Map(opt.id);
        state.centerPoint = opt.centerPoint || state.centerPoint
        state.centerPointStr = JSON.stringify(state.centerPoint)
        state.zoom = opt.zoom || state.zoom
        state.map.centerAndZoom(new T.LngLat(state.centerPoint[0], state.centerPoint[1]), state.zoom);
        state.map.disableDoubleClickZoom()
        // 隐藏默认版权
        opt.showDefaultCR ? "" : document.getElementsByClassName("tdt-control-copyright")[0].style.display = "none"

        //创建线标注工具对象
        state.lineTool = new T.PolylineTool(state.map, { showLabel: true });
        state.lineTool.close()
        //创建面标注工具对象
        state.polygonTool = new T.PolygonTool(state.map, { showLabel: true, color: "blue", weight: 3, opacity: 0.5, fillColor: "#FFFFFF", fillOpacity: 0.5 });
        state.polygonTool.close()
    },
    /**
     * @name tLoadMarks
     * @description load marks in map
     * @param opt include *icons,markRandomRange,text,cb
     * @property icons:[{}] - request
     * @property markRandomRange:{X:[],Y:[]} 
     * @property text:html string
     * @property cb:function(icon)
     * @example {icons:[{ *name: "", size: [0, 0], *url: "", noClick: true, }],markRandomRange:{X:[],Y:[]} ,el:obj,cb:function}
     */
    tLoadMarks({ state, commit }, { icons, markRandomRange, text, cb }) {
        let T = state.T
        state.icons = icons || state.icons
        // 获取地图可视范围
        let bounds = state.map.getBounds();
        let sw = bounds.getSouthWest();
        let ne = bounds.getNorthEast();
        markRandomRange = markRandomRange || { X: [sw.lng, ne.lng], Y: [sw.lat, ne.lat] }
        state.markRandomRange = markRandomRange
        // 循环出所有覆盖物并添加mark模态框
        for (let item of icons) {
            let size = item.size || state.size
            //创建图片对象
            let icon = new T.Icon({
                iconUrl: item.url, //item.url[0] == "@" ? require(item.url) : item.url
                iconSize: new T.Point(size[0], size[1]),
            });
            // 随机范围 randomX
            commit("GetRandomNum", { X: { min: markRandomRange.X[0], max: markRandomRange.X[1] }, Y: { min: markRandomRange.Y[0], max: markRandomRange.Y[1] } })
            let marker = new T.Marker(new T.LngLat(state.randomX, state.randomY), { icon: icon });
            // 添加点击事件
            if (!item.noClick) {
                marker.addEventListener("click", () => {
                    let res = item.el || item.text || text || ""
                    marker.openInfoWindow(new T.InfoWindow(res));

                    item.cb ? item.cb(item) :
                        cb ? cb(item) : ""

                });
            }
            // 添加图层
            state.map.addOverLay(marker);
        }
    },
    /**   
    * @name tLoadControl
    * @description load controls in map
    * @property Zoom: null, // 地图缩放控件，可以缩放和移动地图
    * @property Scale: null, // 地图比例尺控件，用来实时的显示地图的当前比例尺。
    * @property Copyright: null, // 此类表示版权控件，您可以在地图上添加自己的版权信息。每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围
    * @property OverviewMap: null, // 鹰眼地图控件，用来显示一个鹰眼地图, 继承自Control基类，拥有基类的所有方法。
    * @property MapType: null, // 此类是负责切换地图类型的控件，此类继承TControl。
    * @augments position
    * T_ANCHOR_TOP_LEFT	    控件将定位到地图的左上角。
    * T_ANCHOR_TOP_RIGHT	控件将定位到地图的右上角。
    * T_ANCHOR_BOTTOM_LEFT	控件将定位到地图的左下角。
    * T_ANCHOR_BOTTOM_RIGHT	控件将定位到地图的右下角。
    */
    tLoadControl({ state }, { Zoom, Scale, Copyright, OverviewMap, MapType, militarySymbols, selfControls = [] }) {
        // 不可缺
        // eslint-disable-next-line 
        let control = state.T.Control, positionMap = ["", T_ANCHOR_TOP_LEFT, T_ANCHOR_TOP_RIGHT, T_ANCHOR_BOTTOM_LEFT, T_ANCHOR_BOTTOM_RIGHT]
        // 创建控件
        Zoom ? state.control.Zoom = new control.Zoom({ position: positionMap[Zoom.position || 0] }) : "";
        Scale ? state.control.Scale = new control.Scale({ position: positionMap[Scale.position || 0] }) : "";
        Copyright ? state.control.Copyright = new control.Copyright({ position: positionMap[Copyright.position || 0] }) : "";
        OverviewMap ? state.control.OverviewMap = new control.OverviewMap({
            position: positionMap[OverviewMap.position || 0],
            isOpen: true,
            size: new state.T.Point(300, 300),
        }) : "";
        MapType ? state.control.MapType = new control.MapType({ position: positionMap[MapType.position || 0] }) : "";
        militarySymbols ? state.control.militarySymbols = new control.militarySymbols({ position: positionMap[militarySymbols.position || 0] }) : "";

        for (let item of selfControls) {
            let c = new state.T.Control({ position: positionMap[item.position || 0] })
            c.onAdd = map => {
                console.log(map)
                return item.el
            }
            state.control.selfControls.push(c)
        }

        // 依次添加控件
        for (let key in state.control) {
            if (state.control[key]) {
                // 添加自定义控件
                if (key === "selfControls") {
                    for (let i in state.control[key])
                        state.map.addControl(state.control[key][i])
                }
                else {
                    state.map.addControl(state.control[key]);
                }
            }
        }
        // 处理特殊控件
        state.control.Copyright.addCopyright({
            id: 1,
            content: Copyright.text || "",
            bounds: state.map.getBounds() //返回地图可视区域
        });



    },
    /**   
   * @name tLoadMenu
   * @description load menu in map
   * @property menuItems: [{name:"",cb:()=>{}}], 
   * @property menuWidth:150
   */
    tLoadMenu({ state }, { menuItems, menuWidth, emptyMenu }) {
        let T = state.T
        state.menuItems = menuItems || state.menuItems
        state.menuWidth = menuWidth || state.menuWidth
        state.emptyMenu = emptyMenu || state.emptyMenu
        state.menu = new T.ContextMenu({ width: state.menuWidth });

        // 添加默认菜单项
        if (!state.emptyMenu) {
            let map = state.map
            let list = [
                { name: "+1", cb: () => { map.zoomIn() } },
                { name: "-1", cb: () => { map.zoomOut() } },
                { name: null, cb: () => { } }, // 分割线

                { name: "放置到最大级", cb: () => { map.setZoom(18) } },
                { name: "查看全国", cb: () => { map.setZoom(4) } },
                { name: null, cb: () => { } },

                {
                    name: "获得此处坐标", cb: lnglat => { alert(lnglat.getLng() + "," + lnglat.getLat()); }
                },
                { name: null, cb: () => { } },

                {
                    name: "开始画线", cb: () => { state.lineTool.open(); state.polygonTool.close(); }
                },
                {
                    name: "开始画面", cb: () => { state.polygonTool.open(); state.lineTool.close(); }
                },
                { name: null, cb: () => { } },
            ]
            menuItems = list.concat(menuItems)
        }

        // setText(text:String) enable() disable()
        for (let item of menuItems) {
            if (item.name) {
                state.menuItem = new T.MenuItem(item.name, item.cb || (() => { }));
                state.menu.addItem(state.menuItem);
            }
            else
                state.menu.addSeparator();//添加分割线
        }
        state.map.addContextMenu(state.menu);
    },

    tSelfEvent({ state }) {
        state.map.addEventListener("click", e => {
            state.cX = e.lnglat.lng
            state.cY = e.lnglat.lat
            if (state.startClickMark) {
                //向地图上添加标注
                state.clickMark ? state.map.removeOverLay(state.clickMark) : ""
                state.clickMark = new state.T.Marker(new state.T.LngLat(e.lnglat.lng, e.lnglat.lat))
                state.map.addOverLay(state.clickMark);
            }
        })
        state.map.addEventListener("zoomend", e => {
            state.centerPoint = [e.target.getCenter().lng, e.target.getCenter().lat]
            state.centerPointStr = JSON.stringify(state.centerPoint)
            state.zoom = e.target.getZoom()
        })
        state.map.addEventListener("dragend", e => {
            state.centerPoint = [e.target.getCenter().lng, e.target.getCenter().lat]
            state.centerPointStr = JSON.stringify(state.centerPoint)
        })
    }
};

// 注意和仓库的区别
const store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
export default store;
