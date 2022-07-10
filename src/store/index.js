import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {}

const mutations = {}

const state = {
    user:[
        {
            account: "马雯轩",   // 用户名
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",   // 用户选择的图标
                    password: "我"    // 该图标对应的密文输入
                }
            ]
        },
        {
            account: "赵靓田",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "bee"
                }
            ]
        },
        {
            account: "songyunli",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "12345"
                }
            ]
        },
        {
            account: "xuepeiyuan",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "0409"
                },
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "0409"
                }
            ]
        },
        {
            account: "xianzhu",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "xianzhu"
                },
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "xianzhu"
                }
            ]
        },
        {
            account: "马胖虎",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "mawenxuan"
                },
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "hanbao"
                }
            ]
        },
        {
            account: "chuya",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "jsdhwdxyu2027"
                },
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "shlwkxgj8963"
                }
            ]
        },
        {
            account: "mwx",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "sj"
                },
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "111"
                }
            ]
        },
        {
            account: "yushu",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "yushu"
                }
            ]
        },
        {
            account: "lincailong",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "lclays"
                }
            ]
        },
        {
            account: "liuzhen",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "789"
                }
            ]
        },
        {
            account: "lhy",
            binding:[
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "w"
                },
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "ya"
                },
                {
                    img: "6bf86bd744c3a3584f7c80762ba4e9d7",
                    password: "j"
                }
            ]
        }
    ]
}
const getters = {}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})