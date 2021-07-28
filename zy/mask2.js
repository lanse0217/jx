function abc(id){
    window.addEventListener('load',function(){           
    let tpl=`<div id="box">
            <div id="small_box">
                <img src="image/001.jpg" alt=""   width="300">
            </div>
            <div id="mask"></div>
            </div>
            <div id="big_box">
                <img src="image/01.jpg" alt="" id="pic">
            </div>
            <div id="list">
                <ul id="ul">
                <li><img src="image/0001.jpg" alt=""></li>
                <li><img src="image/0002.jpg" alt=""></li>
                </ul>
            </div>
            <div id="111"></div>`;
    $(id).insertAdjacentHTML('beforeEnd', tpl);
    //
    $('box').addEventListener('mouseover',function(){
            //显示隐藏的盒子
            $('mask').style.display="block";
            $('big_box').style.display="block";
        });
            //鼠标移动监听
            $('box').addEventListener('mousemove',function(event){                    
            //4.计算出鼠标的坐标并计算出mask的边距
            let pointX=event.pageX-$('box').offsetLeft-$('mask').offsetWidth*0.5;
            let pointY=event.pageY-$('box').offsetTop-$('mask').offsetHeight*0.5;
            //
            if(pointX<0){
                pointX=0;
            }else if(pointX>$('box').offsetWidth-$('mask').offsetWidth)
            {
                pointX=$('box').offsetWidth-$('mask').offsetWidth;
            }
            //
            if(pointY<0){
                pointY=0;
            }else if(pointY>$('box').offsetHeight-$('mask').offsetHeight)
            {
                pointY=$('box').offsetHeight-$('mask').offsetHeight;
            }
            //给放大镜赋值
            $('mask').style.left=pointX+'px';
            $('mask').style.top=pointY+'px';
            //给大图设置位移
            let a=pointX*$('big_box').offsetWidth / $('box').offsetWidth;
            let b=pointY*$('big_box').offsetHeight / $('box').offsetHeight;
            a=a>($('pic').offsetWidth-$('big_box').offsetWidth)? $('pic').offsetWidth-$('big_box').offsetWidth : pointX*3/2;
            b=b>($('pic').offsetHeight-$('big_box').offsetHeight)? $('pic').offsetHeight-$('big_box').offsetHeight : pointY*3/2;
            $('pic').style.left=-a+'px';
            $('pic').style.top=-b+'px';
        
        })

            //4.鼠标挪开后
            $('box').addEventListener('mouseout',function(){
                $('mask').style.display="none";
                $('big_box').style.display="none";
            })
            //5.切换大图
            let li_pic=$('ul').children;
            //console.log(li_pic);
            for(let i=0;i<li_pic.length;i++){
                li_pic[i].addEventListener('mouseover',function(){
                    $('small_box').innerHTML=`<img src="image/00${i+1}.jpg" alt=""   width="300">`;
                    $('big_box').innerHTML=`<img src="image/0${i+1}.jpg" alt="" id="pic">`;
                })
            }
}
    )}

    //
    function $(id){
        return typeof(id)==="string"? document.getElementById(id) : null;
    }