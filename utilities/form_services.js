export function handleFormData(e, formData, setFormData) {
	let data = { ...formData }

	// setting input inside user object
	if (e.target.name == "firstName" || "lastName") {
		data["userId"][e.target.name] = e.target.value
	}

	data[e.target.name] = e.target.value
	setFormData(data)
}
