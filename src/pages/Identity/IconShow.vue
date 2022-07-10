<template>
  <div id="iconShow">
    <!--    保存密码按钮-->
    <button class="identityButton" @click="finish">完成认证</button>

    <!--    渲染不同分类图片-->
    <div class='wrap'>
      <div class='ribbon'>
        <span>动物</span>
      </div>
      <div v-for="item in animalImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>食品</span>
      </div>
      <div v-for="item in foodImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>水果</span>
      </div>
      <div v-for="item in fruitImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>几何</span>
      </div>
      <div v-for="item in geometryImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>蔬菜</span>
      </div>
      <div v-for="item in vegetableImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>婴幼</span>
      </div>
      <div v-for="item in babyImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>家具</span>
      </div>
      <div v-for="item in furnitureImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>人物</span>
      </div>
      <div v-for="item in peopleImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>盆栽</span>
      </div>
      <div v-for="item in plantImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

    <div class='wrap'>
      <div class='ribbon'>
        <span>天气</span>
      </div>
      <div v-for="item in weatherImgList" :key="item.id" class="iconBox">
        <img :src="item.src" alt="" class="iconImg" @click="bindPassword">
      </div>
    </div>

  </div>
</template>

<script>
import SparkMD5 from 'spark-md5'
import {mapState} from "vuex";

export default {
  name: "IconShow",
  components: {},
  data() {
    return {
      account: '',  //用户名
      binding: [],   //保存用户图标密文绑定关系
      local:[],
      // 图标展示
      animalImgList: [],
      foodImgList: [],
      fruitImgList: [],
      geometryImgList: [],
      vegetableImgList: [],
      babyImgList:[],
      furnitureImgList:[],
      peopleImgList:[],
      plantImgList:[],
      weatherImgList:[],
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    //绑定图标输入密码
    bindPassword(img) {
      this.$prompt('请输入隐藏于该图案的密文字符', '输入您的密码', {
        confirmButtonText: '保存',
        cancelButtonText: '取消',
        inputPattern: /^\S+$/,
        inputErrorMessage: '输入密文字符不应为空',
        iconClass: 'el-icon-edit',
        type: 'warning',
        center: true
      }).then((res) => {
        // console.log("img",img.target.src)
        // 获取图片的hash值
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', img.src);
        xmlHttp.responseType = "blob";
        let that = this;
        xmlHttp.onload = function () {
          that.fileHash(this.response).then((hash => {
            let obj = {};
            obj['img'] = hash;
            obj['password'] = res.value;
            that.binding.push(obj);
          }))
        }
        xmlHttp.send();
        this.$message({
          type: 'success',
          message: '保存成功!',
          center: true,
          duration: 1500
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消！',
          center: true,
          duration: 1500
        });
      });
    },

    // 深层比对两个对象是否相等
    deepEqual(object1, object2) {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (let index = 0; index < keys1.length; index++) {
        const val1 = object1[keys1[index]];
        const val2 = object2[keys2[index]];
        const areObjects = (val1 != null && typeof val1 === 'object') && (val2 != null && typeof val2 === 'object');
        if (areObjects && !this.deepEqual(val1, val2) || !areObjects && val1 !== val2) {
          return false;
        }
      }
      return true;
    },

    // 完成认证按钮
    finish() {
      let obj = {};
      obj['account'] = this.account;
      obj['binding'] = this.binding;
      // 注册模式
      if (this.$route.params.mode === 'register') {
        this.user.push(obj);
        console.log("加入新纪录成功！当前所有绑定关系为：\n")
        console.log("this.user",this.user)
        this.$message({
          message: '注册成功！即将跳转到登陆页面',
          type: 'success',
          center: true,
          duration: 1500
        });
        setTimeout(() => {
          this.$router.push({path: "/login"});
        }, 1500);
      }
      // 登陆模式
      else {
        let found = this.user.some((item) => {
          return this.deepEqual(item, obj)
        })
        if (!found) {
          this.$message({
            message: '密码错误！认证失败！',
            type: 'error',
            center: true,
            duration: 1500
          });
        } else {
          this.$message({
            message: '登录成功！即将跳转回到首页！',
            type: 'success',
            center: true,
            duration: 1500
          });
          setTimeout(() => {
            this.$router.push({path: '/'});
          }, 1500)
        }
      }
    },

    // Fisher-Yates 洗牌算法：实现随机化排列
    shuttle(list) {
      let j = 0;
      for (let i = 0; i < list.length; ++i) {
        j = Math.floor(Math.random() * (list.length - i)) + i;
        [list[i], list[j]] = [list[j], list[i]]
      }
      return list;
    },

    //对文件进行哈希
    async fileHash(file) {
      const chunks = []
      let cur = 0
      while (cur < file.size) {
        chunks.push({index: cur, file: file.slice(cur, cur + 1024 * 1024)}) // 1MB切片
        cur += 1024 * 1024
      }
      return await new Promise(resolve => {
        const spark = new SparkMD5.ArrayBuffer()
        let count = 0
        const appendToSpark = async file => {
          return new Promise(resolve => {
            const reader = new FileReader()
            reader.readAsArrayBuffer(file)
            reader.onload = e => {
              spark.append(e.target.result)
              resolve()
            }
          })
        }
        const workLoop = async deadline => {
          while (count < chunks.length && deadline.timeRemaining() > 1) {
            //浏览器存在空闲时间
            await appendToSpark(chunks[count].file)
            count++
            if (count >= chunks.length) {
              resolve(spark.end())
            }
          }
          window.requestIdleCallback(workLoop) // 给 workLoop 函数一个浏览器状态参数 deadline
        }
        window.requestIdleCallback(workLoop)   // 给 workLoop 函数一个浏览器状态参数 deadline
      })
    }
  },
  mounted() {
    let arr = {
      48:0,
      49:1,
      50:2,
      51:3,
      52:4,
      53:5,
      54:6,
      55:7,
      56:8,
      57:9,
      65:'a',
      66:'b',
      67:'c',
      68:'d',
      69:'e',
      70:'f',
      71:'g',
      72:'h',
      73:'i',
      74:'j',
      75:'k',
      76:'l',
      77:'m',
      78:'n',
      79:'o',
      80:'p',
      81:'q',
      82:'r',
      83:'s',
      84:'t',
      85:'u',
      86:'v',
      87:'w',
      88:'x',
      89:'y',
      90:'z',
    }
    document.onkeydown = function(event){
      var e = event || window.event;
      let dt = new Date();
      var h = dt.getHours(); //获取时
      var m = dt.getMinutes(); //获取分
      var s = dt.getSeconds(); //获取秒
      let time = '输入时间：' + h + '时' + m + '分' + s + '秒';
      let keys = Object.keys(arr).map((item)=>{
        return parseInt(item)
      })
      if(e && e.keyCode===13){ // enter键
        // 要做的事情
        console.log("输入结束")
      }
      else if(e && event.shiftKey && e.keyCode && e.keyCode!==16) {
        console.log(arr[e.keyCode].toUpperCase(),time)
      }
      else if(keys.indexOf(e.keyCode)!==-1) {
        console.log(arr[e.keyCode],time)
      }
    };

    this.account = this.$route.params.account;

    // 获取animal文件夹并提取图片路径和id
    const imgFiles1 = require.context("../../../public/img/animal", false, /\.*\.svg$/).keys();
    imgFiles1.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/animal" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.animalImgList.push(obj);
    })
    // 随机排列图标
    this.animalImgList = this.shuttle(this.animalImgList)

    // 获取food文件夹并提取图片路径和id
    const imgFiles2 = require.context("../../../public/img/food", false, /\.*\.svg$/).keys();
    imgFiles2.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/food" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.foodImgList.push(obj);
    })
    // 随机排列图标
    this.foodImgList = this.shuttle(this.foodImgList)

    // 获取fruit文件夹并提取图片路径和id
    const imgFiles3 = require.context("../../../public/img/fruit", false, /\.*\.svg$/).keys();
    imgFiles3.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/fruit" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.fruitImgList.push(obj);
    })
    // 随机排列图标
    this.fruitImgList = this.shuttle(this.fruitImgList)

    // 获取geometry文件夹并提取图片路径和id
    const imgFiles4 = require.context("../../../public/img/geometry", false, /\.*\.svg$/).keys();
    imgFiles4.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/geometry" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.geometryImgList.push(obj);
    })
    // 随机排列图标
    this.geometryImgList = this.shuttle(this.geometryImgList)

    // 获取vegetable文件夹并提取图片路径和id
    const imgFiles5 = require.context("../../../public/img/vegetable", false, /\.*\.svg$/).keys();
    imgFiles5.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/vegetable" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.vegetableImgList.push(obj);
    })
    // 随机排列图标
    this.vegetableImgList = this.shuttle(this.vegetableImgList)

    // 获取baby文件夹并提取图片路径和id
    const imgFiles6 = require.context("../../../public/img/baby", false, /\.*\.svg$/).keys();
    imgFiles6.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/baby" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.babyImgList.push(obj);
    })
    // 随机排列图标
    this.babyImgList = this.shuttle(this.babyImgList)

    // 获取furniture文件夹并提取图片路径和id
    const imgFiles7 = require.context("../../../public/img/furniture", false, /\.*\.svg$/).keys();
    imgFiles7.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/furniture" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.furnitureImgList.push(obj);
    })
    // 随机排列图标
    this.furnitureImgList = this.shuttle(this.furnitureImgList)

    // 获取people文件夹并提取图片路径和id
    const imgFiles9 = require.context("../../../public/img/people", false, /\.*\.svg$/).keys();
    imgFiles9.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/people" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.peopleImgList.push(obj);
    })
    // 随机排列图标
    this.peopleImgList = this.shuttle(this.peopleImgList)

    // 获取plant文件夹并提取图片路径和id
    const imgFiles10 = require.context("../../../public/img/plant", false, /\.*\.svg$/).keys();
    imgFiles10.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/plant" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.plantImgList.push(obj);
    })
    // 随机排列图标
    this.plantImgList = this.shuttle(this.plantImgList)

    // 获取weather文件夹并提取图片路径和id
    const imgFiles11 = require.context("../../../public/img/weather", false, /\.*\.svg$/).keys();
    imgFiles11.forEach((str) => {
      let obj = {};
      obj['src'] = require("../../../public/img/weather" + str.slice(1));
      obj['id'] = (str.split(".svg")[0]).slice(2);
      this.weatherImgList.push(obj);
    })
    // 随机排列图标
    this.weatherImgList = this.shuttle(this.weatherImgList)

    if (this.$route.params.mode === 'register') {
      this.$message({
        message: '可选择任意数目图标并绑定认证密码！',
        iconClass: 'el-icon-warning-outline',
        center: true,
        duration: 3000
      });
    }

    setTimeout(() => {
      this.$message({
        message: '选择完毕请点击按钮“完成认证”',
        type: "info",
        center: true,
        duration: 3000,
      });
    }, 4000)
  }
}
</script>

<style scoped>
.iconBox {
  display: inline-block;
  width: 60px;
  height: 60px;
  padding: 10px;
}

.wrap {
  /* 最外层的div容器 */
  min-width: 300px;
  min-height: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  position: relative; /* 父元素相对定位 */
  padding-top: 20px;
  overflow: hidden;
  border: 1px solid #F3F3F3; /* 边框 */
  background-color: rgba(177, 215, 252, 0.21); /* 背景颜色 */
}

.ribbon {
  /* 左上角飘带 */
  background-color: #faecec; /* 左上角飘带的背景颜色 */
  overflow: hidden;
  white-space: nowrap; /* 文字不换行*/
  position: absolute; /* 绝对定位 */
  left: -40px;
  top: 10px;
  transform: rotate(-45deg); /* 旋转45°*/
  box-shadow: 0 0 10px #F3F3F3; /* 飘带的阴影*/
}

.ribbon span {
  color: #0c0c0c;
  display: block;
  font: bold 100% 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 1px 0;
  padding: 5px 50px;
  text-align: center;
  text-shadow: 0 0 5px #faf9f9;
}

.iconImg {
  cursor: pointer;
  width: 40px;
}

.identityButton {
  width: 130px;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, #d4f4fa 0%, #05a5f8 100%); /* W3C */
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .4);
  font-size: 17px;
  letter-spacing: 2px;
  text-align: center;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, .2);
  cursor: pointer;
}
</style>