/*function setfunc() {
    arr = document.getElementsByClassName('students');
    alert(arr);
    console.log(arr);
    console.log(arr, length);
}*/
var allstuds=new Set();
var studs =new Set();
function setfunc(){
    getstu();
        this.addEventListener('click',(e)=>{
            if(e.target.classList.contains("students")){
            console.log(e.target.textContent);
            e.target.style.color ="white";
            e.target.style.background="rgb(235, 24, 24)";
            student =e.target.textContent;
            studs.add(student);
            }
        })
    }
function cal(){
    absentees = Array.from(studs).join(" ,")
    document.getElementById("abs").innerHTML = "Absentees are "+absentees;
    document.getElementById("tot").innerHTML=allstuds.size;
}
function getstu(){
    const boxes =document.getElementsByClassName("students");
    for(let i=0;i<boxes.length;i++){
        allstuds.add(boxes[i].id);
    }
    console.log(allstuds);
}