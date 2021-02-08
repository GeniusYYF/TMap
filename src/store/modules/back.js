const state = {
    /**
     * header
     * */
    activeHeaderName: "System1",
    /**
     * sider
     * */
    siderDatas: [],
    /**
    * system2
    * */
    openMenus: [],//menu-cards打开项
    defaultOpenMenuItem: { title: "数据访问", icon: "ios-navigate", name: "1", path: "/back-system/system2/homepage" },//默认打开的菜单项
    activeName: "0", // 1,1-1,2-1,2-1-1形式
    openNames: [], // 侧边栏菜单打开项
    noCloseNames: ["1"], // 不含x的选项卡name,默认第一项不可关闭

};

const getters = {
    /**
        * header
        * */
    getActiveHeaderName(state) {
        return state.activeHeaderName
    },
    /**
     * sider
     * */
    getSiderDatas(state) {
        return state.siderDatas
    },
    /**
        * system2
        * */
    getOpenMenus(state) {
        return state.openMenus
    },
    getActiveName(state) {
        return state.activeName
    },
    getOpenNames(state) {
        return state.openNames
    },
    getNoCloseNames(state) {
        return state.noCloseNames
    },
};

const mutations = {
    /**
    * header
    * */
    // 激活当前导航
    setActiveHeaderName(state, name) {
        state.activeHeaderName = name ? name : state.activeHeaderName
    },
    /**
    * sider
    * */
    setSiderDatas(state, data) {
        state.siderDatas = data
        state.openMenus = data.length > 0 ? [data[0]] : []
        state.activeName = "1"
    },
    initSiderDatas(state, data) {
        state.siderDatas = data
    },
    /**
     * system2
     * */
    // 添加menu-cards菜单项
    addOpenMenus(state, obj) {
        state.openMenus.push(obj)
    },
    // 关闭menu-cards菜单项
    delOpenMenus(state, i) {
        state.openMenus.splice(i, 1)
    },
    // 激活当前菜单项（由于侧边栏原因使用name激活）
    setActiveName(state, name) {
        state.activeName = name
    },
    // 依据activeName遍历出应展开的所有names
    updateOpenNames(state, n = true) {
        if (n) {  // openNames 为打开的所有submenu，如 ["1","1-1"]
            let name = state.activeName, i = name.lastIndexOf("-")
            if (i === -1) {
                state.openNames = [name]
            }
            else {
                let temp = []
                while (i !== -1) {
                    name = name.slice(0, i)
                    temp.push(name)
                    i = name.lastIndexOf("-")
                }
                state.openNames = temp
            }
        }
        else {
            // 关闭全部
            state.openNames = []
        }
    }
};

const actions = {
    /**
    * system2
    * */
    // 添加选项卡菜单项
    addOpenMenusAction(context, obj) {
        console.log(obj)
        if (obj && obj.title) {
            if (context.state.openMenus.filter(menu => menu.title === obj.title).length > 0) {
                console.log("已打开菜单：", obj.title)
            }
            else {
                console.log("添加菜单：", obj)
                context.commit('addOpenMenus', obj)
            }
            context.dispatch('unifyMenu', obj.name)
        }
    },
    addDefaultOpenMenusAction({ state, dispatch }) {
        dispatch("addOpenMenusAction", state.defaultOpenMenuItem)
    },
    delOpenMenusAction({ state, commit, dispatch }, { i, cb }) {
        if (state.openMenus[i].name === state.activeName) {
            if (i === 0) {
                if (state.openMenus.length === 1) {
                    // 若关闭第一项，并且菜单项只剩一个时则取消所有激活
                    dispatch("unifyMenu", null)
                    cb()
                }
                else {
                    dispatch("unifyMenu", state.openMenus[i + 1].name)
                    cb(state.openMenus[i + 1])
                }
            }
            else {
                // 若关闭当前激活标签，则更新此标签的前一个标签的路由；否则无需更新路由;cb为更新路由的回调
                dispatch("unifyMenu", state.openMenus[i - 1].name)
                cb(state.openMenus[i - 1])
            }
        }
        // 关闭非激活页面则直接删除菜单项即可
        commit("delOpenMenus", i)

    },
    // 同步路由、侧边栏、选项卡激活状态
    unifyMenu(context, name) {
        context.commit('setActiveName', name)
        context.commit('updateOpenNames', name)
    },
    // 确保路由、侧边栏、选项卡激活状态一致
    unifyRefreshMenu({ dispatch }, obj) {
        // 添加默认首页
        dispatch("addDefaultOpenMenusAction")
        if (obj) {
            dispatch("addOpenMenusAction", obj)
        }
    },
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
