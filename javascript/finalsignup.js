
function formq(e){
    e.preventDefault()

    let form =document.getElementById('main')

 

    let email =form.email.value
     
    let password =form.password.value

   

    if(localStorage.getItem('Purplle_backdata') === null){
      
        localStorage.setItem('Purplle_backdata',JSON.stringify([]))
    }


    let obj={
       email,password
    }

    let arr= JSON.parse(localStorage.getItem('Purplle_backdata'))
    arr.push(obj)
    localStorage.setItem('Purplle_backdata',JSON.stringify(arr))
    
    alert(`Sign up successfull`)
}