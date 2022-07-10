<template>
  <div class="container">
    <div class="box login">
      <div class="form-content">
        <p>Welcome</p>
        <div class="avtar">
          <div class="pic"><img src="../../../public/img/login.jpg" alt=""></div>
        </div>
        <form action="#" class="form" autocomplete="off">
          <div>
            <input type="text" placeholder="username" id="inputName">
            <p id="wrongTip"></p>
          </div>
          <div class="btn">
            <button @click="checkUsername">LOGIN</button>
          </div>
        </form>
        <span class="btn-something">
          Don't have an account ? <span @click="register">signup</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "login",
  computed: {
    ...mapState(['user'])
  },
  methods:{
    register(){
      this.$router.push({path:'/register'})
    },
    checkUsername() {
      let input = document.getElementById('inputName');
      let inputValue = document.getElementById('inputName').value;
      let tip = document.getElementById('wrongTip');
      console.log("inputValue",inputValue)
      if (inputValue === "") {
        input.classList.add('wrongName');
        tip.textContent = '用户名不能为空!';
      }
      else {
        let exist = this.user.some((item)=>{
          return item['account']===inputValue;
        })
        if(!exist) {
          input.classList.add('wrongName');
          tip.textContent = '不存在该账号!';
        }
        else {
          input.classList = [];
          tip.textContent='';
          // 跳转到身份验证页面(携带用户名参数)
          this.$router.push({
            name: "identity",
            params: {
              account: inputValue,
              mode:'login'
            }
          });
        }
      }
    },
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  width: 20rem;
  height: 25rem;
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

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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