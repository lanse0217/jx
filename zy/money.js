//1，将函数作为另一个函数的返回值
/* function Money(){
    //1.定义私有属性
    let money=1000;
    //2.定义操作方法
    function get(){
        
        money*=money;
        console.log(money);
    };
    function send(){
        
        money--;
        console.log(money);
    }
    //
    return{
        "get":get,
        "send":send
    }
} */
//将函数的形参作为实参传递给另一个函数调用
//立即执行函数
(function(w){
    //1.定义私有属性
    let money=1000;
    //2.定义操作方法
    function get(){
        
        money*=money;
        console.log(money);
    };
    function send(){
        
        money--;
        console.log(money);
    }
    //向外部暴露对象
    w.myTool={
        "get":get,
        "send":send
    }
})(window);
//标签切换的立即执行写法
let all_Li=document.getElementsByTagName('li');
let all_dom=document.getElementsByClassName('dom');
//console.log(all_dom);
//let set_index=0;
//给每个li标签设置index索引
/* for(let i=0;i<all_Li.length;i++){
    all_Li[i].index=i;
} */
let select_index=0;
all_Li[0].className="show";
all_dom[0].style.display="block";
//标签切换
/* for(let i=0;i<all_Li.length;i++){
    let li=all_Li[i];
    console.log(i);
    li.onclick=function(){
        for(let j=0;j<all_Li.length;j++){
            //console.log(j);
            all_Li[j].className="";
            all_dom[j].style.display="none";
        }
        this.className="show";
        all_dom[i].style.display="block";
        
    }
} */
//标签切换
for(let i=0;i<all_Li.length;i++){
    
    (function(w){
      let li=all_Li[w];
      li.onclick=function(){
          //清除
          //console.log(w);
          all_Li[select_index].className="";
          all_dom[select_index].style.display="none";
          this.className="show";
          all_dom[w].style.display="block";
          //重新赋值被选中的索引
          select_index=w;
          console.log(select_index);
      }
    })(i); 
}
function Tab_fn(option){
    //1.定义属性
    let all_Li=document.getElementsByTagName('li');
    let all_dom=document.getElementsByClassName('dom');
    

}
Tab_fn.prototype={
    //2.赋值索引
    setIndex:function(){
        for(let i=0;i<all_Li.length;i++){
            all_Li[i].index=i;
        }
    },
    //3,标签切换
    set_Tab:function(){
        let self_li=this;//备份指针
        for(let i=0;i<all_Li.length;i++){
            let li=all_Li[i];
            li.onclick=function(){
                for(let j=0;j<)
            }

    }
    }
}