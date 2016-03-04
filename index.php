<!DOCTYPE html>
<html lang="en">
<head>
	<title>茉莉跑</title>
	<meta charset="UTF-8">
	<meta name="format-detection" content="telephone=no" />
	<meta name="viewport" content="width=640, user-scalable=no"/>
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta name="format-detection" content="telephone=no">

	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="js/swiper/swiper.min.css">
	<link rel="stylesheet" href="js/swiper/animate.min.css">
	<link rel="stylesheet" href="js/audioplayer/audioplayer.css">
</head>
<body>
<!-- loading -->
<div class="loading">
	<div id="loader-e-1" class="loader-e-1"></div>
	<div class="loader"><h1></h1></div>
</div>	
<!-- pagelist-->
<div class="swiper-container">
	<div class="swiper-wrapper">
		<div class="swiper-slide p1">
			<img class="bg1" src="img/p1.png" alt="">	
	                          <img src="img/transparent.png" alt="" class="btn1">
	                          <img src="img/transparent.png" alt="" class="btn2">																				
		</div>
		<div class="swiper-slide p2">
			<img src="img/p2.png" alt="">
			<img class="btn1" src="img/transparent.png" alt="">
                      		<img class="btn2" src="img/transparent.png" alt="">
		</div>
		<div class="swiper-slide p3">
			<img src="img/p3.png" alt="">
			<img class="btn1" src="img/transparent.png" alt="">
	                          <img class="btn2" src="img/transparent.png" alt="">
	                          <div class="e-1-1 con1"  id="e-1">
	                              <input type="radio" name="level" id="e-1-1" value="5" >
	                              <label for="e-1-1"></label>
	                          </div>
	                          <div class="e-1-2 con1">
	                               <input type="radio" name="level" id="e-1-2"  value="10">
	                               <label for="e-1-2"></label>	
	                          </div>	                              	                          
	                          <select name="size" class="e-11" id="e-11">
	                               <option value=""></option>
	                               <option value="XS">XS(160/82A)</option>
	                               <option value="S">S (165/84A)</option>
	                               <option value="M">M(170/88A)</option>
	                               <option value="L">L(175/92A)</option>
	                               <option value="XL">XL(180/96A)</option>
	                               <option value="XXL">XXL(185/100A)</option>
	                          </select>
	                          <input type="text" name="name" class="e-2 con2"  id="e-2" value="">
	                          <div class="e-3-1 con1"> 
	                              <input type="radio" name="sex" id="e-3-1" value="0">
	                              <label for="e-3-1"></label>	
	                          </div>
	                          <div class="e-3-2 con1">
	                              <input type="radio" name="sex"  id="e-3-2" value="1">
	                              <label for="e-3-2"></label>		
	                          </div>	                              
	                          <input type="text" name="age" class="e-4 con2" id="e-4" value="">
	                          <select name="IDchange" class="e-9" id="e-9">
	                               <option value=""></option>
	                               <option value="0">身份证</option>
	                               <option value="1">学生证</option>
	                               <option value="2">驾照</option>
	                          </select>
	                          <input type="text" name="IDcard" class="e-5 con2" id="e-5" value="">
	                          <input type="text" name="phone" class="e-6 con2" id="e-6" value="">
	                          <input type="text" name="econtactp" class="e-7 con2" id="e-7" value="">
	                          <input type="text" name="ephone" class="e-8 con2" id="e-8" value="">	                       
	                          <div class="hit" id="hit"></div>
    		</div>
    		<div class="swiper-slide p4">
			<img src="img/p4.png" alt="">
			<img class="btn1" src="img/transparent.png" alt="">
                      		<img class="btn2" src="img/transparent.png" alt="">
                      		<div class="e-10-1 con1"> 
	                              <input type="radio" name="package"  id="e-10-1" value="0">
	                              <label for="e-10-1"></label>
	                          </div>
	                          <div class="e-10-2 con1">
	                              <input type="radio" name="package" id="e-10-2"  value="1">
	                              <label for="e-10-2"></label>	
	                          </div>	                              
		</div>
		<div class="swiper-slide p5">
			<img src="img/p5.png" alt="">
			<img src="img/transparent.png" alt="" class="btn1">
			<p class="e-1 con"></p>
			<p class="e-2 con"></p>
			<p class="e-3 con"></p>
			<p class="e-4 con"></p>
			<p class="e-5 con"></p>		
		</div>
	</div>
</div>
<!--audio-->
<div class="audio-icon">
	<audio id="audio-player" src="media/BGM.mp3" preload="preload" loop="loop" />
	<audio id="audio-player-tap" src="media/tap.mp3" preload="preload" />
</div>

	<!--Script
====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/loader.min.js"></script>
<script src="js/motion/film.min.js"></script>
<script src="js/swiper/swiper.min.js"></script>
<script src="js/swiper/swiper.animate1.0.2.min.js"></script>
<script src="js/fastclick/fastclick.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/motion/overlay.min.js"></script>
<script src="js/app.js"></script>

<?php include_once 'wechat/weChatShareJS.php';?>
<script>
    var $OPENID = "<?php echo $_SESSION['openid'] ?>";
    var $HEADIMGURL = "<?php echo $_SESSION['img'] ?>";
    var $NICKNAME = "<?php echo $_SESSION['nickname'] ?>";
</script>
<!-- <img src="images/p8/bg8.png" class="hiddenimg" alt="" />
<img src="images/p8/1.png" class="hiddenimg" alt="" />
<img src="images/share/1.png" class="hiddenimg" alt="" />
<img src="images/share/2.png" class="hiddenimg" alt="" /> -->

</body>
</html>