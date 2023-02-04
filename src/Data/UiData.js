export let SideBarDataForStudent = [
  {
    name: "Dashboard",
    url: "/student",
    icon: "bi bi-house",
  },
  {
    name: "Profile",
    url: "/student/profile",
    icon: "bi bi-person-circle",
  },
  {
    name: "Change Password",
    url: "/student/change_password",
    icon: "bi bi-pass",
  },
  {
    name: "Acadamic",
    icon: "bi bi-book",
    subMenu: [
      {
        name: "Online Registration",
        url: "/student/online_registration",
        icon: "bi bi-send",
      },
      {
        name: "Course Registration",
        url: "/student/course_registration",
        icon: "bi bi-send",
      },
      {
        name: "Registered Courses",
        url: "/student/registered_courses",
        icon: "bi bi-send",
      },
    ],
  },
  {
    name: "Regular Exam Result",
    url: "/student/regular_exam_result",
    icon: "bi bi-file-earmark-text",
  },
  {
    name: "Transferred Course Result",
    url: "/student/transferred_course_result",
    icon: "bi bi-file-earmark-text",
  },
  {
    name: "Supplementary Result",
    url: "/student/supplementary_result",
    icon: "bi bi-file-earmark-text",
  },
  {
    name: "Admit Card Download",
    url: "/student/admit_card_download",
    icon: "bi bi-file-earmark-pdf",
  },
  {
    name: "Online Payment",
    url: "/student/online_payment",
    icon: "bi bi-cash-stack",
  },
  {
    name: "Due & Payment",
    url: "/student/due_and_payment",
    icon: "bi bi-cash-stack",
  },
];
export let SideBarDataForAdmin = [
  {
    name: "Dashboard",
    url: "/admin",
    icon: "bi bi-house",
  },
  {
    name: "Profile",
    url: "/admin/profile",
    icon: "bi bi-person-circle",
  },
  {
    name: "Change Password",
    url: "/admin/change_password",
    icon: "bi bi-pass",
  },
  {
    name: "Member",
    icon: "bi bi-book",
    subMenu: [
      {
        name: "Hod",
        url: "/admin/Hod",
        icon: "bi bi-send",
      },
      {
        name: "teacher",
        url: "/admin/teacher",
        icon: "bi bi-send",
      },
      {
        name: "account",
        url: "/admin/account",
        icon: "bi bi-send",
      },
      {
        name: "add member",
        url: "/admin/add_member",
        icon: "bi bi-send",
      },
    ],
  },
  {
    name: "Batch",
    icon: "bi bi-book",
    subMenu: [
      {
        name: "all_batch",
        url: "/admin/all_batch",
        icon: "bi bi-send",
      },
      {
        name: "admission_open_batch",
        url: "/admin/admission_open_batch",
        icon: "bi bi-send",
      },
      {
        name: "on_going_batch",
        url: "/admin/on_going_batch",
        icon: "bi bi-send",
      },
      {
        name: "add_batch",
        url: "/admin/add_batch",
        icon: "bi bi-send",
      },
    ],
  },
];
export let DashboardCardsDataStudent = [
  {
    name: "Check Due Payments",
    url: "/payments",
    frontColor: "white",
    BackGroundColor: "#c90e00",
    icon: "bi bi-credit-card",
  },
  {
    name: "Semester Admit Card",
    url: "/admit_card",
    frontColor: "white",
    BackGroundColor: "#a89803",
    icon: "bi bi-file-pdf",
  },
  {
    name: "Semester Result",
    url: "/semester_result",
    frontColor: "white",
    BackGroundColor: "#379e20",
    icon: "bi bi-file-earmark-spreadsheet",
  },
  {
    name: "Supplementary Result",
    url: "/supplementary_result",
    frontColor: "white",
    BackGroundColor: "#0c8779",
    icon: "bi bi-file-earmark-spreadsheet",
  },
  {
    name: "Registered Courses",
    url: "/registered_courses",
    frontColor: "white",
    BackGroundColor: "#961ca6",
    icon: "bi bi-card-list",
  },
  {
    name: "Online Registration",
    url: "/online_registration",
    frontColor: "white",
    BackGroundColor: "#1b1b9e",
    icon: "bi bi-file-earmark-medical",
  },
  {
    name: "Onlin Payment",
    url: "/admit_card",
    frontColor: "white",
    BackGroundColor: "#a1183f",
    icon: "bi bi-currency-dollar",
  },
];
export let DashboardCardsDataAdmin = [
  {
    name: <span>All <br/> member</span>,
    url: "/admin/payments",
    frontColor: "white",
    BackGroundColor: "#c90e00",
    icon: "bi bi-credit-card",
  },
  {
    name: <span>Teacher</span>,
    url: "/admin/admit_card",
    frontColor: "white",
    BackGroundColor: "#a89803",
    icon: "bi bi-file-pdf",
  },
  {
    name: <span>Hod</span>,
    url: "/admin/semester_result",
    frontColor: "white",
    BackGroundColor: "#379e20",
    icon: "bi bi-file-earmark-spreadsheet",
  },
  {
    name: <span>Account</span>,
    url: "/admin/supplementary_result",
    frontColor: "white",
    BackGroundColor: "#0c8779",
    icon: "bi bi-file-earmark-spreadsheet",
  },
  {
    name: <span>Add New <br/> Member</span>,
    url: "/admin/registered_courses",
    frontColor: "white",
    BackGroundColor: "#961ca6",
    icon: "bi bi-card-list",
  },
  {
    name: <span>All Batch</span>,
    url: "/admin/online_registration",
    frontColor: "white",
    BackGroundColor: "#1b1b9e",
    icon: "bi bi-file-earmark-medical",
  },
  {
    name: <span>Add Batch</span>,
    url: "/admin/admit_card",
    frontColor: "white",
    BackGroundColor: "#a1183f",
    icon: "bi bi-currency-dollar",
  },
  {
    name: <span>Addmission <br/> Open Batch</span>,
    url: "/admin/online_registration",
    frontColor: "white",
    BackGroundColor: "#5e3280",
    icon: "bi bi-file-earmark-medical",
  },
  {
    name: <span>On going <br/> Batch</span>,
    url: "/admin/admit_card",
    frontColor: "white",
    BackGroundColor: "#75082b",
    icon: "bi bi-currency-dollar",
  },
];
export const BottomNavBarDataForStudent = [
  {
    route: "?student/payments",
    icon: "bi bi-credit-card",
    label: "Payments",
  },
  {
    route: "/student/admit",
    icon: "bi bi-file-pdf",
    label: "Admit_Card",
  },
  {
    route: "/student/",
    icon: "bi bi-house",
    label: "Home",
  },
  {
    route: "/search/result/",
    icon: "bi bi-file-earmark-spreadsheet",
    label: "Result",
  },
  {
    route: "/student/profile",
    icon: "bi bi-person-circle",
    label: "Profile",
  },
];
export const BottomNavBarDataForAdmin = [
  {
    route: "?student/payments",
    icon: "bi bi-credit-card",
    label: "Payments",
  },
  {
    route: "/student/admit",
    icon: "bi bi-file-pdf",
    label: "Admit_Card",
  },
  {
    route: "/student/",
    icon: "bi bi-house",
    label: "Home",
  },
  {
    route: "/search/result/",
    icon: "bi bi-file-earmark-spreadsheet",
    label: "Result",
  },
  {
    route: "/student/profile",
    icon: "bi bi-person-circle",
    label: "Profile",
  },
];
