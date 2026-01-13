const age=document.getElementById("age");
for(let i=1;i<=99;i++){
    let opt=document.createElement("option");
    opt.text=i;
    age.add(opt);
}
age.onchange=function(){
    document.body.style.background="#ff9a9e";
};