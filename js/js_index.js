

$(document).ready(function()
{
    $(".intro").height($(window).height());
    
    $("section").height($(window).height());
    
    $("section").hide();
    
    //$(".intro").hide();
    
    $(".intro").delay(4700).slideUp(300);
    
    $(".slide_btn li").removeClass("active");
    
    $(".slide_btn li:first").addClass("active");

    $(".t_skill span").css({"width":0, "opacity":0});
    
    $(".p_skill span").css({"width":0, "opacity":0});
    
    var t_skill_bar=["100%", "95%", "90%", "80%", "80%", "60%", "70%", "30%"];
    
    var p_skill_bar=["70%", "80%", "100%", "30%", "100%", "100%", "100%", "100%"];
    
    var skill_len=t_skill_bar.length;
    
    var intro_li=$(".intro .gauge_wrap ul li");
    
    var left_line=$(".left_line .line_wrap p");
    
    var right_line=$(".right_line .line_wrap p");
    
    var intro_time=new Array();
    
    var time=0; 
    
    var num=0;
    
    var percent=0;
    
    var text;
    
    var left_num=0;
    
    var right_num=0;
    
    var autoGauge=setInterval(gauge, 400);
    
    var autoPercent=setInterval(percentFn, 38);
    
    var slideCurrent=0;
    
    var p_skill=$(".pp");
    
    var t_skill=$(".tt");
    
    var skillNum=0; 
    
    var skillAuto; 
    
    $("section").delay(4800).fadeIn(600, function()
    {
        var leftAutoBar=setInterval(leftBarFn, 300);
        
        var rightAutoBar=setInterval(rightBarFn, 300);
    });

    $(".left_line .line_wrap p").hover(function()
    {
        $(this).stop().animate({"left":0}, 200);
    }, function()
    {
        $(this).stop().animate({"left":"-15%"}, 200);
    });
    $(".right_line .line_wrap p").hover(function()
    {
        $(this).stop().animate({"right":0}, 200);
    }, function()
    {
        $(this).stop().animate({"right":"-15%"}, 200);
    });
    $(".circle .circle_wrap").hover(function()
    {
        $(this).addClass("flip");
    }, function()
    {
        $(this).removeClass("flip");
    });
    $(".left_line .line_wrap p").click(function()
    {
        var line_idx=$(this).index()+1;
        
        $(".section_bg").fadeIn();
        
        $(".banner"+line_idx).fadeIn();
    });
    $(".right_line .line_wrap p").click(function()
    {
        var line_idx=$(this).index()+3;
        
        $(".section_bg").fadeIn();
        
        $(".banner"+line_idx).fadeIn();
        
        if (line_idx == 5)
        {
            skillAuto=setInterval(skillFn, 500);
        }
    });
    $(".btn_close").click(function()
    {
        $(".section_bg").fadeOut();
        
        $(".banner").fadeOut();
        
        $(".t_skill span").css({"width":0, "opacity":0});

        $(".p_skill span").css({"width":0, "opacity":0});
        
        clearInterval(skillAuto);
        
        skillNum=0; 
    });
    $(".right").click(function()
    {
        $(".banner3 .img_li, .banner3 .text_li").stop().animate({"left":-1200});
        
        $(this).hide();
        
        $(".left").show();
        
        slideCurrent=1;
        
        slideFn(slideCurrent);
    });
    $(".left").click(function()
    {
        $(".banner3 .img_li, .banner3 .text_li").stop().animate({"left":0});
        
        $(this).hide();
        
        $(".right").show();
        
        slideCurrent=0; 
        
        slideFn(slideCurrent);
    });
    $(".slide_btn li").click(function()
    {
        $(".slide_btn li").removeClass("active");
        
        $(this).addClass("active");
        
        var slideNum=$(this).index();

        $(".banner3 .img_li, .banner3 .text_li").stop().animate({"left":-(1200*slideNum)});
        
        if (slideNum == 1)
        {
            $(".right").hide();
            
            $(".left").show();
        }
        else 
        {
            $(".left").hide();
            
            $(".right").show();
        }
    });
    function gauge()
    {
        $(intro_li[num]).stop().animate({"width":48}, 400);
        
        num++;
    }
    function percentFn()
    {
        text=document.getElementById("percent_area");
        
        text.innerHTML=percent+"%";
        
        percent++;
        
        if (percent > 100)
        {
            clearInterval(autoPercent);
        }
    }
    function leftBarFn()
    {
        $(left_line[left_num]).stop().animate({"left":"-15%"}, 200);

        left_num++;
    }
    function rightBarFn()
    {
        $(right_line[right_num]).stop().animate({"right":"-15%"}, 200);
        
        right_num++;
    }
    function slideFn(slideNum)
    {
        $(".slide_btn li").each(function()
        {
            if (slideNum == $(this).index())
            {
                $(".slide_btn li").removeClass("active");

                $(this).addClass("active");
            }
        });
    }
    function skillFn()
    { 
        $(".t_skill ul li span").show();
        
        $(".p_skill ul li span").show();
        
        $(t_skill[skillNum]).stop().animate({"width":t_skill_bar[skillNum], "opacity":1}, 500);
        
        $(p_skill[skillNum]).stop().animate({"width":p_skill_bar[skillNum], "opacity":1}, 500);
            
        skillNum++;
    }
});













































