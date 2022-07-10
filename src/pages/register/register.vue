<template>
  <div class="container">
    <div class="box signup">
      <div class="form-content">
        <p>Let's get started</p>
        <div class="avtar">
          <div class="pic"><img src="../../../public/img/register.jpg" alt=""></div>
        </div>
        <form action="#" class="form" autocomplete="off">
          <div>
            <input type="text" placeholder="username" id="inputName">
            <p id="wrongTip"></p>
          </div>
          <div class="btn">
            <button @click="checkUsername">SIGNUP</button>
          </div>
        </form>
        <span class="btn-something">
          Already have an account ? <span @click="login">login</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data(){
    return {
      account:'',//用户名
    }
  },
  computed: {},
  methods: {
    login() {
      this.$router.push({path: '/login'})
    },
    // 判断用户注册的用户名是否合格
    checkUsername() {
      let input = document.getElementById('inputName');
      let inputValue = document.getElementById('inputName').value;
      let tip = document.getElementById('wrongTip');
      var reg = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;//3-15字节，允许字母数字下划线
      if (inputValue === "") {
        input.classList.add('wrongName');
        tip.textContent = '用户名不能为空!';
      } else if (!reg.test(inputValue)) {
        input.classList.add('wrongName');
        tip.textContent = '用户名只能包含中文字母数字下划线!';
      } else if(inputValue.length<3 || inputValue.length>15) {
        input.classList.add('wrongName');
        tip.textContent='用户名长度应在3-15位之间';
      } else {
        input.classList = [];
        tip.textContent='';
        this.account=inputValue;
        // 跳转到身份验证页面(携带用户名参数和当前为注册模式)
        this.$router.push({
          name: "identity",
          params: {
            account: this.account,
            mode:'register'
          }
        });
      }
    },
  }
}
</script>

<style scoped>
.container {
  width: 20rem;
  height: 25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 20rem;
  height: 25rem;
  border-radius: 10px;
  cursor: pointer;
}

.container .form-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 1px #3399ff;
  border-radius: 30px;
  background-color: #fff;
}

.form-content p {
  margin-top: 15px;
  font-size: 2rem;
  text-align: center;
  font-weight: 800;
}

.form-content .avtar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.form-content .avtar .pic {
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #3399ff;
}

.form-content .avtar .pic img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form input {
  width: 14rem;
  padding: 0.8rem;
  outline: none;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  margin: 5px;
}

.form .wrongName {
  border: 1px solid red;
}

#wrongTip {
  width: 10rem;
  height: 20px;
  font-size: 14px;
  color: red;
  margin: 0 auto;
}

.form div {
  position: relative;
}

.form div .fa {
  position: absolute;
  top: 18px;
  left: 25px;
}

.form .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-top: 30px;
}

.form .btn button {
  text-transform: uppercase;
  padding: 8px;
  border: none;
  outline: none;
  background-color: #0066ff;
  color: #fff;
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
}

.btn-something {
  color: #888;
  font-size: 14px;
}

.btn-something span {
  color: #0066ff;
  cursor: pointer;
  font-weight: 500;
}
</style>