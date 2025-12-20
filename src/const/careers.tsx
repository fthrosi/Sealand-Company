import { Career } from "@/types/career.type";
import { Ship, Clock4, MapPin } from "lucide-react";
import { LucideIcon } from "lucide-react";

type detailJob = {
  icon: LucideIcon;
  title: string;
};

export const dataCareer: Career[] = [
  {
    title: "Chief Enginer",
    level: "Officer Level",
    details: [
      {
        job: "Container Vessel",
      },
      {
        job: "6 Months",
      },
      {
        job: "Europe Route",
      },
    ],
  },
  {
    title: "Captain",
    level: "Officer Level",
    details: [
        {
        job: "Tanker Vessel",
      },
      {
        job: "12 Months",
      },
      {
        job: "Asian Route",
      },
    ]
  },
  {
    title: "Oiler",
    level: "Officer Level",
    details: [
        {
        job: "Cruise Ship",
      },
      {
        job: "24 Months",
      },
      {
        job: "Europe Route",
      },
    ]
  }
];

export const DetailCareer:detailJob[] = [
  {
    icon: Ship,
    title: "VESSEL TYPE",
  },
  {
    icon: Clock4,
    title: "CONTRACT DURATION",
  },
  {
    icon: MapPin,
    title: "ROUTE",
  }
];
