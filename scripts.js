!function(e){var t={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",responsiveWidth:!1},r=e(window),a=e(document),n=[],i=r.height(),s=function(){for(var t=r.scrollTop(),s=a.height(),c=s-i,o=t>c?c-t:0,l=0;l<n.length;l++){var d=n[l];if(t<=d.stickyWrapper.offset().top-d.topSpacing-o)null!==d.currentTop&&(d.stickyElement.css("width","").css("position","").css("top",""),d.stickyElement.trigger("sticky-end",[d]).parent().removeClass(d.className),d.currentTop=null);else{var u=s-d.stickyElement.outerHeight()-d.topSpacing-d.bottomSpacing-t-o;u<0?u+=d.topSpacing:u=d.topSpacing,d.currentTop!=u&&(d.stickyElement.css("width",d.stickyElement.width()).css("position","fixed").css("top",u),void 0!==d.getWidthFrom&&d.stickyElement.css("width",e(d.getWidthFrom).width()),d.stickyElement.trigger("sticky-start",[d]).parent().addClass(d.className),d.currentTop=u)}}},c=function(){i=r.height();for(var t=0;t<n.length;t++){var a=n[t];void 0!==a.getWidthFrom&&!0===a.responsiveWidth&&a.stickyElement.css("width",e(a.getWidthFrom).width())}},o={init:function(r){var a=e.extend({},t,r);return this.each(function(){var t=e(this),r=t.attr("id"),i=e("<div></div>").attr("id",r+"-sticky-wrapper").addClass(a.wrapperClassName);t.wrapAll(i),a.center&&t.parent().css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==t.css("float")&&t.css({float:"none"}).parent().css({float:"right"});var s=t.parent();s.css("height",t.outerHeight()),n.push({topSpacing:a.topSpacing,bottomSpacing:a.bottomSpacing,stickyElement:t,currentTop:null,stickyWrapper:s,className:a.className,getWidthFrom:a.getWidthFrom,responsiveWidth:a.responsiveWidth})})},update:s,unstick:function(t){return this.each(function(){for(var t=e(this),r=-1,a=0;a<n.length;a++)n[a].stickyElement.get(0)==t.get(0)&&(r=a);-1!=r&&(n.splice(r,1),t.unwrap(),t.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",s,!1),window.addEventListener("resize",c,!1)):window.attachEvent&&(window.attachEvent("onscroll",s),window.attachEvent("onresize",c)),e.fn.sticky=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.sticky"):o.init.apply(this,arguments)},e.fn.unstick=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.sticky"):o.unstick.apply(this,arguments)},e(function(){setTimeout(s,0)})}(jQuery);var scroll="yes",Fscroll=scroll.replace(/(\r\n|\n|\r)/gm," ");"yes"===Fscroll&&($(document).ready(function(){$("body").addClass("imgani")}),$(window).bind("load resize scroll",function(){var e=$(this).height();$(".block-image .thumb a,.PopularPosts img,.related-thumb a,.roma-widget .wid-thumb a").each(function(){var t=.1*$(this).height()-e+$(this).offset().top;$(document).scrollTop()>t&&$(this).addClass("anime")})}));var stickyWork="yes",FstickyWork=stickyWork.replace(/(\r\n|\n|\r)/gm," ");"yes"===FstickyWork&&$(document).ready(function(){$("#main-nav").sticky({topSpacing:0})});var related_number=3,pageCount=10;$(window).bind("load",function(){$(".Label a,.postags a,.breadcrumbs span a,.label-head a,.feat-title h2 a,.m-rec h2 a").each(function(){var e=$(this).attr("href");$(this).attr("href",e+"?&max-results=10")})});jQuery(document).ready(function(e){e(window).scroll(function(){e(".back-to-top").show()}),e(".back-to-top").on("click",function(){return e("html, body").animate({scrollTop:0},450),!1})}),$(window).scroll(function(){$(this).scrollTop()>100?$(".back-to-top").css({bottom:"30px"}):$(".back-to-top").css({bottom:"-100px"})});var no_image_url="http://3.bp.blogspot.com/-qnLm52EsvBE/VDkrZ46TWXI/AAAAAAAAAsM/tiJ36WiboU4/s1600/90.jpg";jQuery(document).ready(function(e){e("ul.sub-menu").parent("li").addClass("menu-item-has-children"),e("#main-nav .menu-item-has-children > a").append('<span class="drop-sign"> <i class="fa fa-caret-down"/></span>'),e("#main-nav .row").prepend('<div id="menu-icon"><i class="fa fa-navicon"></i></div>'),e("#menu-icon").on("click",function(){e("#main-nav ul").slideToggle(250)}),e(window).resize(function(){var t=e(window).width(),r=e("#main-nav ul");t>1010&&r.is(":hidden")&&r.removeAttr("style")}),e("#search-icon").on("click",function(){e("#nav-search").slideToggle(250)});var t=e("#main-nav #s").val();e("#main-nav #s").blur(function(){0===this.value.length&&(this.value=t)}),e("#main-nav #s").focus(function(){this.value===t&&(this.value="")}),e("#sidebar-right .widget h2").wrap("<div class='widget-title'/>"),e("#sidebar-right .widget-title").append("<span></span>"),e(".footer-widget .widget h2").wrap("<div class='widget-title'/>"),e(".footer-widget .widget-title").append("<span></span>"),e(".index .post-outer,.archive .post-outer").each(function(){e(this).find(".block-image .thumb a").attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1000")})}),e(this).find(".PopularPosts img").attr("src",function(e,t){return t.replace("s72-c","s90-c")})}),function(e){e.fn.replaceText=function(t,r,a){return this.each(function(){var n,i,s=this.firstChild,c=[];if(s)do{3===s.nodeType&&(n=s.nodeValue,(i=n.replace(t,r))!==n&&(!a&&/</.test(i)?(e(s).before(i),c.push(s)):s.nodeValue=i))}while(s=s.nextSibling);c.length&&e(c).remove()})}}(jQuery),$(".intro .HTML .widget-content").each(function(){var e=$(this).text();e.match("random")?$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){var t=e.feed.entry.length-3,r=Math.floor(Math.random()*(t-0+1))+0;$.ajax({url:"/feeds/posts/default?alt=json-in-script&start-index="+r+"&max-results=3",type:"get",dataType:"jsonp",success:function(e){for(var t="",r="<ul>",a=0;a<e.feed.entry.length;a++){for(var n=0;n<e.feed.entry[a].link.length;n++)if("alternate"==e.feed.entry[a].link[n].rel){t=e.feed.entry[a].link[n].href;break}var i=e.feed.entry[a].title.$t,s=e.feed.entry[a].content.$t,c=$("<div>").html(s);if(s.indexOf("http://www.youtube.com/embed/")>-1||s.indexOf("https://www.youtube.com/embed/")>-1)var o=e.feed.entry[a].media$thumbnail.url,l='<a class="rcp-thumb" href="'+t+'" style="background:url('+o+') no-repeat center center;background-size: cover"/>';else if(s.indexOf("<img")>-1)var d=c.find("img:first").attr("src"),l='<a class="rcp-thumb" href="'+t+'" style="background:url('+d+') no-repeat center center;background-size: cover"/>';else l='<a class="rcp-thumb" href="'+t+'" style="background:url('+no_image_url+') no-repeat center center;background-size: cover"/>';r+="<li>"+l+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+i+"</a></h3></div></li>"}r+='<div class="clear"/></ul>',$(".intro .HTML .widget-content").each(function(){$(this).text().match("random")&&($(this).html(r),$(this).removeClass("widget-content").addClass("feat-content"),$(this).find(".rcp-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}),$("p.trans").each(function(){var e=$(this).text(),t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)}))})}})}}):e.match("recent")?$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=3",type:"get",dataType:"jsonp",success:function(e){for(var t="",r="<ul>",a=0;a<e.feed.entry.length;a++){for(var n=0;n<e.feed.entry[a].link.length;n++)if("alternate"==e.feed.entry[a].link[n].rel){t=e.feed.entry[a].link[n].href;break}var i=e.feed.entry[a].title.$t,s=e.feed.entry[a].content.$t,c=$("<div>").html(s);if(s.indexOf("http://www.youtube.com/embed/")>-1||s.indexOf("https://www.youtube.com/embed/")>-1)var o=e.feed.entry[a].media$thumbnail.url,l='<a class="rcp-thumb" href="'+t+'" style="background:url('+o+') no-repeat center center;background-size: cover"/>';else if(s.indexOf("<img")>-1)var d=c.find("img:first").attr("src"),l='<a class="rcp-thumb" href="'+t+'" style="background:url('+d+') no-repeat center center;background-size: cover"/>';else l='<a class="rcp-thumb" href="'+t+'" style="background:url('+no_image_url+') no-repeat center center;background-size: cover"/>';r+="<li>"+l+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+i+"</a></h3></div></li>"}r+='<div class="clear"/></ul>',$(".intro .HTML .widget-content").each(function(){$(this).text().match("recent")&&($(this).html(r),$(this).removeClass("widget-content").addClass("feat-content"),$(this).find(".rcp-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}),$("p.trans").each(function(){var e=$(this).text(),t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)}))})}})}}):$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results=3",type:"get",dataType:"jsonp",success:function(e){for(var t="",r="<ul>",a=0;a<e.feed.entry.length;a++){for(var n=0;n<e.feed.entry[a].link.length;n++)if("alternate"==e.feed.entry[a].link[n].rel){t=e.feed.entry[a].link[n].href;break}var i=e.feed.entry[a].title.$t,s=e.feed.entry[a].content.$t,c=$("<div>").html(s);if(s.indexOf("http://www.youtube.com/embed/")>-1||s.indexOf("https://www.youtube.com/embed/")>-1)var o=e.feed.entry[a].media$thumbnail.url,l='<a class="rcp-thumb" href="'+t+'" style="background:url('+o+') no-repeat center center;background-size: cover"/>';else if(s.indexOf("<img")>-1)var d=c.find("img:first").attr("src"),l='<a class="rcp-thumb" href="'+t+'" style="background:url('+d+') no-repeat center center;background-size: cover"/>';else l='<a class="rcp-thumb" href="'+t+'" style="background:url('+no_image_url+') no-repeat center center;background-size: cover"/>';r+="<li>"+l+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+i+"</a></h3></div></li>"}r+='<div class="clear"/></ul>',$(".intro .HTML .widget-content").each(function(){$(this).html(r),$(this).removeClass("widget-content").addClass("feat-content"),$(this).find(".rcp-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}),$("p.trans").each(function(){var e=$(this).text(),t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})})}})}),$("#related-posts").each(function(){var e=$(this).html();$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+related_number,type:"get",dataType:"jsonp",success:function(e){for(var t="",r='<div class="related">',a=0;a<e.feed.entry.length;a++){for(var n=0;n<e.feed.entry[a].link.length;n++)if("alternate"==e.feed.entry[a].link[n].rel){t=e.feed.entry[a].link[n].href;break}var i=e.feed.entry[a].title.$t,s=e.feed.entry[a].content.$t,c=$("<div>").html(s);if(s.indexOf("http://www.youtube.com/embed/")>-1||s.indexOf("https://www.youtube.com/embed/")>-1)var o=e.feed.entry[a].media$thumbnail.url,l='<a class="related-img" href="'+t+'" style="background:url('+o+') no-repeat center center;background-size: cover"/>';else if(s.indexOf("<img")>-1)var d=c.find("img:first").attr("src"),l='<a class="related-img" href="'+t+'" style="background:url('+d+') no-repeat center center;background-size: cover"/>';else l='<a class="related-img" href="'+t+'" style="background:url('+no_image_url+') no-repeat center center;background-size: cover"/>';r+='<li><div class="related-thumb">'+l+'</div><h3 class="related-title"><a href="'+t+'">'+i+"</a></h3></li>"}r+='</div><div class="clear"/>',$("#related-posts").html(r),$("#related-posts").removeClass("related-box").addClass("related-content"),$(".related-img").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}),$("p.trans").each(function(){var e=$(this).text(),t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}),function(e){for(var t=0,r=/\bblog-posts\b/;t<e.length;t++)r.test(e[t].className)&&twemoji.parse(e[t])}(document.getElementsByTagName("div")),function(e,t,r){var a,n=e.getElementsByTagName(t)[0];e.getElementById(r)||(a=e.createElement(t),a.id=r,a.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.8",n.parentNode.insertBefore(a,n))}(document,"script","facebook-jssdk");
