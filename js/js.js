let namenode = document.getElementById('fname');
let lnamenode = document.getElementById('lname');
let mailnode = document.getElementById('email');
let mnode = document.getElementById('phn');
let errnode = document.getElementById('err1');
let errnode1 = document.getElementById('err2');
let errnode3= document.getElementById('err3');
let errnode2 = document.getElementById('err4');
let msg = document.getElementById('subject');
let error5 = document.getElementById('err5');



function valid(){
    errnode.innerHTML="";
    let name=namenode.value;
    namenode.style.border="2px solid green";
    namenode.style.backgroundColor="yellow";
let regexpress=new RegExp("^[a-zA-Z]{2,100}$");
    if(name==""){
        errnode.innerHTML="<b>this field is required</b>";
        namenode.style.border="2px solid red";
    namenode.style.backgroundColor="pink";
    return false;
    }
    else if(regexpress.test(name)==false){
        errnode.innerHTML="<b>Enter valid name</b>";
        namenode.style.border="2px solid red";
        namenode.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }
}


function valid1(){
    errnode1.innerHTML="";
    let name=lnamenode.value;
    lnamenode.style.border="2px solid green";
    lnamenode.style.backgroundColor="yellow";
let regexpress=new RegExp("^[a-zA-Z]{2,100}$");
    if(name==""){
        errnode1.innerHTML="<b>this field is required</b>";
        lnamenode.style.border="2px solid red";
    lnamenode.style.backgroundColor="pink";
    return false;
    }
    else if(regexpress.test(name)==false){
        errnode1.innerHTML="<b>Enter valid name</b>";
        lnamenode.style.border="2px solid red";
        lnamenode.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }
}






function valid2(){
    errnode3.innerHTML=""
    let emailid=mailnode.value;
    mailnode.style.border="2px solid green";
    mailnode.style.backgroundColor="yellow";
    let ss=emailid.substring(emailid.indexOf('@')+1)
    if(emailid==""){
        errnode3.innerHTML="<b>this field is required</b>";
        mailnode.style.border="2px solid red";
    mailnode.style.backgroundColor="pink";
    return false;
    }
    else if(!emailid.includes("@") || ss==""){
        errnode3.innerHTML="<b>Invalid email id</b>";
        mailnode.style.border="2px solid red";
        mailnode.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }
}



function valid3(){
    errnode2.innerHTML="";
    let mobile=mnode.value;
    mnode.style.border="2px solid green";
    mnode.style.backgroundColor="yellow";
    let regexpress=new RegExp("^[6-9][0-9]{9}$");
    if(mobile==""){
        errnode2.innerHTML="<b>this field is required</b>";
        mnode.style.border="2px solid red";
        mnode.style.backgroundColor="pink";
    return false;
    }
    else if(regexpress.test(mobile)==false){
        errnode2.innerHTML="<b>Enter valid number</b>";
        mnode.style.border="2px solid red";
        mnode.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }

}





function valid4(){
    error5.innerHTML = "";
    msg.style.border="2px solid green";
   
    let massage = msg.value;
    if(massage ==""){
        error5.innerHTML="<b>This field is required</b>";
        msg.style.border="2px solid red";
            return false;
    }
    else
        return true;
}

function validateForm(){
let cond1 = valid();
 let cond2 = valid1();
 let cond3 = valid2();
 let cond4 = valid3();
 let cond5 = valid4();

 if(cond1 && cond2 && cond3 && cond4 && cond5){
    alert('Submitted successfully!!!');
    return (cond1 && cond2 && cond3 && cond4 && cond5);
}
    
}






