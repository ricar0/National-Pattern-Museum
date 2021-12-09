<template>
<div>
    <div class="banner" id="templatemo_banner_slide">
        <ul>
            <li class="templatemo_banner_slide_01">
                <div class="slide_caption">
                    <!-- <h1>National Pattern Museum</h1> -->
                    <!-- <p>Aenean diam libero, venenatis eu risus eu, tincidunt porttitor orci. Praesent sit amet auctor erat, vitae auctor dolor. Sed viverra nunc magna, quis placerat augue pellentesque quis. Sed nec pellentesque dolor.</p> -->
                </div>
            </li>
        </ul>
    </div>
    <div id="templatemo_mobile_menu">
        <ul class="nav nav-pills nav-stacked">
            <li><a href="#templatemo_banner_slide"><i class="glyphicon glyphicon-home"></i> &nbsp; Home</a></li>
            <li><a href="#templatemo_about"><i class="glyphicon glyphicon-briefcase"></i> &nbsp; About</a></li>
            <li><a href="#templatemo_events"><i class="glyphicon glyphicon-bullhorn"></i> &nbsp; Events</a></li>
            <li><a href="#templatemo_timeline"><i class="glyphicon glyphicon-calendar"></i> &nbsp; Timeline</a></li>
            <li><a href="#templatemo_contact"><i class="glyphicon glyphicon-calendar"></i>&nbsp; Contact</a></li>
        </ul>
    </div>
    <Top></Top>
    <AboutNews></AboutNews>
    <Photos></Photos>
    <!-- <TimeLine></TimeLine> -->
    <!-- <Contact></Contact> -->
    <div id="templatemo_footer">
        <div>
            <p id="footer">Copyright &copy; 2084 Company Name</p>
        </div>
    </div>
</div>
</template>

<script>
import Top from '../components/Top.vue'
import AboutNews from '../components/AboutNews.vue'
import Photos from '../components/Photos.vue'
import TimeLine from '../components/TimeLine.vue'
import Contact from '../components/Contact.vue'
export default {
    components: {
        Top,
        Photos,
        TimeLine,
        Contact,
        AboutNews
    },
    mounted: function() {
        if (location.href.indexOf("#reloaded") == -1) {
            location.href = location.href + "#reloaded";
            location.reload();
        }
    },
}
</script>