import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export const Menulist = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: HiChartPie,
    },
    {
        name: "Setting",
        path: "/setting",
        icon: HiViewBoards
    },
    {
        name: "Inbox",
        path: "/inbox",
        icon: HiInbox
    },
    {
        name: "Users",
        path: "/users",
        icon: HiUser
    },
    {
        name: "Products",
        path: "/products",
        icon: HiShoppingBag
    },
    {
        name: "Sign In",
        path: "/sign_in",
        icon: HiArrowSmRight
    },
    {
        name: "Sign Up",
        path: "/sign_up",
        icon: HiTable
    },
]