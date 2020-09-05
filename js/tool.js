function bubblesort(arr){
    /* i表示比较的轮数；j表示每一轮比较的次数。 */
   
        for( var i=0;i<arr.length-1;i++){
            for(var j=0;j<arr.length-(i+1);j++){
                if(arr[j]>arr[j+1]){
                    var tmp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=tmp;
                }
            }
        }
    }
 function select(arr){
    //  升序排列
        for( var i=0;i<arr.length-1;i++){
            for( var j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    var tmp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=tmp;
                }
            }
        }
    }
    function showtime(){
        // 显示当前时间
        var d=new Date();
        var year=d.getFullYear();
        var month=d.getMonth()+1;
        var date=d.getDate();

        var week=d.getDay();
        week=numOfChinese(week);
        var hour=doubleNum(d.getHours());
        var min=doubleNum(d.getMinutes());
        var sec=doubleNum(d.getSeconds());

        var str=year+"年"+month+"月"+date+"日 星期"+week+" "+hour+":"+min+":"+sec;
        return str;
    }

   
    function numOfChinese(num){
        var arr=["日","一","二","三","四","五","六"];
        return arr[num];
    }
    function doubleNum(n){
        if(n<10){
            return "0"+n;
        }else{
            return n;
        }
    }
    // 获取字体颜色大小
    function getStyle(node,cssStyle){
        return node.currentStyle ? node.currentStyle[cssStyle]:getComputedStyle(node)[cssStyle];
    }
    // 随机颜色
    function randomColor(){
        var str="rgba("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+",1)";
        return str;
    }