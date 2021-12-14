<script type="text/javascript">
import qs from 'qs'
export default {
  data() {
    return {
        user: {
            pid: '',
            pplaceshi: '',
            ptsnian: '',
            pname: '',
        }
    }
  },
  methods:{
    data() {
            var url='http://localhost:8181/pic'
            this.$http.post(
                url,
                qs.stringify ({
                    pid: this.pid
                    pplaceshi: this.pplaceshi
                    ptsnian: this.ptsnian
                    pname: this.pname
                })
            ).then(res => {
                console.log(res)
                if (res.data === 1) {
                    this.$router.replace('/')
                    localStorage.setItem("token", this.)
                    //alert("success")
                } else {
                    //alert("success")
                }
            }).catch(error => {
                console.log(error)
            })
        }
        findimg: function() {
            return{
                    pid: this.pid
                    pplaceshi: this.pplaceshi
                    ptsnian: this.ptsnian
                    pname: this.pname
            }
        },
    }
}
</script>
