<template>
    <div class="container_wapper">
        <div id="templatemo_banner_menu">
            <div class="container-fluid">
                <div class="col-xs-4 templatemo_logo">
                    <a href="#">    
                        <img src="../../static/assets/images/templatemo_logo.jpg" id="logo_img" alt="dragonfruit website template" title="Dragonfruit Template" />
                        <h1 id="logo_text">民族图案<span>博物馆</span></h1>
                    </a>    
                </div>
                <div class="col-sm-8 hidden-xs">
                    <ul class="nav nav-justified">
                        <li><a href="#templatemo_banner_slide">首页</a></li>
                        <li><a href="#templatemo_about">新闻</a></li>
                        <li><a href="#templatemo_events">展馆</a></li>
                        <!-- <li><a href="#templatemo_timeline">Timeline</a></li> -->
                        <!-- <li><a href="#templatemo_contact">Contact</a></li> -->
                        <li>
                            <a @click="f1" class="fff" style="cursor:pointer;">
                                <img v-bind:src="src" v-bind:title="info">
                            </a>
                        </li>
                        <!-- <li>
                            <a @click="f2" class="fff" style="cursor:pointer;">
                                <img src="../assets/logo.png">
                            </a>
                        </li> -->
                    </ul>
                </div>
                <div class="col-xs-8 visible-xs">
                    <a href="#" id="mobile_menu"><span class="glyphicon glyphicon-th-list"></span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .fff {
        width: 300px;     
        display: table-cell;
        /* margin-left: 50px; */
        /* position: relative; */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .fff img {
        /* display: table-cell; */
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<script>
import global from './global.vue'
export default {
    data() {
        var src, info;
        if (!localStorage.getItem('uid')) {
            src = require('../assets/init_user.jpg');
            info = "还未登录?";
        } else {
            src = global.url+'/images2/'+localStorage.getItem('uid')+'.jpg';
            info = "用户信息";
        }
        return {
            src,
            info
        }
    },
    methods: {
        f1: function() {
            if (localStorage.getItem("uid")) {
                this.$router.push('/UserInfo')
            } else {
                this.$router.push('/Login')
            }
        },
        f2 : function() {
            this.$router.push('/Exhibition')
        }
    }
}
</script>