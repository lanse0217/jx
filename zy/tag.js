//创建构造函数
function Tag(obj){
    this.parentNode=obj.parentNode || "box";
    this.tag_Arr=obj.tag_Arr;
    this.div_Arr=obj.div_Arr;
    
    //1.根据tag_Arr的有效数量创建选项卡标签和相同数量的div
        let tpl="<ul id='tag'>",tpl2="";
        for(let i=0;i<this.tag_Arr.length;i++){
            
            if(this.tag_Arr[i].disabled==true){
                  tpl+=`<li>${this.tag_Arr[i].value}</li>`;
                  tpl2+=`<div><ul></ul></div>`;
            }
        }
        tpl+='</ul>'
        document.getElementById(this.parentNode).innerHTML=tpl+tpl2;//插入父元素
        let tag=document.getElementById('tag');
        let allLi=tag.children;
        allLi[0].className="list_show";//初始化第一个标签被选中

        //2.往div标签中创建li标签和对应的内容
        let all_Div=document.getElementById(this.parentNode).children;
        all_Div[1].className="show";//默认第一个div显示
        
        for(let i=0;i<this.div_Arr.length;i++){
            for(let j=0;j<this.div_Arr[i].length-1;j++){
                
                if(this.div_Arr[i].indexOf(false)>-1){//判断是否有false
                    continue;
                }
                else{
                      all_Div[i+1].children[0].innerHTML+=`<li>${this.div_Arr[i][j]}</li>`;//
                }
                
            }
        
                
        }
        //调用
        this.tab_Click();
    
}
Tag.prototype.tab_Click=function(){
    //
    let tag=document.getElementById('tag');
    let allLi=tag.children;
    let all_Div=document.getElementById(this.parentNode).children;
    //

     for(let i=0;i<allLi.length;i++){
         allLi[i].setAttribute('index',i+1);//给每个li标签添加索引属性
         allLi[i].onclick=function(){
             for(let j=0;j<allLi.length;j++){
                 allLi[j].className="";//清除标签样式
                 all_Div[j+1].className="";//清楚DIV样式
             }
            this.className="list_show";
            all_Div[this.getAttribute('index')].className="show";

         }
     }
    
}