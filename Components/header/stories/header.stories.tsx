import { Header } from "../header";
import headerData from "../stories/header.json"

export default {
    title: "Components/Header",
    component: Header,
}

export const header ={
    args:{
        headerlogo: headerData?.icon,
        placeholder: headerData?.placeholder,
        enableSearchBar: headerData?.enableSearchBar
    }
}