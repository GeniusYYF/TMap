import request from '@/utils/request.js'  

export const getSiderDatas = (data) => {
    return request({
        url: `/back-system/getSiderDatas`,
        method: 'post',
        data
    })
}