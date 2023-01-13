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
    //4.将复制一份marquee中所有的子元素
    $('.marquee').each(function () {
        let rows = $(this).children().clone()
        //5.将克隆的元素追加到marquee中
        $(this).append(rows)
    })
})();

//点位区域的js代码
(function () {
    //1.实例化图标容器对象
    let myCharts = echarts.init(document.querySelector('.pie'))
    //2.准备配置项数据
    let option = {
        // 控制图表颜色
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: "radius",
                itemStyle: {
                    borderRadius: 5
                },
                // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
                label: {
                    fontSize: 10
                },
                labelLine: {
                    // 连接扇形图线长
                    length: 6,
                    // 连接文字线长
                    length2: 8
                },
                data: [
                    {value: 20, name: '云南'},
                    {value: 26, name: '北京'},
                    {value: 24, name: '山东'},
                    {value: 25, name: '河北'},
                    {value: 20, name: '江苏'},
                    {value: 25, name: '浙江'},
                    {value: 30, name: '四川'},
                    {value: 42, name: '湖北'}
                ]
            }
        ]
    };
    //3.将配置项属性指定给容器
    myCharts.setOption(option)

    //4.监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myCharts.resize();
    });
})();


// 用户数据js代码
(function () {
    // 1. 实例化图标对象
    let myCharts = echarts.init(document.querySelector('.bar'));

    // 单独准备省略柱子的样式对象
    let item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        },
    }

    // 2. 准备配置项数据
    let option = {
        // 修改线性渐变色方式 1
        color: new echarts.graphic.LinearGradient(
            // (x1,y1) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [{
                offset: 0,
                color: '#00fffb'
            }, // 0 起始颜色
                {
                    offset: 1,
                    color: '#0061ce'
                } // 1 结束颜色
            ]
        ),
        //提示框组件
        tooltip: {
            trigger: 'item',
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        // 直角坐标系内绘图网格（区域）
        grid: {
            top: '3%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: {
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: true,
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            // x坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, .3)',
                    // width:8,  // x轴线的粗细
                    // opacity: 0.3,  //如果不想显示x轴线 则改为 0
                }
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                // 不显示刻度
                show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                }
            },
            // y轴 分割线的样式
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },
        series: [{
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
            type: 'bar',
            barWidth: '60%'
        }]
    };

    // 3. 将配置项数据指定给容器
    myCharts.setOption(option);

    // 4. 监听屏幕宽度的变化,重新加载图表
    window.addEventListener('resize', function () {
        // 重新加载图表
        myCharts.resize();
    })
})();
