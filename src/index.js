(function (global) {
/* component start*/
Vue.component('float-tip', {
    template: '#float-tip-template',
    data: function () {
        return {
            childVisible: true,
            childPopupVisible: false,
        }
    },
    methods: {
        childDownload: function () {
            var ua = navigator.userAgent.toLocaleLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                this.childPopupVisible = true;
            } else {
                location.href = 'http://itunes.apple.com/cn/app/da-cang/id1080860264?ls=1&mt=8';
            }
        },
        childClose: function () {
            this.childVisible = false;
        },
        childCloseSafariTip: function () {
            this.childPopupVisible = false;
        }
    }
})
new Vue({
  el:'#sample'
})

/* component end*/
}(window))
