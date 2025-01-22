// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { ResponseData } from 'path/to/interfaces';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { type StaticImageData } from "next/image";

export interface LandingPageEventsInfo {
  eventType: "Social" | "Professional";
  eventInfo: EventCardImageObject[];
}

export interface UpcomingEventsData {
  image: StaticImageData;
  date: Date | "TBD";
  time: string;
  location: string;
  eventName: string;
  eventDescription: string;
  eventType: "Social" | "Professional";
  isPaid: boolean;
  moreInfoLink: string;
  buyTicketLink?: string;
}

export interface EventCardImageObject {
  image: StaticImageData;
  imageAlt: string;
  tag: string;
  eventTitle: string;
  eventDescription: string;
}

export interface PrevBoardTabs {
  year: string;
  boardData: EBoardData[];
}

export interface EBoardData {
  id: number;
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
  officerNickname?: string;
  officerBio?: string;
  officerLinkedIn?: string;
}

// Original Board Data
export interface BoardData {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

// Tech Team
export interface TechTeamData {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

// Marketing
export interface MarketingData {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

// Events
export interface EventsData {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

// Professional Development
export interface PDData {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

// Finance
export interface FinanceData {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

// Leadership
export interface LeadershipData {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

export interface MobileSidebarData {
  name: string;
  route: string;
  icon: IconProp;
}
