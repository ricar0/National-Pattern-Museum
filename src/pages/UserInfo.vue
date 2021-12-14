<template>
    <body>
    <NewTop></NewTop>
    <div id="box" style="margin-top: 150px; position: relative;">
        <h1 style="color:white;">个人信息</h1>
        <div @click="logout" style="position: absolute; right: 0; top: 0; cursor: pointer;" title="退出登录?">
            <svg t="1639467147468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3115" width="60" height="60"><path d="M542.7 373.6h-59.5c-24.8 0-44.8-20.1-44.8-44.8V167.9c0-24.8 20.1-44.8 44.8-44.8h59.5c24.8 0 44.8 20.1 44.8 44.8v160.9c0.1 24.7-20 44.8-44.8 44.8z m0 0" fill="#CEE8FA" p-id="3116"></path><path d="M542.7 398.5h-59.5c-38.5 0-69.7-31.3-69.7-69.7V167.9c0-38.5 31.3-69.7 69.7-69.7h59.5c38.5 0 69.7 31.3 69.7 69.7v160.9c0.1 38.4-31.2 69.7-69.7 69.7zM483.3 148c-11 0-19.9 8.9-19.9 19.9v160.9c0 11 8.9 19.9 19.9 19.9h59.5c11 0 19.9-8.9 19.9-19.9V167.9c0-11-8.9-19.9-19.9-19.9h-59.5zM513 811.4" fill="#2197EF" p-id="3117"></path><path d="M513 928.3c-218.7 0-396.6-177.9-396.6-396.6 0-132.3 65.4-255.3 175-329 11.4-7.7 26.9-4.6 34.6 6.8 7.7 11.4 4.6 26.9-6.8 34.6-95.7 64.4-152.9 171.9-152.9 287.6 0 191.2 155.5 346.7 346.7 346.7s346.7-155.5 346.7-346.7c0-115.7-57.2-223.2-152.9-287.6-11.4-7.7-14.5-23.2-6.8-34.6 7.7-11.4 23.2-14.5 34.6-6.8 109.6 73.6 175 196.6 175 329 0 218.7-177.9 396.6-396.6 396.6z m0 0" fill="#2197EF" p-id="3118"></path></svg>
        </div>
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
  background-image: url("../assets/bg_left.png"), url("../assets/bg_right.png");
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
import NewTop from "../components/NewTop.vue";
import global from "../components/global.vue";
export default {
  data() {
    return {
      src: "",
      uname: "",
      email: "",
      sex: "",
      birthday: "",
      phone: "",
      qq: "",
      wechat: "",
      // pic
    };
  },
  components: {
    NewTop,
  },
  methods: {
    f: function () {
      this.$router.push("/UpdInfo");
    },
    uploadImg() {
      let tmp = this.$refs.input.files;
      // console.log(tmp[0])
      if (tmp.length === 0) {
        this.inputValue = null;
      } else {
        this.showImage(tmp[0]);
        this.pic = tmp[0];
        // this.src=require(img.src);
      }
    },
    showImage(img) {
      let reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        this.src = reader.result.toString();
      };
    },
    saveImg: function () {
      var url = global.url + "/upload";
      let bodyFormData = new FormData();
      bodyFormData.append("file", this.pic);
      bodyFormData.append("uid", localStorage.getItem("uid"));
      // console.log(this.pic)
      this.$http.post(url, bodyFormData).then((res) => {
        if (res.data.code === 1) {
          this.message({
              message: '保存成功!',
              type: 'success'
          })
        } else {
          alert(res.data.msg);
        }
      });
    },
    logout() {
        this.$confirm('确定要退出登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '成功退出!'
          });
          localStorage.removeItem('email')
          localStorage.removeItem('uid')
          this.$router.replace('/Login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消操作!'
          });          
        });
        
    }
  },
  mounted() {
    this.src = global.url + "/images2/" + localStorage.getItem("uid") + ".jpg";
    var url = global.url + "/user/findByEmail/" + localStorage.getItem("email");
    this.$http.get(url).then((res) => {
      console.log(res.data);
      this.uname = res.data.data[0].uname;
      this.email = res.data.data[0].email;
      this.phone = res.data.data[0].phone;
      this.sex = res.data.data[0].sex;
      this.birthday = res.data.data[0].birthday;
      this.qq = res.data.data[0].qq;
      this.wechat = res.data.data[0].wechat;
    });
  },
};
</script>
