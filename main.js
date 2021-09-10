function truongPhong(name, age){
    this.Name=name;
    this.Age=age;
    this.Hello=function(){
        alert("chao sep");
    }
}

function GiamDoc(name, age)
{
    this.Name=name;
    this.Age=age;
    this.truongphong= new truongPhong("nguyen van B", 30);
}


var gd= new GiamDoc("nguyenVanSep", 35);
gd.truongphong.Hello();








