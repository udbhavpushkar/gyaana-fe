const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export function formatDate(originalDate) {
	let date = new Date(originalDate)
	let newDate = date.getDate() > 9 ? date.getDate() : "0" + date.getDate()
	let newMonth = months[date.getMonth()]
	let newYear = date.getFullYear()
	return `${newDate} ${newMonth}, ${newYear}`
}
