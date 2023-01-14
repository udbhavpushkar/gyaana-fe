const dashboard = { name: "Dashboard", link: "/admin" }
const initialSetup = {
    name: "Initial Setup",
    list: [
        { name: "Setup Institution", link: "#" },
        {
            name: "Academic Settings",
            list: [
                { name: "Create Academic years", link: "#" },
                { name: "Create Class", link: "/admin/class" },
                { name: "Create Section", link: "#" },
                { name: "Create Subjects", link: "#" },
                { name: "Upload Details", link: "#" },

            ]
        }]
}
const enquiry = {
    name: "Enquiry",
    list: [
        { name: "Student Admission Enquiry", link: "#" },
        { name: "Enquiry Report", link: "#" },
    ]
}
const admission = {
    name: "Admission Management",
    list: [
        { name: "Students", link: "/admin/student" },
        { name: "Employees", link: "/admin/teacher" },
    ]
}

const search = { name: "Seach", link: "#" }

const menu = { admin: [dashboard, initialSetup, enquiry, admission, search] }

export default menu

// const headersData = [
//     {
//         name: "Home",
//         link: "/admin",
//     },
//     {
//         name: "Teacher",
//         link: "/admin/teacher",
//     },
//     {
//         name: "Student",
//         link: "/admin/student",
//     },
//     {
//         name: "Class",
//         link: "/admin/class",
//     },
//     {
//         name: "Enquiry",
//         link: "/admin/feedback",
//     },
//     {
//         name: "Notice",
//         link: "/admin/notice",
//     },
//     {
//         name: "Downloads",
//         link: "/admin/download",
//     },
//     {
//         name: "Gallery",
//         link: "/admin/gallery",
//     },
// ]