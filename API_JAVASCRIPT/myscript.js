function regist()
{
    let namevar = document.getElementById('name').value;
    let emailvar = document.getElementById('email').value;
    let pswdvar = document.getElementById('pswd').value;
    let mobilevar = document.getElementById('mobile').value;
    const data ={username:namevar,email:emailvar,password:pswdvar,mobile:mobilevar};
    console.log(data);
    fetch('http://localhost/php/api/registration_api',{
        method : 'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
        },body:JSON.stringify({allData:data})}).then((res)=>res.json()).then((Response)=>{
            // console.log(Response);
            if(Response.Code==1)
            {
                localStorage.setItem('userid',Response.Data);
            }
        });

}


function login()
{
    let namevar = document.getElementById('name').value;
    let pswd = document.getElementById('pswd').value;
    const data = {username:namevar,password:pswd}
    console.log(data);
}
logindata = document.querySelector('#btn-login');
console.log(logindata);
if(logindata!=null)
{
    
    logindata.addEventListener('click',function(){
    let namevar = document.getElementById('name').value;
    let pswd = document.getElementById('pswd').value;
        
    fetch('http://localhost/api/login_get_method?username='+namevar+'&password='+pswd).then((res)=>res.json()).then((Response)=>{
        // console.log(Response);
        if(Response.Code==1)
        {
            localStorage.setItem('userid',Response.Data.id);
            window.location.href='index.html';
        }
        else{
            alert("Invalid Data!");
        }
    })
    })
}