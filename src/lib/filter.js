import Vue from 'vue'
    Vue.filter('time', function (value) {
        return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    })