var app = app || {};

/*-- html5-template
====================================================== */
app.template = function(){};

/* loader */
app.template.loader = function(){};
app.template.loader.init = function(){
	// loader
  var getSource = function(){
        var res = [];

        return res;
    }

    new mo.Loader(getSource(),{
        loadType : 1,
        minTime : 100,
        onLoading : function(count,total){
            // console.log('onloading:single loaded:',arguments)
            $(".loader h1").html(''+Math.round(count/total*100)+'%');
        },
        onComplete : function(time){
            // console.log('oncomplete:all source loaded:',arguments);
            app.template.loader.destory();
            app.template.loader.done_callback.call();
            app.template.loader.done_callback2.call();
        }
    });
};

//loading页帧动画
// app.template.loader.show_animation = function(){
//           var resource = ["images/load/1.png"  
//                          , "images/load/2.png"  
//                          , "images/load/3.png"  
//                          , "images/load/4.png"  
//                          , "images/load/5.png" 
//                          , "images/load/6.png"  
//                          , "images/load/7.png" 
//                          , "images/load/8.png"  
//                          , "images/load/9.png" 
//                          , "images/load/10.png"  
//                          , "images/load/11.png"  
//                          , "images/load/12.png"  
//                          , "images/load/13.png" 
//                          , "images/load/14.png"  
//                          , "images/load/15.png" 
//                          , "images/load/16.png"  
//                          , "images/load/17.png"
//                          , "images/load/18.png" 
//                          , "images/load/19.png"  
//                          , "images/load/20.png"
//                       ];  
      
//           $('#loader-e-1').html("");  
//           var multiplePic = new mo.Film(document.querySelector('#loader-e-1'),{  
//               resource : resource,  
//               totalFrame : 20,  //帧数
//               playTime: 500  
//           });  
//           multiplePic.play(100);//每帧播放时间差  
// };  

app.template.loader.done_callback = function(){};
app.template.loader.done_callback2 = function(){};

app.template.loader.destory = function(){
    $(".loading").remove();
};

/* Landscape */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });
};

/* pageslide swiper */
app.template.swiper = function(){};
app.template.swiper.mySwiper = {};
app.template.swiper.init = function(){
	app.template.loader.done_callback = app.template.swiper.bind;
};
app.template.swiper.bind = function(){
    $(".swiper-container").css("display", "block");

    app.template.swiper.mySwiper = new Swiper ('.swiper-container', {
        speed:500,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        // direction : 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画 

            app.template.swiper.on_pageslideend(0);
        }, 
        onSlideChangeStart: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

            app.template.swiper.on_pageslideend(swiper.activeIndex);
            app.template.swiper.mySwiper.lockSwipes();
        } 
    });

    app.template.swiper.lock();
};
app.template.swiper.lock = function(){
	app.template.swiper.mySwiper.lockSwipes();
};
app.template.swiper.on_pageslideend = function(index){};

app.template.swiper.next = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideNext();
};

app.template.swiper.prev = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slidePrev();
};

app.template.swiper.to = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
};

app.template.swiper.touch = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
};

app.template.touch = function(){};

app.template.touch.eventlistener_handler = function(e){

    //e.stopPropagation();  // 阻止事件传递
    e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
};

app.template.touch.init = function(){

    // fastclick
    FastClick.attach(document.body);

    document.body.addEventListener("touchmove", app.template.touch.eventlistener_handler, false);

    $("body").on("doubleTap longTap swipeLeft swipeRight", function(e){
        // e.stopPropagation();  // 阻止事件传递
        // e.preventDefault();   // 阻止浏览器默认动作(网页滚动)
        return false;
    });
};


app.template.data = {};
app.template.data.add = function(key, value){
    app.template.data[key] = value;
};
app.template.data.get = function(key){
    return app.template.data[key];
};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
	var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    app.debug.console("userAgent:" + u);

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- debug
====================================================== */
app.debug = function(){};
app.debug.enable = false;
app.debug.maxline = 5;
app.debug.linecount = 0;
app.debug.console = function(str){
    if(app.debug.enable)
    {
        app.debug.linecount ++;

        if($("#debug").length > 0)
        {
            if(app.debug.linecount > app.debug.maxline)
            {
                app.debug.linecount = 0;
                $("#debug").html("<br/> #" + str);
            }
            else
                $("#debug").append("<br/> #" + str);
        }else
        {
            $("body").append("<div id='debug' class='debug'></div>");
            $("#debug").append("<br/> #" + str);
        }
    }
};


/*-- audio player
====================================================== */
app.audio = function(){};
app.audio.player = undefined;
app.audio.status = "";
app.audio.init = function(){
    app.audio.player = $("#audio-player");

    $(".audio-icon").on("touchend", function(){
        if(app.audio.player[0].paused)
        {
            app.audio.play();
            $(".audio-icon").removeClass("audio-icon-stop");
        }
        else
        {
            app.audio.pause();
            $(".audio-icon").addClass("audio-icon-stop");
        }
    });

    app.template.loader.done_callback2 = app.audio.show;
};


app.audio.show = function(){
    $(".audio-icon").css({"display": "block"});
    $(".audio-icon").addClass("audio-icon-animation");
    app.audio.play();
};

app.audio.play = function(){
    $(".audio-icon").removeClass("audio-icon-stop");
    app.audio.player[0].play();
    if(!app.audio.player[0].paused)
        app.audio.status = "play";
};

app.audio.pause = function(){
    app.audio.status = "pause";
    app.audio.player[0].pause();
};

app.audio.pause_bysystem = function(){
    app.audio.status = "pause_bysystem";
    app.audio.player[0].pause();
};

app.audio.stop = function(){
    app.audio.player.attr("src", "");
    app.audio.player[0].load();
};

app.audio.changesong = function(src){
    app.audio.player.attr("src", src);
    app.audio.player[0].load();

    if(app.audio.status == "play")
       app.audio.play(); 
};
/*-- p1
====================================================== */
app.p1 = function(){};
app.p1.init = function(){};
app.p1.bind_touch_event = function(){
    
    $(".p1 .btn1").on("touchend", function(){
          app.template.swiper.next(); 
    }); 
     $(".p1 .btn2").on("touchend", function(){
          app.p2.show_layout ();
    });     
};

app.p1.destory = function(){};

/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){};
app.p2.bind_touch_event = function(){
    
    $(".p2 .btn1").on("touchend", function(){
          app.p2.show_layout ();
    }); 
     $(".p2 .btn2").on("touchend", function(){
          app.template.swiper.prev(); 
    });     
};

app.p2.show_layout = function(){
     window.overlay1 = new mo.Overlay({
        content: '<img src="img/f1.png" alt="" class="m-p1-1"><img src="img/transparent.png" alt="" class="m-p2-2"><img src="img/transparent.png" alt="" class="m-p2-3">', 
        width: 549,
        height: 996
    });
    overlay1.on('open', function(){
        $('.m-p2-2').on('touchend', function(){
            window.overlay1.close();
            app.template.swiper.to(2) ;  
        });
    });
    overlay1.on('open', function(){
        $('.m-p2-3').on('touchend', function(){
            window.overlay1.close();
        });
    });
} 
app.p2.destory = function(){};

/*-- p3
====================================================== */
app.p3 = function(){};
app.p3.init = function(){
        if (j>3) {
            $("input[id=e-1-1]").attr('disabled','disabled');
        }  
};
var j=4;
app.p3.bind_touch_event = function(){

    $(".e-1-1").on("touchend", function(){
        if(groups=5){
            j++;
            if (j>3) {
                alert("抱歉，5公里报名人数已满")
                // $(".e-1-1").attr("checked","false");
            }  
        }            
    });

   $(".p3 .btn1").on("touchend", function(){   
        if ($("#e-1-1").is(":checked")||$("#e-1-2").is(":checked")&&$("#e-2").val() !== ""&&$("#e-3-1").is(":checked")||$("#e-3-2").is(":checked")&&$("#e-4").val() !== ""&&$("#e-5").val() !== ""&&$("#e-6").val() !== ""&&$("#e-7").val() !== ""&&$("#e-8").val() !== ""&&$("#e-9").val() !== ""&&$(".p3 .hit").html("") ){
            app.template.swiper.next();           
        }else{
            app.p3.show_layout();
        }; 
   });
   $(".p3 .btn2").on("touchend", function(){
            app.template.swiper.prev();
        });        
};
var patt1;
$("#e-5").on("change",function() {
   if($("#e-9").val()=="0"){
        patt1 = new RegExp(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/);
        if (!patt1.test(this.value)) {
            $(".p3 .hit").html("请输入正确的身份证号码!");         
         }else{    
            $(".p3 .hit").html("");         
         }
   } else if ($("#e-9").val()=="1"){
        patt1 = new RegExp(/^[a-zA-Z0-9]{5,17}$/);
        if (!patt1.test(this.value)) {
            $(".p3 .hit").html("请输入正确的护照号码!");         
         }else{    
            $(".p3 .hit").html("");    
         }
   } else if ($("#e-9").val()=="2"){
        patt1 = new RegExp(/^[a-zA-Z0-9]{5,17}$/);
        if (!patt1.test(this.value)) {
            $(".p3 .hit").html("请输入正确的台胞证号码!");         
         }else{    
            $(".p3 .hit").html("");       
         }
    }    
});
var patt2 = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
$("#e-6").on("change",function(){    
    if (!patt2.test(this.value)) {
         $(".p3 .hit").html("请输入正确的11位手机号码!");   
    }else{
         $(".p3 .hit").html("") ;            
    }
});
$("#e-8").on("change",function(){
    if (!patt2.test(this.value)) {
         $(".p3 .hit").html("请输入正确的11位手机号码!") ;  
    }else{            
         $(".p3 .hit").html("") ;
    }
});   
       
app.p3.show_layout = function(){
    window.overlay2 = new mo.Overlay({
        content: '<img src="img/f2.png" alt="" class="m-p3-1"><img src="img/transparent.png" alt="" class="m-p3-2">', 
        width: 549,
        height: 996
    });
    overlay2.on('open', function(){
        $('.m-p3-2').on('touchend', function(){
            window.overlay2.close();     
        });
     });
};

app.p3.destory = function(){};

/*-- p4
====================================================== */
app.p4 = function(){};
app.p4.init = function(){};

app.p4.bind_touch_event = function(){
    $(".p4 .btn2").on("touchend", function(){
        app.template.swiper.prev(); 
    });  
    $(".p4 .btn1").on("touchend", function(){
        app.p5.judge();
        if($("#e-10-1").is(":checked")||$("#e-10-2").is(":checked")){
            app.p4.show_layout2();
            var paystatus=0;
            $(".m-p4-5").on("touchend", function(){
                $.post("db/adduser.php", {
                    groups: groups,
                    name: $("#e-2").val(),
                    sex: sex1,
                    age: $("#e-4").val(),
                    IDchange:$("#e-9").val(),
                    IDcard: $("#e-5").val(),
                    phone: $("#e-6").val(),
                    econtactp: $("#e-7").val(),
                    ephone: $("#e-8").val(),  
                    size:$("#e-11").val(),          
                    packages:packages1,  
                    paystatus:paystatus                  
                })
                app.template.swiper.next();
                window.overlay1.close();
            });
        }else{
                 app.p4.show_layout1(); 
        } 
    });  
};

app.p4.show_layout1 = function(){
    window.overlay1 = new mo.Overlay({
        content: '<img src="img/f4-1.png" alt="" class="m-p4-1"><img src="img/transparent.png" alt="" class="m-p4-2">', 
        width: 549,
        height: 996
    });
    overlay1.on('open', function(){
        $('.m-p4-2').on('touchend', function(){
            window.overlay1.close();     
        });
     });
};
app.p4.show_layout2 = function(){
    window.overlay1 = new mo.Overlay({
        content: '<img src="img/f4-2.png" alt="" class="m-p4-3"><img src="img/transparent.png" alt="" class="m-p4-4"><img src="img/transparent.png" alt="" class="m-p4-5">', 
        width: 549,
        height: 996
    });
    overlay1.on('open', function(){
        $('.m-p4-4').on('touchend', function(){
            window.overlay1.close();     
        });
    });
};

app.p4.destory = function(){};
app.p4.paystatus=function(){
    for(var i=0;i<=2000;i++)
    if(paystatus=="1"){
        var j=i+1;
    }
}

/*-- p5
====================================================== */
app.p5 = function(){};
app.p5.init = function(){
    app.p5.judge();
    $(".p5 .e-1").html(''+$("#e-2").val()+'');
    $(".p5 .e-2").html(''+sex+'');
    $(".p5 .e-3").html(''+groups+'公里');
    $(".p5 .e-4").html(''+packages+''); 
    $(".p5 .e-5").html(''+size+'');
    app.wechat.sharecontent_update();   
};
var sex;
var groups;
var packages;
var size;
var sex1;
var packages1;
app.p5.judge=function(){
    
    if ($("#e-3-1").is(":checked")){
         sex="男";
         sex1="0";
    }else{
         sex="女";
         sex1="1";
    }
    if ($("#e-1-1").is(":checked")){
         groups="5";
    }else{
         groups="10";
    }
    if ($("#e-10-1").is(":checked")){
         packages="普通赛事包";
         packages1="0";
    }else{
        packages="高级赛事包";
         packages1="1";
    }
    if($("#e-11").val()=="XS"){
        size="XS(160/82A)";       
    }else if($("#e-11").val()=="S"){
        size="S (165/84A)";
    }else if($("#e-11").val()=="M"){
        size="M(170/88A)";
    }else if($("#e-11").val()=="L"){
        size="L(175/92A)";
    }else if($("#e-11").val()=="XL"){
        size="XL(180/96A)";
    }else if($("#e-11").val()=="XXL"){
        size="XXL(185/100A)";
    }
};

app.p5.bind_touch_event = function(){
    $(".p5 .btn1").on("touchend", function(){         
        window.overlay3 = new mo.Overlay({
        content: '<img src="img/f3.png" alt="" class="m-p5-1"><img src="img/transparent.png" alt="" class="m-p5-2">', 
        width: 549,
        height: 996
        });
        overlay3.on('open', function(){
            $('.m-p5-2').on('touchend', function(){
                window.overlay3.close();     
            });
        });
    });
};

app.p5.destory = function(){
};

app.wechat=function(){};

app.wechat.sharecontent_update = function(){      
      var nickname=$NICKNAME;
      var sharecontent = {title: "茉莉跑", desc: "已经参加“茉莉跑”公益活动，你愿意和他一起为公益开跑吗？", moment: "已经参加“茉莉跑”公益活动，你愿意和他一起为公益开跑吗？"}
      app.wechat.sharecontent = {title: sharecontent.title,
                                 desc: nickname + sharecontent.desc,
                                 titleformoment: nickname + sharecontent.moment, 
                                 url: "http://www.createcdigital.com/molirun-h5app/share.php", 
                                 icon: "http://www.createcdigital.com/molirun-h5app/img/share.jpg"
      };
      app.wechat.set_sharecontent();
}

/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.audio = function(){};
fuckandroid.app.audio.play_tap = function(){
    //android不能同时播放连个音乐；
};
/*-- page init
====================================================== */
(function(){
    // 检测OS
    app.tools.platform.init();

    // 兼容android(如果开启android模式则重写响应函数用来)
    if(app.tools.platform.debug == "android"
     || app.tools.platform.os == "android")
    {
        app.audio.play_tap = fuckandroid.app.audio.play_tap;
    }

    // 框架
    app.template.touch.init();
    app.template.swiper.init();
    app.template.loader.init();
    app.template.Landscape.init();
    app.audio.init();
    //tracking.pv_byfrom();
    
    
    /* page init */
    app.template.swiper.on_pageslideend = function(index){
        switch(index)
        {
            case 0:
                app.p1.init();
                break;
            case 1:
                app.p1.destory();
                app.p2.init();
                break;
            case 2:
                app.p2.destory();
                app.p3.init();
                break;
            case 3:
                app.p3.destory();
                app.p4.init();
                break;
            case 4:
                app.p4.destory();
                app.p5.init();
                break;
            case 5:
                app.p5.destory();
                
                break;
        }
    };

    app.p1.bind_touch_event();
    app.p2.bind_touch_event();
    app.p3.bind_touch_event();
    app.p4.bind_touch_event();
    app.p5.bind_touch_event();
    
    app.debug.enable = false;

})();

