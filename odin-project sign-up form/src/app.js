const error = () => {
    document.getElementById('error').style.display = 'flex';
    document.getElementById('first-section').style.opacity = '0.3';
    document.getElementById('second-section').style.opacity = '0.3';
    setTimeout(()=>{
        document.getElementById('error').style.display = 'none';
        document.getElementById('first-section').style.opacity = '1';
        document.getElementById('second-section').style.opacity = '1';    
    },2000)
}

document.getElementById('form').addEventListener('submit',function(event){
    console.log('signed-up!');
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('c-password').value;
    if(password != confirmPassword){
        error();
    }else{
        document.getElementById('thank-you').style.display = 'flex';
        document.getElementById('first-section').style.display = 'none';
        document.getElementById('second-section').style.display = 'none';
    }
})