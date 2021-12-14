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
            <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
                <div class="event_box_wap event_animate_right">
                    <div class="event_box_img">
                        <img src="../../static/assets/images/templatemo_event_02.jpg" class="img-responsive" alt="太阳月亮星辰纹" />
                    </div>
                    <div class="event_box_caption">
                        <h1>蝴蝶长寿花纹</h1>
                        <p><span class="glyphicon glyphicon-map-marker"></span> 壮族 &nbsp;&nbsp; </p>
                        <p>由三块窄幅织锦拼接而成的壮族被面，红色为地，黄、绿、米、粉等颜色显示花纹，一派热闹景象。连续不断的雷纹构成菱形骨架， 主体纹样为抽象蝶纹，但仍可以清晰分辨出身体、翅膀、触角和眼睛；菊花纹以六边形为花蕊，浅黄色几何形块面为花瓣，生动形象。</p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
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
            <div class="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-0">
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
            this.$router.push('/Exhibition')
            window.scrollTo(0,0);
        }
    }
}
</script>