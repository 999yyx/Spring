import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import iconfont from "@/font_kwzmfxvl5r9/iconfont.css"

Vue.config.productionTip = false
    //歌手
Vue.filter('singers', function(value) {
        let singer = "";
        if (value.song) {

            if (value.song.artists.length > 1) {
                value.song.artists.forEach(item => {
                    singer += item.name + "/";
                });
                return singer.slice(0, -1);
            } else {
                return value.song.artists[0].name;
            }
        } else if (value.ar) {
            if (value.ar.length > 1) {
                value.ar.forEach(item => {
                    singer += item.name + "/";
                })
                return singer.slice(0, -1);
            } else {
                return value.ar[0].name;
            }

        } else {
            if (value.artists.length > 1) {
                value.artists.forEach(item => {
                    singer += item.name + "/";
                })
                return singer.slice(0, -1);
            } else {
                return value.artists[0].name;
            }

        }
    })
    //歌曲別名
Vue.filter("anotherName", function(value) {
        let anotherName = ""
        if (value.song) {
            if (value.song.alias.length > 0) {
                anotherName = "(" + value.song.alias[0] + ")";
            } else {
                anotherName = "";
            }
            return anotherName;
        } else if (value.al) {


            if (value.al.length > 0) {
                anotherName = "(" + value.al[0] + ")";
            } else {
                anotherName = "";
            }
            return anotherName;
        } else {
            if (value.alias.length > 0) {
                anotherName = "(" + value.alias[0] + ")";
            } else {
                anotherName = "";
            }
            return anotherName;
        }
    })
    // picture
Vue.filter("pic", function(value) {
    if (value.picUrl) {
        return value.picUrl
    } else if (value.al) {
        return value.al.picUrl
    } else {
        return value.artists[0].img1v1Url
    }
})

// albumName
Vue.filter("albumName", function(value) {

    if (value.song) {
        return value.song.album.name;
    } else if (value.al) {
        return value.al.name;
    } else {
        return value.album.name;
    }
})





new Vue({
    router,
    render: h => h(App)
}).$mount('#app')