<template>
    <div>
        <div class="main">
            <iframe runat="server" frameborder="no" scrolling="no" src="../../static/assets/Echarts-Map-Icon-master/time_map.html"></iframe>
        </div>
        <div class="buttom" style="">
            <div class="commit_box">
                <p style="font-size: 25px; padding: 30px 40px; font-weight:900;">发表评论</p>
                <div class="my_commit">
                    <div class="left" style="width: 150px; float: left;">
                        <img v-bind:src="mysrc">
                    </div>
                    <div class="right" style="float: left; height: 100px; width: 500px; margin-top:10px;">
                        <el-input
                        type="textarea"
                        rows="4"
                        placeholder="发表你的看法"
                        maxlength="40"
                        show-word-limit
                        v-model="textarea">
                        </el-input>
                    </div>
                    <el-button @click="submit" style="margin-left:550px; width: 100px; margin-top: 10px; height: 35px;">发布</el-button>
                </div>
                <el-divider></el-divider>
                <div class="commit_body">
                    <p style="font-size: 20px; padding: 10px 40px; font-weight:900;">评论列表({{num}}条)</p>
                    <div v-for="item in items" style="height: 100px; margin-top: 40px; width: 700px;">
                        <div style="float: left; width: 120px; height: 100px;">
                            <img v-bind:src="item.src">
                        </div>
                        <div class="user_commit" style="float: left; height: 100px; width: 570px;">
                            <p style="font-size:10px; font-weight:900;">{{item.uname}}</p>
                            <p style="font-size:15px;">{{item.pltxt}}</p>
                            <p style="font-size:10px;">{{item.pltime}}</p>
                        </div>
                    </div>
                </div>
                <div style="margin-left: 38%; margin-top: 20px;">
                    <el-pagination @current-change="changePage"
                        layout="prev, pager, next"
                        :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .user_commit p {
        word-break: break-all;
        word-wrap: break-word;
    }
    .commit_body img {
        margin-top: 0px;
        margin-left: 45px;
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: white;
    }
    .left img {
        margin-top: 20px;
        margin-left: 45px;
        display: block;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: white;
    }
    .my_commit {
        height: 160px;
        width: 700px;
        box-shadow:
         2px 2px 10px grey,
         5px 5px 20px blue;
    }
    .commit_body {
        height: 800px;
        width: 700px;
        box-shadow:
         2px 2px 10px red,
         5px 5px 20px blue;
    }
    .commit_box {
        height: 1200px;
        width: 700px;
        background-color: white;
        margin: 0 auto;
    }
    .main {
        width: 100%;
        height: 100%;
    }
    iframe {
        width: 100%;
        height: 990px;
    }
</style>

<script>
import global from '../components/global.vue'
export default {
    data() {
        var mysrc = global.url + '/images2/' + localStorage.getItem('uid') + '.jpg'
        return {
            textarea: '',
            total: 10,
            mysrc,
            num: 0,
            items: []
        }
    },
    mounted() {
        var url=global.url+'/comment/findByPidPages'
        this.$http.post (
            url,
            {
                pageSize: 5,
                pid: localStorage.getItem('now'),
                pageNo: 1
            }
        ).then(res=>{
            this.items = res.data.data
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].src=global.url+'/images2/'+res.data.data[i].uid+'.jpg'
            }
        })

        url=global.url+'/comment/findPageNumByPid/'+localStorage.getItem('now')
        this.$http.get (
            url,
        ).then(res=>{
            this.num = res.data.data;
            if (this.num % 5 === 0) this.total = this.num / 5 * 10;
            else this.total = (Math.floor(this.num / 5) + 1) * 10;
            // console.log(this.total)
        })
    },
    methods: {
        changePage(page) {
            var url=global.url+'/comment/findByPidPages'
            this.$http.post (
                url,
                {
                    pageSize: 5,
                    pid: localStorage.getItem('now'),
                    pageNo: page
                }
            ).then(res=>{
                this.items = res.data.data
                for (let i = 0; i < this.items.length; i++) {
                    this.items[i].src=global.url+'/images2/'+res.data.data[i].uid+'.jpg'
                }
            })
        },
        submit() {
            if (!localStorage.getItem('uid')) {
                this.$router.push('/Login?back=/Exhibition')
                return;
            } 
            if (this.textarea === '') {
                alert("不能发表空段落!")
                return;
            }
            var url=global.url+'/comment/addComment'
            this.$http.post (
                url,
                {
                    pid: localStorage.getItem('now'),
                    uid: localStorage.getItem('uid'),
                    pltxt: this.textarea
                }
            ).then(res=>{
                console.log(res)
                if (res.data.code === 1) {
                    alert("发布成功!")
                    this.$router.go(0)
                    this.total = ((this.num-1) / 5 + 1) * 10;
                }
            })
        }
    }
}
</script>