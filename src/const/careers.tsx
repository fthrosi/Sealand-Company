import { Career } from "@/types/career.type";
import { Ship, Clock4, MapPin } from "lucide-react";
import { LucideIcon } from "lucide-react";

type detailJob = {
  icon: LucideIcon;
  title: string;
};

export const dataCareer: Career[] = [
  // {
  //   title: "Chief Enginer",
  //   level: "Officer Level",
  //   details: [
  //     {
  //       job: "Container Vessel",
  //     },
  //     {
  //       job: "6 Months",
  //     },
  //     {
  //       job: "Europe Route",
  //     },
  //   ],
  // },
  {
    title: "AB",
    level: "Officer Level",
    details: [
        {
        job: "Tanker Vessel",
      },
      {
        job: "9 Months",
      },
      {
        job: "Europe Route",
      },
    ]
  },
  {
    title: "Oiler",
    level: "Officer Level",
    details: [
        {
        job: "Tanker Vessels",
      },
      {
        job: "9 Months",
      },
      {
        job: "Asian Route",
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
