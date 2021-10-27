
function formq(e){
    e.preventDefault()

    let form =document.getElementById('main')

 

    let emailid =form.email.value
     
    let passwordid =form.password.value

    let arr= JSON.parse(localStorage.getItem('Purplle_backdata'))

    var lastvalue =arr[ arr.length -1] 

    if(emailid == lastvalue.email  && passwordid == lastvalue.password ){

          alert(`Sign in successfull...`)

    }else if(emailid != lastvalue.email  || passwordid != lastvalue.password){

        alert(`Invalid Credentials`)
    }
}