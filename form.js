

console.log(document.myForm);
// let fields = ['name','password','Email','phone'] 
// console.log(fields[0])
let isValid = () => {

    let fields = [document.myForm.name,document.myForm.password,document.myForm.Email,document.myForm.phone]
   
    var emailPat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
    for(field in fields){
        let f=fields[field].value;
        if(f == ''){
            alert('all fields must be filled!');
        }
    }
    if(isNaN(fields[3].value) || fields[3].value.length < 10){
        alert("please enter valid phone number")
    }
    if(!emailPat.test(fields[3].value)){
        alert("Please enter valid email")
    }
    

}

