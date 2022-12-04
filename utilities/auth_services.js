export const logout = () => {
	let roletype = localStorage.getItem("role")

	localStorage.removeItem("auth_token")
	localStorage.removeItem("name")
	localStorage.removeItem("email")
	localStorage.removeItem("user_id")
	localStorage.removeItem("role")
	console.log("role", roletype)
	if (roletype == "admin") {
		window.location = "/Login?role=Admin"
	} else if (roletype == "teacher") {
		window.location = "/Login?role=Teacher"
	}
}

export const isLoggedIn = () => {
	if (localStorage.getItem("auth_token")) {
		return true
	} else {
		return false
	}
}
