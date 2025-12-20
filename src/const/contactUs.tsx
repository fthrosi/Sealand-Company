import { LucideIcon } from "lucide-react"
import { MapPin,Phone, Mail, MessageCircle } from "lucide-react"
type ContactUsInfo = {
    icon: LucideIcon;
    title:string;
    description:string;
}

export const DataContact:ContactUsInfo[] = [
    {
        icon: MapPin,
        title: "Head Office",
        description: "Jl. Mawar Luar No. 20, Desa/Keluarahan Tugu Utara, Kec. Koja, Kota Adm. Jakarta Utara"
    },
    {
        icon:Phone,
        title: "Telephone",
        description: "+62 812-1348-0999"
    },
    {
        icon: Mail,
        title: "Email",
        description: "seacon.Aliyah@gmail.com"
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "+62 812-1348-0999"
    }
]

type BusinessHours = {
    title:string;
    description:string;
}

export const DataBusinessHours:BusinessHours[] = [
    {
        title: "Monday - Friday",
        description: "09.00 AM - 06.00 PM"
    },
    {
        title: "Saturday",
        description: "09.00 AM - 01.00 PM"
    },
    {
        title: "Sunday",
        description: "Closed"
    }
]