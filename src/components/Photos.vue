<template>
    <div id="templatemo_events" class="container_wapper">
        <div class="container-fluid">
            <h1>Events</h1>
            <div @click="toExhibition1" class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
                <div class="event_box_wap event_animate_left">
                    <div class="event_box_img">
                        <img src="../../static/assets/images/templatemo_event_01.jpg" class="img-responsive" alt="阳雀花纹" />
                    </div>
                    <div class="event_box_caption">
                        <h1>卷草纹</h1>
                        <p><span class="glyphicon glyphicon-map-marker"></span> 蒙古族 &nbsp;&nbsp; </p>
                        <p>卷草纹是中国传统图案之一。多取忍冬、荷花、兰花、牡丹等花草，经处理后作“S”形波状曲线排列，构成二方连续图案，花草造型多曲卷圆润，通称卷草纹。因盛行于唐代故名唐草纹。</p>
                    </div>
                </div>
            </div>
            <div @click="toExhibition3" class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
                <div class="event_box_wap event_animate_right">
                    <div class="event_box_img">
                        <img src="../../static/assets/images/templatemo_event_02.jpg" class="img-responsive" alt="太阳月亮星辰纹" />
                    </div>
                    <div class="event_box_caption">
                        <h1>回纹</h1>
                        <p><span class="glyphicon glyphicon-map-marker"></span> 蒙古族 &nbsp;&nbsp; </p>
                        <p>回纹，又称回字纹。是被中国民间称为富贵不断头的一种纹样。常见于新石器时代的彩陶器和商周青铜时代的青铜器上。它是由古代陶器和青铜器上的雷纹衍化来的几何纹样，因为它是由横竖短线折绕组成的方形或圆形的回环状花纹，形如“回”字，所以称做回纹。</p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div @click="toExhibition2" class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
                <div class="event_box_wap event_animate_left">
                    <div class="event_box_img">
                        <img src="../../static/assets/images/templatemo_event_03.jpg" class="img-responsive" alt="八角花和四合花" />
                    </div>
                    <div class="event_box_caption">
                        <h1>八角星纹</h1>
                        <p><span class="glyphicon glyphicon-map-marker"></span> 苗族 &nbsp;&nbsp; </p>
                        <p>此纹样取自贵州黄平的背儿带的局部，采用拉锁绣、平绣、挑花等多种技法，纹样包括四朵花瓣构成的四合花纹、八角花纹等，以棕色为地，刺绣色彩为宝蓝、红、紫等。花瓣圆润的四合花分布在棱角分明的八角花与几何勾纹形成的正方形骨架中，方中有圆，圆中有方，整体图案呈四方连续排列。</p>
                    </div>
                </div>
            </div>
            <div @click="toExhibition4" class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
                <div class="event_box_wap event_animate_right">
                    <div class="event_box_img">
                        <img src="../../static/assets/images/templatemo_event_04.jpg" class="img-responsive" alt="八角花纹" />
                    </div>
                    <div class="event_box_caption">
                        <h1>树纹</h1>
                        <p><span class="glyphicon glyphicon-map-marker"></span> 瑶族 &nbsp;&nbsp; </p>
                        <p>此纹样取自云南河口红头瑶女长衣的局部，中间长方形框内由白、橘两色搭配构成近似菱形的树形状，树的两侧装饰卍字纹，单位纹样呈二方连续。长方形外围左右两侧及上部为禾苗纹和呈波浪状的几何纹样，下部白色几何纹为鸡冠花。整幅图案呈中心对称，严密均齐。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        toExhibition1: function() {
            localStorage.setItem("now", 1)
            this.$router.push('/Exhibition1')
            window.scrollTo(0,0);
        },
        toExhibition2: function() {
            localStorage.setItem("now", 2)
            this.$router.push('/Exhibition2')
            window.scrollTo(0,0);
        },
        toExhibition3: function() {
            localStorage.setItem("now", 3)
            this.$router.push('/Exhibition3')
            window.scrollTo(0,0);
        },
        toExhibition4: function() {
            localStorage.setItem("now", 4)
            this.$router.push('/Exhibition4')
            window.scrollTo(0,0);
        }
    }
}
</script>