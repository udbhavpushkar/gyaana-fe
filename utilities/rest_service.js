const BASE_URL = process.env.NEXT_PUBLIC_API_ORIGIN

import axios from "axios"
import { logout } from "./auth_services"

let header = { "Content-Type": "application/json" }

const set_authorization_header = (authorize = true) => {
	if (authorize) {
		const token = localStorage.getItem("auth_token")
		if (token) {
			header["Authorization"] = `Bearer ${token}`
		}
	}
}

const set_response = (data, isSuccess = true) => {
	if (data?.response?.data?.message?.message == "invalid token") {
		logout()
	}
	let myData = data.data
	if (!isSuccess) {
		myData = data.response.data.error
	}
	let response = { isSuccess, data: myData }
	return response
}

export const getRequest = async (url) => {
	try {
		set_authorization_header()
		const response = await axios.get(BASE_URL + url, { headers: header })
		return set_response(response)
	} catch (error) {
		return set_response(error, false)
	}
}

export const postRequest = async (url, payload) => {
	try {
		set_authorization_header()
		const response = await axios.post(BASE_URL + url, payload, { headers: header })
		return set_response(response)
	} catch (error) {
		return set_response(error, false)
	}
}

export const putRequest = async (url, payload) => {
	try {
		set_authorization_header()
		const response = await axios.put(BASE_URL + url, payload, { headers: header })
		return set_response(response)
	} catch (error) {
		return set_response(error, false)
	}
}

export const patchRequest = async (url, payload) => {
	try {
		set_authorization_header()
		const response = await axios.patch(BASE_URL + url, payload, { headers: header })
		return set_response(response)
	} catch (error) {
		return set_response(error, false)
	}
}

export const deleteRequest = async (url) => {
	try {
		set_authorization_header()
		const response = await axios.delete(BASE_URL + url, { headers: header })
		return set_response(response)
	} catch (error) {
		return set_response(error, false)
	}
}
