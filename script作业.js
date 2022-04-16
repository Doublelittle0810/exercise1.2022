//问好
function sayHello(){
  var response = prompt("我该怎么称呼你");
  alert("你好亲爱的" + response + ", 那我们开始游戏吧");
}


  window.onload=function(){

    //获取两个按钮
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var img=document.getElementsByTagName("img")[0];

    //创建两个导航语的数组
    var overWrite1 = ["1、现在请将你的手指放在A上，我们要开始游戏了(注意：执行下一步指令之前别忘记自己停在哪里)",
    "2、现在你可能在B或者D,但我能确定的是肯定不在A",
    "3、虽然我不知道你怎么移动，但是我想，你一定没有停在F，对吗",
    "4、我猜现在你会停在B、D、E其中一个上，但是绝不可能是C",
    "5、如果你有按照指令行动，请点击进行下一步，看看结果和你是否相同~",
    "6、结果是E哦，我猜对了吧~是不是觉得很神奇呢？"
    ];
    var overWrite2 = ["从A出发，现在请你走【一步】，向下或者向右都可以",
    "那我们消除A，接下来请在剩下的方块上运动【三步】，依旧只能上下或左右移动哦，如果你喜欢也可以来回走",
    "让我们消除F，别忘了之前停在哪，请你再运动【五步】，规则照旧",
    "所以“C”也退场啦！现在请你再走【三步】，千万别忘记自己上一步停在哪里",
    "",
    ""
    ];

    //创建一个存放图片路径的数组
    var imgArr=["初始.jpg","1.jpg","2.jpg","3.jpg","4.jpg","结果.jpg"];

    //创建一个保存当前正在显示图片的索引的变量
    var i=-1;

    //分别为两个按钮绑定单击响应函数

    next.onclick=function(){
      //通过索引值修改当前显示图片
      i++;
      if(i>imgArr.length-1){
        i=0;
      }
      img.src=imgArr[i];
      document.getElementById("第一句").innerHTML = overWrite1[i];
      document.getElementById("第二句").innerHTML = overWrite2[i];
    };
  };
