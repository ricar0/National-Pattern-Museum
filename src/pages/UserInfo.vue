<template>
    <body>
    <NewTop></NewTop>
    <div id="box" style="margin-top: 150px">
        <h1 style="color:white">个人信息</h1>
        <div class="block">
            <div class="block1">
                <img v-bind:src="src">
                <div style="position: relative; width: 100px; height: 38px; left: 50%; transform: translateX(-50%); top: 30px;">
                    <el-button class="fileInput">选择头像</el-button>
                    <input @change="uploadImg" type="file" class="fileInput" style="opacity: 0;" ref="input"></input>
                </div>
                <el-button @click="saveImg" style="margin-top:50px; width: 100px; height: 38px;">保存头像</el-button>
            </div>
            <div class="block2">
                <ul style="list-style:none; margin-top: 20px;">                
                    <li>
                        <p>
                            <font>用户名：</font>
                            <a title="修改信息" @click="f"><span>{{uname}}</span></a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <font>邮&nbsp箱：</font>
                            <a title="修改信息" @click="f"><span>{{email}}</span></a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <font>性&nbsp别：</font>
                            <a title="修改信息" @click="f"><span>{{sex}}</span></a>
                        </p>
                    </li>
                    <li style="width:200px;">
                        <p>
                            <font>生&nbsp日：</font>
                            <a title="修改信息" @click="f"><span>{{birthday}}</span></a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <font>手机号：</font>
                            <a title="修改信息" @click="f"><span>{{phone}}</span></a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <font>&nbsp&nbspQQ：</font>
                            <a title="修改信息" @click="f"><span>{{qq}}</span></a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <font>微&nbsp信：</font>
                            <a title="修改信息" @click="f"><span>{{wechat}}</span></a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </body>
</template>

<style scoped>
    .fileInput {
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .block2 ul li a {
        cursor: pointer;

    }
    p {
        font-size: 18px;
        float: left;
        /* text-align: center; */
        margin-bottom: 20px;
        width: 350px; 
    }
    body {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("../assets/bg_left.png"),url("../assets/bg_right.png");
        background-size: cover;
        background-position: 100% 100%;
        background-repeat: no-repeat;
    }
    #box {
        /* margin-top: 150px; */
        height: 500px;
        width: 700px;
        /* background-color: #0f0f0f0f; */
        opacity: 0.7;
        background-color: black;
        margin: 0 auto;
        border-radius: 5%;
    }
    .block1 {
        margin: 0;
        padding: 0;
        height: 410px;
        width: 300px;
        /* background-color: red; */
        float: left;
        /* display: inline; */
        text-align: center;
    }
    .block2 {
        margin: 0;
        padding: 0;
        height: 410px;
        width: 400px;
        /* background-color: lawngreen; */
        float: left;
        /* display: inline; */
    }
    
    .block1 img {
        /* display: table-cell; */
        margin-top: 30px;
        margin-left: 50px;
        display: block;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: white;
    }
    .button {
        background-color: rgba(33, 47, 94, 0.09);
        color: white;
    }
    font {
        font-size: 22px;
        color: white;
        font-family: monospace;
    }
    span {
        color: white;
    }
</style>
<script>
import NewTop from '../components/NewTop.vue'
import global from '../components/global.vue'
export default {
    data () {    
        return {
            src: require("../assets/init_user.png"),
            uname: "",
            email: "",
            sex: "",
            birthday: "",
            phone: "",
            qq: "",
            wechat: "",
        }
    },
    components: {
        NewTop
    },
    methods: {
        f:function() {
            this.$router.replace('/UpdInfo')
        },
        uploadImg() {
            let tmp = this.$refs.input.files
            // console.log(tmp[0])
            if (tmp.length === 0) {
                this.inputValue = null
            } else {
                this.showImage(tmp[0])
                // this.src=require(img.src);
            }
        },
        showImage(img) {
            let reader = new FileReader()
            reader.readAsDataURL(img)
            reader.onload = () => {
                this.src = reader.result.toString()
            }
        },
        saveImg: function() {
            let data = {
                file: this.src
            }
            var url =""
            this.$http.post(
                url,
                data
            ).then(res=>{
                if (res.data.code === 1) {
                    alert(res.data.msg)
                } else {
                    alert(res.data.msg)
                }
            })
        },
    },
    mounted() {
        var url = global.url+"/user/findByEmail/" + localStorage.getItem("token")
        this.$http.get(
            url
        ).then(res=>{
            console.log(res.data)
            this.uname=res.data.data[0].uname
            this.email=res.data.data[0].email
            this.phone=res.data.data[0].phone
            this.sex=res.data.data[0].sex
            this.birthday=res.data.data[0].birthday
            this.qq=res.data.data[0].qq
            this.wechat=res.data.data[0].wechat
        })
    }
}
</script>
