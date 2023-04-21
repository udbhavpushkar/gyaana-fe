export function handleFormData(e, formData, setFormData) {
	let data = { ...formData }

	// setting input inside user object
	// if (e.target.name == "firstName" || "lastName") {
	// 	data["userId"][e.target.name] = e.target.value
	// }

	let value = e.target.value
	if (e.target.type === "datetime-local" || e.target.type === "date") {
		const date = new Date(e.target.value)
		const options = { timeZone: "Asia/Kolkata" }
		const ISTDateString = date.toLocaleString("en-US", options)
		value = ISTDateString
	}
	data[e.target.name] = value
	setFormData(data)
}
