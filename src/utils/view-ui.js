import {
    Button, Icon, Form, FormItem, Input, Message, Menu, MenuItem, Submenu, MenuGroup, Badge, Layout, Sider, Breadcrumb, BreadcrumbItem, Content, Row, Col, Carousel, CarouselItem, Card, Tabs, TabPane, Avatar, List, Circle, Select, Option, DatePicker, Table, Page, RadioGroup, Radio, Modal, Alert, Spin, InputNumber
} from "view-design";

// 按需引入
const initViewComs = function (Vue) {
    Vue.component('Button', Button)
    Vue.component('Icon', Icon)
    Vue.component('Form', Form)
    Vue.component('FormItem', FormItem)
    Vue.component('Input', Input)
    Vue.component('Message', Message)
    Vue.component('Menu', Menu)
    Vue.component('MenuItem', MenuItem)
    Vue.component('Submenu', Submenu)
    Vue.component('MenuGroup', MenuGroup)
    Vue.component('Badge', Badge)
    Vue.component('Layout', Layout)
    Vue.component('Sider', Sider)
    Vue.component('Breadcrumb', Breadcrumb)
    Vue.component('BreadcrumbItem', BreadcrumbItem)
    Vue.component('Content', Content)
    Vue.component('Row', Row)
    Vue.component('Col', Col)
    Vue.component('Carousel', Carousel)
    Vue.component('CarouselItem', CarouselItem)
    Vue.component('Card', Card)
    Vue.component('Tabs', Tabs)
    Vue.component('TabPane', TabPane)
    Vue.component('Avatar', Avatar)
    Vue.component('Select', Select)
    Vue.component('Option', Option)
    Vue.component('DatePicker', DatePicker)
    Vue.component('Table', Table)
    Vue.component('Page', Page)
    // 特殊组件的引入
    Vue.component('List', List)
    Vue.component('ListItem', List.Item)
    Vue.component('ListItemMeta', List.Item.Meta)
    Vue.component('i-circle', Circle)
    Vue.component('RadioGroup', RadioGroup)
    Vue.component('Radio', Radio)
    Vue.component('Modal', Modal)
    Vue.component('Alert', Alert)
    Vue.component('Spin', Spin)
    Vue.component('InputNumber', InputNumber)
    // 需要挂在属性的组件
    Vue.prototype.$Message = Message
}

export default {
    install(Vue) {
        initViewComs(Vue)
    }
}