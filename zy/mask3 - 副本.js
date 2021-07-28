/**
     * @description: 放大镜功能
     * @param {*}
     * @return {*}
     */
     function Mask(obj){
         //初始化
        this.parentNode=obj.parentNode;
        this.li_pic_01=obj.li_pic_01;
        this.li_pic_02=obj.li_pic_02;
        //大图
        let box=document.getElementById('box');
        let mask=document.getElementById('mask');
        let big_box=document.getElementById('big_box');
        let pic=document.getElementById('pic');
        //中图
        let small_box=document.getElementById('small_box');
        let mid_pic=small_box.children[0];
        //小图
        let ul=document.getElementById('ul');
        let li=ul.children;
        //
        pic.src=this.li_pic_01;
        mid_pic.src=this.li_pic_01;
        //
        li[0].children[0].src=this.li_pic_01;
        li[1].children[0].src=this.li_pic_02;

        //图片切换功能
        //图片0
                    
        li[0].children[0].addEventListener('mouseover',function(){
            pic.src=obj.li_pic_01;
            mid_pic.src=obj.li_pic_01;
        })
        
        
        //图片1
       
        li[1].children[0].addEventListener('mouseover',function(){
            pic.src=obj.li_pic_02;
            mid_pic.src=obj.li_pic_02;
        })
     }
   /*   Mask.prototype.init=function(opt){
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
document.getElementById(id).insertAdjacentHTML('beforeEnd', tpl);
         
     } */

      /**鼠标滑入**/
     Mask.prototype.mouseover=function(){
          //显示隐藏的盒子
          /* let box=document.getElementById('box');
          let mask=document.getElementById('mask');
          let big_box=document.getElementById('big_box'); */
          box.addEventListener('mouseover',function(){
            //显示隐藏的盒子
            mask.style.display="block";
            big_box.style.display="block";
        });
     }
     /**鼠标移动**/
     Mask.prototype.mousemove=function(){
        /* let box=document.getElementById('box');
        let mask=document.getElementById('mask');
        let big_box=document.getElementById('big_box');
        let pic=document.getElementById('pic'); */
         //4.计算出鼠标的坐标并计算出mask的边距
            box.addEventListener('mousemove',function(event){                    
            //4.计算出鼠标的坐标并计算出mask的边距
            let pointX=event.pageX-box.offsetLeft-mask.offsetWidth*0.5;
            let pointY=event.pageY-box.offsetTop-mask.offsetHeight*0.5;
            //
            if(pointX<0){
                pointX=0;
            }else if(pointX>box.offsetWidth-mask.offsetWidth)
            {
                pointX=box.offsetWidth-mask.offsetWidth;
            }
            //
            if(pointY<0){
                pointY=0;
            }else if(pointY>box.offsetHeight-mask.offsetHeight)
            {
                pointY=box.offsetHeight-mask.offsetHeight;
            }                                
            //给放大镜赋值
            mask.style.left=pointX+'px';
            mask.style.top=pointY+'px';
            //给大图设置位移
            let a=pointX*big_box.offsetWidth / box.offsetWidth;
            let b=pointY*big_box.offsetHeight /box.offsetHeight;
            a=a>(pic.offsetWidth-big_box.offsetWidth)? pic.offsetWidth-big_box.offsetWidth : pointX*3/2;
            b=b>(pic.offsetHeight-big_box.offsetHeight)? pic.offsetHeight-big_box.offsetHeight : pointY*3/2;
            pic.style.left=-a+'px';
            pic.style.top=-b+'px';
        
        })
     }
        /**鼠标移开**/
        Mask.prototype.mouseout=function(){
            /* let box=document.getElementById('box');
            let mask=document.getElementById('mask');
            let big_box=document.getElementById('big_box'); */
            // let pic=document.getElementById('pic');
            box.addEventListener('mouseout',function(){
                mask.style.display="none";
                big_box.style.display="none";
            })
        }
        /**切换图片**/
        Mask.prototype.mouseClick=function(){
            
            
            //console.log(li_pic);
            
                
                    
                        
                       
                        
                
            

        }