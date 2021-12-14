<template>
    <body>
    <NewTop></NewTop>
    <div id="box" style="margin-top: 150px">
        <h1 style="color:white">个人信息</h1>
        <div class="Block">
            <ul style="list-style:none">
                <li>
                    <p>
                        <font>用户名: </font>
                        <input style="width:280px;" v-model="user.uname"></input>
                    </p>
                </li>
                <li>
                    <p>
                        <font>邮&nbsp箱: </font>
                        <input style="width:280px;" v-model="user.email" disabled=true></input>
                    </p>
                </li>
                <li>
                    <p>
                        <font>性&nbsp别: </font>
                        <label><input id="male" type="radio" value="male" v-model="user.sex">男</label>
                        <label style="margin-right:250px;"><input id="female" type="radio" value="female" v-model="user.sex">女</label>
                    </p>
                </li>
                <li>
                    <p style="margin-right:30px;">
                        <!-- <br/> -->
                        <font>生&nbsp日: </font>
                        <span>
                            <div class="block" style="display: inline;">
                                <span class="demonstration"></span>
                                <el-date-picker
                                v-model="user.birthday"
                                value-format="yyyy-MM-dd"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                            </div>
                        </span>
                    </p>
                </li>
                <li>
                    <p>
                        <font>手机号: </font>
                        <input style="width:280px;" v-model="user.phone"></input>
                    </p>
                </li>
                <li>
                    <p>
                        <font>&nbsp&nbspQQ: </font>
                        <input style="width:280px;" v-model="user.qq"></input>
                    </p>
                </li>
                <li>
                    <p>
                        <font>微&nbsp信: </font>
                        <input style="width:280px;" v-model="user.wechat"></input>
                    </p>
                </li>
            </ul>
            <el-button @click="unchange" class="submit">返回</el-button>
            <el-button @click="change" class="submit">确认修改</el-button>
        </div>
    </div>
    </body>
</template>

<style scoped>
    .submit {
        margin-left: 40px;
        /* margin-right: 10px; */
        margin-top: 25px;
        width: 200px;
        background-color: rgba(33, 47, 94, 0.09);
        color: white;
    }
    input {
        font-size: 18px;
    }
    p {
        font-size: 18px;
        float: left;
        text-align: center;
        margin-bottom: 25px;
    }
    font {
        font-size: 22px;
        color: white;
        font-family: monospace;
        /* float: left; */
    }
    span {
        color: white;
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
        height: 600px;
        width: 500px;
        /* background-color: #0f0f0f0f; */
        opacity: 0.7;
        background-color: black;
        margin: 0 auto;
        border-radius: 5%;
    }
    .Block {
        height: 500px;
        width: 480px;
    }
    
</style>
<script>
import NewTop from '../components/NewTop.vue'
import Date from '../components/Date.vue'
import global from '../components/global.vue'
export default {
    data () {    
        return {
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                }
            },
            user: {
                uname: '',
                email: '',
                sex: '',
                birthday: '',
                phone: '',
                qq: '',
                wechat: '',
            }
        }
    },
    components: {
        NewTop,
        Date
    },
    methods: {
        unchange: function(){
            this.$confirm('你做出的修改未被保存，确定要返回吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.$message({
                    type: 'success',
                    message: '成功返回!'
                });
                this.$router.replace('/UserInfo');
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消操作!'
                });          
            });
        },
        change: function() {
            console.log(this.user.birthday)
            var url=global.url+"/user/resetInfo"
            this.$http.post(
                url,
                {
                    email: this.user.email,
                    uname: this.user.uname,
                    phone: this.user.phone,
                    sex: this.user.sex,
                    qq: this.user.qq,
                    wechat: this.user.wechat,
                    birthday: this.user.birthday,
                }
            ).then(res=>{
                console.log(res);
                if (res.data.code===1) {
                    this.$message({
                        message: "保存成功!",
                        type: "success"
                    })
                    this.$router.replace('/UserInfo')
                } else {
                    alert(res.data.msg)
                }
            }).catch(error=>{
                console.log(error)
            })
        }
    },
    mounted: function() {
        var url = global.url+"/user/findByEmail/" + localStorage.getItem("email")
        this.$http.get(
            url,
        ).then(res=>{
            console.log(res.data)
            if (res.data.code===1) {
                this.user=res.data.data[0]
            }
        })
    }
}
</script>
