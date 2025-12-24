import { LucideIcon } from "lucide-react"
import { Ship,Users,Calendar,Anchor } from "lucide-react";
interface portfolioProps {
    icon: LucideIcon;
    number: string;
    title: string;
    description: string;
    img: string;
}

export const portfolioData: portfolioProps[] = [
    {
        icon: Ship,
        number: "42",
        title: "Active Vessels",
        description: "Ships currently under our crew management",
        img: "/images/ship.jpeg"
    },
    {
        icon: Users,
        number: "250+",
        title: "Crew Members",
        description: "Qualified seafarers deployed and growing",
        img:"/images/crew.jpeg"
    },
    {
        icon: Calendar,
        number: "Now",
        title: "New Project’s",
        description: "Expansion with new construction deliveries",
        img: "/images/project.jpeg"
    },
    {
        icon: Anchor,
        number: "100%",
        title: "Success Rate",
        description: "On-time crew deployment guarantee",
        img:"/images/20.jpeg"
    }

]