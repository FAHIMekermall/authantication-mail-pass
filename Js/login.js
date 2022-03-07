const loadData = () => {
	const data = window.localStorage["loginData"]
	let obj
	if (data) {
		obj = JSON.parse(data)
	} else {
		obj = {}
	}
	return obj
}
const getEleById = (id) => document.getElementById(id)
const getValue = (variable) => {
	const value = variable.value
	variable.value = ``
	return value
}

const value = (value) => {
	const data = loadData()
	return data[value]
}

const authantication = () => {
	const mail = getValue(getEleById("email"))
	const pass = getValue(getEleById("password"))
	const nameData = value("name")
	const emailData = value("email")
	const passData = value("pass")

	console.log(mail)
	console.log(emailData)

	if (mail.toLowerCase === emailData.toLowerCase && pass === passData) {
		swal(`you are succesfully login Mr:${nameData}`)
	}
    else{
        swal('please try again with correct password')
    }
}

const fotgotPass = ()=>{
    const nameData = value("name")
	const emailData = value("email")
	const passData = value("pass")

    const name = prompt('type your Name')
    if(name.toLowerCase() === nameData.toLowerCase()){
        swal(
            `
            your email is: ${emailData}
            your pass is: ${passData}
            `
        )
    }
    else{
        swal('you must enter your name')
    }
}

getEleById("loginButton").addEventListener("click", function () {
    authantication()
})

getEleById('forgot').addEventListener('click',function(){
    fotgotPass()
})