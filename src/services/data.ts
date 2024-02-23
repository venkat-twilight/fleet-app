import { DashboardModel } from "../types/dashboard.model"
import facility from "../assets/images/facility-management.svg"
import fleet from "../assets/images/fleet-management.svg"
import inventory from "../assets/images/inventory-management.svg"
import asset from "../assets/images/asset-management.svg"
import vehicle from "../assets/images/vehicle-tracking.svg"

export const DashboardData: DashboardModel[] = [
  {
    id: 1,
    image: facility,
    title: "Facility Management",
    short_description:
      "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper auctor tempor mauris condimentum.",
  },
  {
    id: 2,
    image: fleet,
    title: "Fleet Management",
    short_description:
      "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper auctor tempor mauris condimentum.",
  },
  {
    id: 3,
    image: inventory,
    title: "Inventory Management",
    short_description:
      "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper auctor tempor mauris condimentum.",
  },
  {
    id: 4,
    image: asset,
    title: "Asset Management",
    short_description:
      "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper auctor tempor mauris condimentum.",
  },
  {
    id: 5,
    image: vehicle,
    title: "Vehicle Tracking",
    short_description:
      "Lorem ipsum dolor sit amet consectetur. Amet ullamcorper auctor tempor mauris condimentum.",
  },
]
