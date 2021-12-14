<template>
    <body>
    <NewTop></NewTop>
    <div id="box" style="margin-top: 150px">
        <h1 style="color:white">用户登录Login</h1>
        <div class="input">
            <div class="text">
                <el-input type="text" v-model="email" placeholder="请输入账号/邮箱"></el-input>
            </div>
            <div class="text">
                <el-input type="password" v-model="upass" placeholder="请输入密码" show-password></el-input>
            </div>
            <div>
                <el-button @click="login" class="submit">登录</el-button>
                <p>还没有注册？点击<router-link to="/Register">注册</router-link></p>
                <p><router-link to="/UpdPwd">忘记密码</router-link></p>
            </div>
        </div>
    </div>
    </body>
</template>

<style scoped>
    body {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../assets/banner-home3.jpg");
        background-size: cover;
        background-position: 100% 100%;
        background-repeat: no-repeat;
    }
    #box {
        /* margin-top: 150px; */
        height: 350px;
        width: 400px;
        /* background-color: #0f0f0f0f; */
        opacity: 0.7;
        background-color: black;
        margin: 0 auto;
        border-radius: 5%;
    }
    #box .input {
        padding: 0 30px;
        padding-top: 5px;
    }
    #box .text {
        margin: 20px;
    }
    #box .submit{
        /* margin-top: 10px; */
        margin-bottom: 10px;
        margin-left: 20px;
        width: 300px;
        background-color: rgba(33, 47, 94, 0.09);
        color: white;
    }
    #box p {
        font-size: 8px;
        text-align: center;
        color: white;
    }
</style>
<script type="text/javascript">
import global from '../components/global.vue'
import NewTop from '../components/NewTop.vue'

export default {
  data() {
    return {
        email: '',
        upass:''
    }
  },
  methods:{
    login() {
            if (this.email === '') {
                alert('邮箱不能为空')
                return;
            }
            if (this.upass === '') {
                alert('密码不能为空')
                return;
            }
            var url=global.url+'/user/login'
            this.$http.post(
                url, 
                {
                    email: this.email,
                    upass: this.upass
                }
            ).then(res => {
                console.log(res)
                if (res.data.code === 1) {
                    console.log(res)
                    // this.$router.replace('/')
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    this.$router.push('/')
                    localStorage.setItem("email", this.email)
                    localStorage.setItem("uid", res.data.data[0].uid)
                } else {
                    console.log(this.upass)
                    console.log(this.email)
                    this.$message.error(res.data.msg);
                }
            }).catch(error => {
                console.log(error)
            })
        }
    },
    components: {
        NewTop
    }
}
</script>
