<template>
  <div id="back">
    <button class="loginButton" id="login-button" @click="login">Login</button>
    <button class="registerButton" id="register-button" @click="register">Register</button>
    <header class="pageTitle">基于图标密码绑定的web端身份认证</header>

    <article class="pageContent">
      <main class="introBox">
        本项目属于基于图标和密文绑定关系的身份验证。但不同于常见的输入大小写字母、数字、符号等的字符串型密码，用户在此页面上通过选择图标来构成密码，既能保证用户密码的隐私性，大大提高安全性，又能降低用户的使用成本。
      </main>

      <aside class="usage">
        <p>1.有不同分类图标供选择，点击其中一个图标</p>
        <img src="../../../public/img/home/arrow.svg" alt="" width="60">
        <p>2.在输入框输入任意字符</p>
        <img src="../../../public/img/home/arrow.svg" alt="" width="60">
        <p>3.点击确定，输入作为密文与该图标确定绑定关系</p>
        <img src="../../../public/img/home/arrow.svg" alt="" width="60">
        <p>以上步骤可反复执行直到点击“保存”，该绑定关系即作为您下一次登录的认证密码</p>
      </aside>
    </article>
  </div>
</template>

<script>
export default {
  name: "home",
  methods:{
    register(){
      this.$router.push({path:'/register'})
    },
    login(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style scoped>
  #back {
    width: 100%;
    height: 100%;
    background-image: url("../../../public/img/home/back.png");
    background-size: 100% 100%;
  }

  .loginButton,.registerButton {
    position: fixed;
    z-index: 1000;
    margin: 1em;
    text-indent: 2.5em;
    background: 0 0;
    outline: 0;
    cursor: pointer;
    border: 2px solid rgba(0,0,0,.5);
    border-radius: 5px;
    font-size: 15px;
    line-height: 30px;
    text-align: center;
  }

  .loginButton::before,.registerButton::before {
    position: absolute;
    top: 11px;
    right: .1em;
    bottom: .5em;
    left: 13px;
    width: 15px;
    height: 12px;
    content: '';
    background: linear-gradient(#fff 20%,transparent 20%,transparent 40%,#fff 40%,#fff 60%,transparent 60%,transparent 80%,#fff 80%);
  }

  .loginButton {
    top: 5px;
    right: 3px;
  }

  .registerButton {
    top: 5px;
    right: 100px;
  }

  .pageTitle {
    padding: 80px 0 0 50px;
    font-size: 2.5rem;
    letter-spacing: 1px;
    font-weight: 700;
    color: #f8edc2;
    -webkit-animation: fade-in-down 1s;
    animation: fade-in-down 1s both;
    -webkit-animation-delay: .6s;
    animation-delay: .5s;
    text-shadow: 0 5px 6px rgba(0,0,0,.4);
  }

  .pageContent {
    margin-top: 50px;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  .introBox {
    background: rgba(255,255,255,0.4);
    padding: 40px;
    width: 500px;
    line-height: 2rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  .usage {
    margin-left: 40px;
    padding: 20px;
    width: 500px;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    background: rgba(255,255,255,0.6);
    color: #e86868;
  }
</style>