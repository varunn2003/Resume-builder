function hideControls(){
    fname =document.getElementById("fullName").value;
    document.getElementById("fname").innerHTML=fname;
    obj=document.getElementById("objective").value;
    document.getElementById("objective").style.display="none"
    document.getElementById("objectContent").innerHTML=obj;
    document.getElementById("objectContent").style.display="block"


    pTitle =document.getElementById("projTitle").value;
    document.getElementById("projTitleHead").innerHTML=pTitle;
    
    pDesc =document.getElementById("projDes").value;
    document.getElementById("projDes").style.display="none";
    console.log(obj);
    document.getElementById("projDesc").innerHTML=pDesc;
    document.getElementById("projDesc").style.display="block";
    document.getElementById("addskills").style.display="none";
    document.getElementById("skill").style.display="none";
    //workshopname
    workName=document.getElementById("workName").value;
    document.getElementById("wName").innerHTML=workName;

    //workshop description
    wDesc=document.getElementById("workDesc").value;
    document.getElementById("workDesc").style.display="none";
    document.getElementById("workDescCont").innerHTML=wDesc;
    document.getElementById("workDescCont").style.display="block"

    //intership name
    intName=document.getElementById("internName").value;
    document.getElementById("iName").innerHTML=intName;

    //internship description
    iDesc=document.getElementById("internDesc").value;
    document.getElementById("internDesc").style.display="none";
    document.getElementById("internDescCont").innerHTML=iDesc;
    document,getElementById("internDescCont").style.display="block"

}   
function showControls(){
    document.getElementById("fname").innerHTML ='<input type="text" id="fullName" name="fullName">'
    document.getElementById("objective").style.display="block";
    document.getElementById("objectContent").style.display="none"

    document.getElementById("projTitleHead").innerHTML='<input id="projTitle" type="text" name="projTitle">'
    

    document.getElementById("projDes").style.display="block";
    document.getElementById("projDesc").style.display="none";
    document.getElementById("addskills").style.display="block";
    document.getElementById("skill").style.display="block";

    //workshop title
    document.getElementById("wName").innerHTML='<input id="workName" type="text" name="workName">'

    //show workspaceDesc
    document.getElementById("workDesc").style.display="block";
    document.getElementById("workDescCont").style.display="none";

    //internship title
    document.getElementById("iName").innerHTML='<input id="internName" type="text" name="internName">'

    //intership desc
    document.getElementById("internDesc").style.display="block";
    document.getElementById("internDescCont").style.display="none";

}
function addskillset(){
    //ulElement will find ul with id myskills
    ulElement =document.getElementById("mySkills");
    //createnindivudual li element using document.createelement
    liElement =document.createElement("li");
    //skill = input from the text box
    skill =document.getElementById("skill").value;
    liElement.appendChild(document.createTextNode(skill));
    //createTextNode will add the content into text wrapper,li.appendChild adds to innerHTML of li
    ulElement.appendChild(liElement);

}
