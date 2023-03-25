export function handleFormData(e, formData, setFormData) {
    let data = { ...formData }
    data[e.target.name] = e.target.value
    setFormData(data)
}