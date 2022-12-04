import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../public/style.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer />
		</>
	)
}

export default MyApp
