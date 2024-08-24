import { ProfileCard } from "../profileCard";
import profileCardData from "../stories/profileCard.json"

export default {
    title: "Components/ProfileCard",
    component: ProfileCard,
}

export const profileCard ={
    args:{
        firstName: profileCardData?.firstName,
        lastName: profileCardData?.lastName,
        image : profileCardData?.image,
        constructor: profileCardData?.constructor,
        flag: profileCardData?.flag,
        driverNumber: profileCardData?.driverNumber
    }
}