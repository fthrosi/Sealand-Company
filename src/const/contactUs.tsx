import { LucideIcon } from "lucide-react"
import { MapPin,Phone, Mail, MessageCircle } from "lucide-react"
type ContactUsInfo = {
    icon: LucideIcon;
    title:string;
    description:string;
    link: string;
}

export const DataContact:ContactUsInfo[] = [
    {
        icon: MapPin,
        title: "Head Office",
        description: "Komplek gading bukit indah Blok L no 15, Jalan gading kiranan RT 018/RW 008 Kelapa Gading Jakarta Utara, 14240",
        link: "https://maps.app.goo.gl/NWuzEyDQkH1jqaq86"
    },
    {
        icon:Phone,
        title: "Telephone",
        description: "02145852482",
        link: "tel:+622145852482"
    },
    {
        icon: Mail,
        title: "Email",
        description: "crew@sealand.co.id",
        link: "mailto:crew@sealand.co.id"
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "+62 812-9480-3664",
        link: "https://wa.me/6281294803664"
    }
]

type BusinessHours = {
    title:string;
    description:string;
}

export const DataBusinessHours:BusinessHours[] = [
    {
        title: "Monday - Friday",
        description: "09.00 AM - 05.00 PM"
    },
    {
        title: "Saturday - Sunday",
        description: "Closed"
    },
]