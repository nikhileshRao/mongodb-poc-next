import { ProfileCard } from "../profileCard";
import profileCardData from "../stories/profileCard.json"

export default {
    title: "Components/ProfileCard",
    component: ProfileCard,
}

export const profileCard ={
    args:{
        title: profileCardData.title
    }
}