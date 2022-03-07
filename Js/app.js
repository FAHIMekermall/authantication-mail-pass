const getEleById = (id) => document.getElementById(id)
const getValue = (variable) => {
	const value = variable.value
	variable.value = ``
	return value
}

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

const saveData = (name, email, pass) => {
	let data = loadData()
	data["name"] = name
	data["email"] = email
	data["pass"] = pass

	const stringiFied = JSON.stringify(data)
	localStorage.setItem("loginData", stringiFied)
}

const subHandler = () => {
	const name = getValue(getEleById("nameInput"))
	const email = getValue(getEleById("emailInput"))
	const pass = getValue(getEleById("passwordInput"))
	saveData(name, email, pass)
	setTimeout(function () {
		location.href = "login.html"
	}, 500)
}

getEleById("subButton").addEventListener("click", function () {
	subHandler()
})

const data = window.localStorage["loginData"]
if(data){
	location.href = "login.html"
}