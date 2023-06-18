import { AUTH_TOKEN, USER_EMAIL, USER_ID, USER_NAME, USER_ROLE } from "../constants/localStorage"

export const logout = () => {
	let roletype = localStorage.getItem("role")

	localStorage.removeItem(AUTH_TOKEN)
	localStorage.removeItem(USER_NAME)
	localStorage.removeItem(USER_EMAIL)
	localStorage.removeItem(USER_ID)
	localStorage.removeItem(USER_ROLE)
	console.log("role", roletype)
	window.location = "/Login"
}

export const isLoggedIn = () => {
	if (localStorage.getItem(AUTH_TOKEN)) {
		return true
	} else {
		return false
	}
}
