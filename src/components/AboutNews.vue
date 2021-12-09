<template>
    <div id="templatemo_about" class="container_wapper">
        <div class="container-fluid">
            <About></About>
            <div class="clearfix testimonial_top_bottom_spacer"></div>
            <div class="col-xs-1 pre_next_wap" id="prev_testimonial">
                <a href="#"><span class="glyphicon glyphicon-chevron-left pre_next"></span></a>
            </div>
            <News></News>
            <div class="col-xs-1 pre_next_wap" id="next_testimonial">
                <a href="#"><span class="glyphicon glyphicon-chevron-right pre_next"></span></a>
            </div>
            <div class="clearfix testimonial_top_bottom_spacer"></div>
        </div>
    </div><!--templatemo_about-->
</template>

<script>
import News from './News.vue'
import About from './About.vue'
export default {
    components: {
        News, 
        About
    }
}
</script>