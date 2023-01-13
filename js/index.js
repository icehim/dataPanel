//利用安全模式/沙盒模式来写js代码
//利用子调用函数，形成毒理作用，保证每个模块的代码都不会互相影响
//自调用函数一定要加上分号

//监控区域的js代码
(function () {
    //1.给筛选按钮设置点击时间
    $('.tabs a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')

        //3.切换列表显示的数据
        let index = $(this).index();
        $('.content').eq(index).show().siblings('.content').hide()
    })
})();

//点位区域的js代码
(function () {

})();
