$(function(){"use strict";console.log("scripts/common.js connected"),$(".block-reviews__slider, .project-main__slider__body").each(function(){var t=$(this),i=t.find(".slider-container").css({position:"relative"}),e=!1,s=500;t.find(".slider-controls").click(function(){if(!e){e=!0;var t=i.find(".slider-container-item");$(this).hasClass("right")?i.append(t.first().clone(!0)).animate({left:-1*t.first().width()+"px"},s,function(){e=!1,t.first().remove(),i.css({left:0})}):i.css({left:-1*t.first().width()+"px"}).prepend(t.last().clone(!0)).animate({left:0},s,function(){e=!1,t.last().remove()})}})}),$(".go-top").click(function(){var t=$("#"+this.href.split("#")[1]);return t.size()?($("html, body").animate({scrollTop:t.offset().top+"px"},500),!1):void 0}),function(){var t=$(".project-main__body__text"),i=$(".project-main__body__text").height(),e=300;$(".btn-more-info").click(function(){if(t.toggleClass("active"),t.hasClass("active"))t.animate({height:i+"px"},e);else{t.css({height:"auto"});var s=t.height();t.css({height:i+"px"}),t.animate({height:s+"px"},e)}})}()});