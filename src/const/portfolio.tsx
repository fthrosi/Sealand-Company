import { LucideIcon } from "lucide-react"
import { Ship,Users,Calendar,Anchor } from "lucide-react";
interface portfolioProps {
    icon: LucideIcon;
    number: string;
    title: string;
    description: string;
}

export const portfolioData: portfolioProps[] = [
    {
        icon: Ship,
        number: "22",
        title: "Active Vessels",
        description: "Ships currently under our crew management"
    },
    {
        icon: Users,
        number: "145+",
        title: "Crew Members",
        description: "Qualified seafarers deployed and growing"
    },
    {
        icon: Calendar,
        number: "Now",
        title: "New Project’s",
        description: "Expansion with new construction deliveries"
    },
    {
        icon: Anchor,
        number: "100%",
        title: "Success Rate",
        description: "On-time crew deployment guarantee"
    }

]