$(function () {
  document.getElementById("Q1").innerHTML = "这是问题";
  document.getElementById("A1").innerHTML = "这是答案";
  document.getElementById("Q2").innerHTML = "浙江大学最潮的组织是?";
  document.getElementById("A2").innerHTML = "求是潮";
  document.getElementById("Q3").innerHTML = "求是潮的办公室在哪里？";
  document.getElementById("A3").innerHTML = "小剧场B217";
  document.getElementById("Q4").innerHTML = "为什么这个Q&A的配色那么牛马";
  document.getElementById("A4").innerHTML = "因为66666a没有审美捏";
  var flag1 = [1, 1, 1, 1, 1, 1, 1];
  var flag2 = [1, 1, 1, 1];
  $("#Q1").click(function () {
    if (flag1[0] === 0) {
      $("#A1").stop().slideUp("slow");
      $("#b1").stop().slideUp("slow");
      document.getElementById("Q1").style.borderBottomLeftRadius = "10px";
      document.getElementById("Q1").style.borderBottomRightRadius = "10px";
      flag1[0] = 1;
    } else {
      $("#A1").stop().slideDown("slow");
      $("#b1").stop().slideDown("slow");
      document.getElementById("Q1").style.borderBottomLeftRadius = 0;
      document.getElementById("Q1").style.borderBottomRightRadius = 0;
      flag1[0] = 0;
    }
    //$("#A1").stop().slideToggle("slow");
    //$("#b1").stop().slideToggle("slow");
    if (flag2[0] === 1) {
      flag2[0] = 0;
      document.getElementById("Q1").style.background = "#fff";
      document.getElementById("Q1").style.color = "#000";
    }
  });
  $("#Q2").click(function () {
    if (flag1[1] === 0) {
      $("#A2").stop().slideUp("slow");
      $("#b2").stop().slideUp("slow");
      document.getElementById("Q2").style.borderBottomLeftRadius = "10px";
      document.getElementById("Q2").style.borderBottomRightRadius = "10px";
      flag1[1] = 1;
    } else {
      $("#A2").stop().slideDown("slow");
      $("#b2").stop().slideDown("slow");
      document.getElementById("Q2").style.borderBottomLeftRadius = 0;
      document.getElementById("Q2").style.borderBottomRightRadius = 0;
      flag1[1] = 0;
    }
    //$("#A2").stop().slideToggle("slow");
    //$("#b2").stop().slideToggle("slow");
    if (flag2[1] === 1) {
      flag2[1] = 0;
      document.getElementById("Q2").style.background = "#fff";
      document.getElementById("Q2").style.color = "#000";
    }
  });
  $("#Q3").click(function () {
    if (flag1[2] === 0) {
      $("#A3").stop().slideUp("slow");
      $("#b3").stop().slideUp("slow");
      document.getElementById("Q3").style.borderBottomLeftRadius = "10px";
      document.getElementById("Q3").style.borderBottomRightRadius = "10px";
      flag1[2] = 1;
    } else {
      $("#A3").stop().slideDown("slow");
      $("#b3").stop().slideDown("slow");
      document.getElementById("Q3").style.borderBottomLeftRadius = 0;
      document.getElementById("Q3").style.borderBottomRightRadius = 0;
      flag1[2] = 0;
    }
    //$("#A3").stop().slideToggle("slow");
    //$("#b3").stop().slideToggle("slow");
    if (flag2[2] === 1) {
      flag2[2] = 0;
      document.getElementById("Q3").style.background = "#fff";
      document.getElementById("Q3").style.color = "#000";
    }
  });
  $("#Q4").click(function () {
    if (flag1[3] === 0) {
      $("#A4").stop().slideUp("slow");
      $("#b4").stop().slideUp("slow");
      document.getElementById("Q4").style.borderBottomLeftRadius = "10px";
      document.getElementById("Q4").style.borderBottomRightRadius = "10px";
      flag1[3] = 1;
    } else {
      $("#A4").stop().slideDown("slow");
      $("#b4").stop().slideDown("slow");
      document.getElementById("Q4").style.borderBottomLeftRadius = 0;
      document.getElementById("Q4").style.borderBottomRightRadius = 0;
      flag1[3] = 0;
    }
    //$("#A4").stop().slideToggle("slow");
    //$("#b4").stop().slideToggle("slow");
    if (flag2[3] === 1) {
      flag2[3] = 0;
      document.getElementById("Q4").style.background = "#fff";
      document.getElementById("Q4").style.color = "#000";
    }
  });
});
