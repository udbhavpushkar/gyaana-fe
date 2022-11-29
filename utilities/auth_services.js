export const logout = ()=>{
    localStorage.removeItem("auth_token")
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("user_id")
    localStorage.removeItem("role")
    window.location = "/"
}

export const isLoggedIn = ()=>{
    if (localStorage.getItem("auth_token")) {
        return true
    }else{
        return false
    }
}