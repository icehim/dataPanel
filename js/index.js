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

// 订单区域的js代码
(function () {
    //0.假数据
    //数组的数据通过小标获取
    //对象的数据通过key获取
    let data = {
        day365: {orders: '20,301,987', amount: '99834'},
        day90: {orders: '301,987', amount: '9834'},
        day30: {orders: '1,987', amount: '3834'},
        day1: {orders: '987', amount: '834'}
    }

    //1.给筛选a标签设置点击事件
    $('.filter a').on('click', function () {
        //2.修改当前按钮的高亮效果
        $(this).addClass('active').siblings().removeClass('active');
        //3.获取当前a标签的自定义属性flag值
        let flag = $(this).attr('flag');
        //4.获取对应的数据
        // 获取对象成员的方法:点语法 / 中括号key
        let flagData = data[flag]
        //5.将对应的数据渲染到指定结构
        $('.order .item h4').eq(0).text(flagData.orders)
        $('.order .item h4').eq(1).text(flagData.amount)

        //9.当点击a标签的时候，应该同步定时器中的index
        index = $(this).index()
    })
    //6.设置定时器，让定时器轮流点击a标签
    let index = 0
    let timeId = setInterval(function () {
        index++
        if (index > 3) index = 0
        //7.轮流点击不同下标的a标签
        $('.filter a').eq(index).click()
    }, 1500)
    //8.设置hover事件
    $('.order').hover(
        function () {
            clearInterval(timeId)
        },
        function () {
            let timeId = setInterval(function () {
                index++
                if (index > 3) index = 0
                //7.轮流点击不同下标的a标签
                $('.filter a').eq(index).click()
            }, 1500)
        }
    )

})();

//销售区域的js代码
(function () {
    //0.准备假数据
    let data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }

    // 1. 实例化对象
    let myCharts = echarts.init(document.querySelector(".line"));

    // 2. 指定配置和数据
    let option = {
        tooltip: {
            trigger: "axis"
        },
        // 图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        // 设置网格样式
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
            name: '预期销售额',
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            type: 'line',
            // 折线修饰为圆滑
            smooth: true,
        }, {
            name: '实际销售额',
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            type: 'line',
            smooth: true,
        }]
    };

    // 3. 把配置和数据给实例对象
    myCharts.setOption(option);

    //4.筛选a标签设置点击事件
    $('.caption a').on('click', function () {
        $(this).addClass('active').siblings('a').removeClass('active')
        //注意:在点击事件的内部，a标签的起始下标是1
        index = $(this).index() - 1
        //8.获得当前a标签的自定义属性
        let flag = $(this).attr('flag');
        let flagData = data[flag]
        option.series[0].data = flagData[0]

        option.series[1].data = flagData[1]
        myCharts.setOption(option)

    })
    //5.设置定时器，轮流点击a标签
    let index = 0;
    let timeId = setInterval(function () {
        index++
        if (index > 3) index = 0
        //6.让对应a标签被点击
        $('.caption a').eq(index).click()
    }, 2000)
    //7.设置盒子的hover事件
    $('.sales').hover(
        function () {
            clearInterval(timeId)
        },
        function () {
            timeId = setInterval(function () {
                index++
                if (index > 3) index = 0
                //6.让对应a标签被点击
                $('.caption a').eq(index).click()
            }, 2000)
        }
    )
})();

//渠道分布的js代码
(function () {
    // 1. 实例化对象
    let myCharts = echarts.init(document.querySelector(".radar"));
    // 2.指定配置

    let option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ["60%", "10%"]
        },
        radar: {
            indicator: [
                {name: "机场", max: 100},
                {name: "商场", max: 100},
                {name: "火车站", max: 100},
                {name: "汽车站", max: 100},
                {name: "地铁", max: 100}
            ],
            // 修改雷达图的大小
            radius: "65%",
            shape: "circle",
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [
            {
                name: "北京",
                type: "radar",
                // 填充区域的线条颜色
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[90, 19, 56, 11, 34]],
                // 设置图形标记 （拐点）
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 5,
                // 设置小圆点颜色
                itemStyle: {
                    color: "#fff"
                },
                // 让小圆点显示数据
                label: {
                    show: true,
                    fontSize: 10
                },
                // 修饰我们区域填充的背景颜色
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                }
            }
        ]
    };
    // 3.把配置和数据给对象
    myCharts.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myCharts.resize();
    });
})();

//进度区域的js代码
(function () {
    // 1. 实例化图表对象
    let myCharts = echarts.init(document.querySelector('.gauge'));

    // 2. 准备配置项属性
    let option = {
        series: [{
            type: 'pie',
            radius: ['130%', '150%'],
            // 移动下位置  套住50%文字
            center: ['48%', '75%'],
            // 鼠标经过不变大
            hoverOffset: 0,
            labelLine: {
                show: false
            },
            // 起始角度，支持范围[0, 360]
            startAngle: 180,
            data: [
                {
                    value: 150,
                    itemStyle: {
                        // 颜色渐变
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                offset: 0,
                                color: "#00c9e0"
                            }, // 0 起始颜色
                                {
                                    offset: 1,
                                    color: "#005fc1"
                                } // 1 结束颜色
                            ]
                        )
                    }
                },
                {
                    value: 50,
                    itemStyle: {
                        color: '#12274d'
                    }
                },
                {
                    value: 200,
                    itemStyle: {
                        color: 'transparent'
                    }
                }

            ]
        }]
    };

    // 3. 将配置项指定给容器对象
    myCharts.setOption(option);
})();

//热门排行的js代码

// 热门排行的js代码
(function () {
    // 1. 准备假数据
    let hotData = [
        {
            city: '北京',  // 城市
            sales: '25, 179',  // 销售额
            flag: true, //  上升还是下降
            // 以上三个数据,是外层数据
            brands: [   //  品牌种类数据
                {name: '可爱多', num: '9,086', flag: true},
                {name: '娃哈哈', num: '8,341', flag: true},
                {name: '喜之郎', num: '7,407', flag: false},
                {name: '八喜', num: '6,080', flag: false},
                {name: '小洋人', num: '6,724', flag: false},
                {name: '好多鱼', num: '2,170', flag: true},
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                {name: '可爱多', num: '3,457', flag: false},
                {name: '娃哈哈', num: '2,124', flag: true},
                {name: '喜之郎', num: '8,907', flag: false},
                {name: '八喜', num: '6,080', flag: true},
                {name: '小洋人', num: '1,724', flag: false},
                {name: '好多鱼', num: '1,170', flag: false},
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                {name: '可爱多', num: '2,345', flag: true},
                {name: '娃哈哈', num: '7,109', flag: true},
                {name: '喜之郎', num: '3,701', flag: false},
                {name: '八喜', num: '6,080', flag: false},
                {name: '小洋人', num: '2,724', flag: false},
                {name: '好多鱼', num: '2,998', flag: true},
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                {name: '可爱多', num: '2,156', flag: false},
                {name: '娃哈哈', num: '2,456', flag: true},
                {name: '喜之郎', num: '9,737', flag: true},
                {name: '八喜', num: '2,080', flag: true},
                {name: '小洋人', num: '8,724', flag: true},
                {name: '好多鱼', num: '1,770', flag: false},
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                {name: '可爱多', num: '9,567', flag: true},
                {name: '娃哈哈', num: '2,345', flag: false},
                {name: '喜之郎', num: '9,037', flag: false},
                {name: '八喜', num: '1,080', flag: true},
                {name: '小洋人', num: '4,724', flag: false},
                {name: '好多鱼', num: '9,999', flag: true},
            ]
        }
    ]

    // 2. 根据数据,生成各省热销li标签结构
    let supStr = '';
    $.each(hotData, function (index, value) {
        supStr += `
        <li>
            <span>${value.city}</span>
            <span>${value.sales} <s class=${value.flag ? "icon-up" : "icon-down"}></s></span>
        </li>
    `
    })
    // console.log(supStr);
    // 3. 将生成的结构渲染到指定容器
    $('.sup').html(supStr);

    // 4. 给各省排行的li标签设置点击事件
    $('.sup li').on('click', function () {
        // 5. 修改当前标签类名
        $(this).addClass('active').siblings().removeClass('active');

        // 6. 获得当前城市对应的品牌数据
        let brands = hotData[$(this).index()].brands;
        // console.log(brands);

        // 7. 根据获得数据,生成sub中的li标签
        let subStr = '';
        $.each(brands, function (index, value) {
            subStr += `
           <li>
                <span>${value.name}</span>
                <span>${value.num} <s class=${value.flag ? "icon-up" : "icon-down"}></s></span>
           </li>
           `
        })
        // console.log(subStr);
        // 8. 将生成的结构渲染到指定容器
        $('.sub').html(subStr);

        // 注意,将当前按钮的下标与index同步
        index = $(this).index();
    })

    // 需要注意index的声明位置
    // 不要出现还没有声明就提前使用的错误
    let index = 0;

    // 加载的时候,默认点击第0个li标签
    $('.sup li').eq(0).click();

    // 9. 设置定时器

    let timeID = setInterval(function () {
        index++;
        if (index > 4) index = 0;
        $('.sup li').eq(index).click();
    }, 1000)

    // 10. 设置盒子的hover事件
    $('.top').hover(
        function () {
            clearInterval(timeID);
        },
        function () {
            timeID = setInterval(function () {
                index++;
                if (index > 4) index = 0;
                $('.sup li').eq(index).click();
            }, 1000)
        }
    )
})();
