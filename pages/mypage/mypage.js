Page({
    data:{
      mytext:'my first text'
    },
    onLoad:function(opt){
      console.log('执行onLoad');
      this.anniu();
    },
    anniu:function(){
      console.log('执行anniu');
    }
})