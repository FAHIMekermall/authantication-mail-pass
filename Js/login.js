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

	if (mail === emailData && pass === passData) {
		swal(`you are succesfully login Mr:${nameData}`)
	}
    else{
        swal('please try again with correct password')
    }
}

getEleById("loginButton").addEventListener("click", function () {
    authantication()
})
