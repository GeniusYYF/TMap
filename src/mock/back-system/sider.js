
let siderDatas = [
    [
        {
            title: "数据访问",
            path: "homepage",
            icon: "ios-navigate",
            children: null
        },
        {
            title: "数据查询",
            path: "reservoir",
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "数据交换",
            path: null,
            icon: "ios-navigate",
            children: [
                {
                    title: "二级菜单",
                    path: null,
                    icon: "ios-navigate",
                    children: [{
                        title: "三级菜单",
                        path: null,
                        icon: "ios-navigate",
                        children: null,
                    },],
                },
            ],
        },
        {
            title: "用户管理",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "服务管理",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "算法管理",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "数据库维护管理",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "目录服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "安全服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "消息服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "视频及报警服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "短信服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
    ],
    [
        {
            title: "GIS服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "全文检索",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "报表工具",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "图标工具",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "模型工具",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "流程控制",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "告警服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "数据分析服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "数据展现服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "移动应用",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "等值线、过程线服务",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
    ],
    [
        {
            title: "服务调用",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "服务装配",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "服务定制",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "服务日志",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "服务注册",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "服务监控",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
        {
            title: "服务定位",
            path: null,
            icon: "ios-navigate",
            children: null,
        },
    ]
]

export const getSiderDatas = response => {
    console.log(response)

    if (response) {
        let i;
        switch (response.body) {
            case "System2":
                i = 0;
                break;
            case "System3":
                i = 1;
                break;
            case "System4":
                i = 2;
                break;
            default:
                i = 0;
        }
        console.log("获取侧边栏数据成功")
        return {
            code: 200,
            data: siderDatas[i],
            msg: "获取侧边栏数据成功"
        }
    }
    else {
        console.log("获取侧边栏数据失败")
        return {
            code: 1101,
            msg: "获取侧边栏数据失败"
        }
    }
}