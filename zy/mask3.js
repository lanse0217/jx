
/**
     * @description: 放大镜功能
     * @parentNode string
     * @img_arr [{url:"",disabled:true/false}]
     * @b_Size Number
     * @m_Size Number
     * @s_Size Number
     */

     function Mask(obj){
         //初始化
        this.parentNode=obj.parentNode || "box";//父节点
        this.li_pic=obj.img_arr;//图片地址数组
        //this.li_num=obj.li_num || 4//设置小图的数量
        this.b_Size=obj.b_Size || 450;//设置大图的尺寸
        this.m_Size=obj.m_Size || 300;//设置大图的尺寸
        this.s_Size=obj.s_Size || 50;//设置大图的尺寸
        //在父级div中插入放大镜的布局
        let tpl=`<div id="box">
        <div id="small_box">
            <img  alt="" >
        </div>
        <div id="mask"></div>
        </div>
        <div id="big_box">
            <img  alt="" id="pic">
        </div>
        <div id="list">
            <ul id="ul">
            </ul>
        </div>`
        document.getElementById(this.parentNode).insertAdjacentHTML('beforeEnd', tpl);
        //大图
        let box=document.getElementById('box');
        let mask=document.getElementById('mask');
        let big_box=document.getElementById('big_box');
        let pic=document.getElementById('pic');
        pic.setAttribute("width",this.b_Size+'px');
        //中图
        let small_box=document.getElementById('small_box');
        let mid_pic=small_box.children[0];
        
        //小图
        let ul=document.getElementById('ul');
            //  let li=ul.children;
        //大中小图初始化
        pic.setAttribute("width",this.b_Size+'px');
        small_box.setAttribute("width",this.m_Size+'px');
        
        for(let i=0;i<this.li_pic.length;i++){
            if(this.li_pic[i].disabled==true){
                pic.src=this.li_pic[i].url;
                mid_pic.src=this.li_pic[i].url;
                break;
            }
        }
       
        //根据地址数组的长度生成li并初始化图片地址
        for(let i=0;i<this.li_pic.length;i++){
            if(this.li_pic[i].disabled==true){
            let li=document.createElement('li');
            let img=document.createElement('img');
            img.src=this.li_pic[i].url;
            img.setAttribute("width",this.s_Size+'px');
            ul.appendChild(li);
            li.appendChild(img);
        }
    }
            let li=ul.children;
        //图片
        for(let i=0;i<li.length;i++){        
        li[i].children[0].addEventListener('mouseover',function(){
            pic.src=li[i].children[0].src;
            mid_pic.src=li[i].children[0].src;
            
        })
        
    }
      //
        this.mouseover();
        this.mousemove();
        this.mouseout();
     }


    /**鼠标滑入**/
     Mask.prototype.mouseover=function(){
          //显示隐藏的盒子
          box.addEventListener('mouseover',function(){
            //显示隐藏的盒子
            mask.style.display="block";
            big_box.style.display="block";
        });
     }
     /**鼠标移动**/
     Mask.prototype.mousemove=function(){
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
            let a=pointX*pic.offsetWidth / box.offsetWidth;
            let b=pointY*pic.offsetHeight /box.offsetHeight;
            a=a>(pic.offsetWidth-big_box.offsetWidth)? pic.offsetWidth-big_box.offsetWidth : pointX*3/2;
            b=b>(pic.offsetHeight-big_box.offsetHeight)? pic.offsetHeight-big_box.offsetHeight : pointY*3/2;
            pic.style.left=-a+'px';
            pic.style.top=-b+'px';
        
        })
     }
        /**鼠标移开**/
        Mask.prototype.mouseout=function(){
    
            box.addEventListener('mouseout',function(){
                mask.style.display="none";
                big_box.style.display="none";
            })
        }
     
        
        
        