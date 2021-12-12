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
                        <img v-bind:src="src">
                    </div>
                    <div class="right" style="float: left; height: 100px; width: 500px;">
                        <el-input
                        type="textarea"
                        rows="4"
                        placeholder="发表你的看法"
                        maxlength="40"
                        show-word-limit
                        v-model="textarea">
                        </el-input>
                    </div>
                    <el-button style="margin-left:550px; width: 100px; margin-top: 10px; height: 35px;">发布</el-button>
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
                            <p style="font-size:15px;">{{item.commit}}</p>
                            <p style="font-size:10px;">{{item.date}}</p>
                        </div>
                    </div>
                </div>
                <div class="buttom_pagination" style="width:120px;">
                    <el-pagination @current-change="changePage"
                        layout="prev, pager, next"
                        :total="50">
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
        margin-top: 0px;
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
    }
    .commit_body {
        height: 800px;
        width: 700px;
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
    .buttom_pagination {
        margin: 0 auto;
    }
</style>

<script>
import Msg from '../components/Msg.js'
export default {
    data() {
        return {
            val: 0,
            textarea: '',
            total: 1,
            src: require('../assets/init_user.png'),
            num: 10,
            items: [
                {
                    src: require('../assets/init_user.png'),
                    uname: '1',
                    commit: 'abababa....',
                    date: '2021-12-8'
                },
                {
                    src: require('../assets/init_user.png'),
                    uname: '2',
                    commit: 'abababa....',
                    date: '2021-12-8'
                },
                {
                    src: require('../assets/init_user.png'),
                    uname: '2',
                    commit: 'abababa....',
                    date: '2021-12-8'
                },
                {
                    src: require('../assets/init_user.png'),
                    uname: '2',
                    commit: 'abababa....',
                    date: '2021-12-8'
                },
                {
                    src: require('../assets/init_user.png'),
                    uname: '2',
                    commit: 'abababa....',
                    date: '2021-12-8'
                },
            ]
        }
    },
    mounted: function() {
        var _this = this;
        Msg.$on("val", function(m){
            //  console.log(m)
            _this.val=m
        })
    },
    methods: {
        changePage(page) {
            console.log(this.val)
            var url=""
            this.$http.post (
                url,
                {
                    page: page,
                    pid: this.val
                }
            ).then(res=>{
                
            })
        }
    }
}
</script>