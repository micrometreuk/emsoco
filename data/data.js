import { FaPhone, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
	ArrowPathIcon,
	Bars3Icon,
	BookmarkSquareIcon,
	CalendarIcon,
	ChartBarIcon,
	CursorArrowRaysIcon,
	LifebuoyIcon,
	PhoneIcon,
	PlayIcon,
	ShieldCheckIcon,
	Squares2X2Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const buildData = {
	domainName: "emsoandcosolicitors.com",
	name: "Emso & Co Solicitors",
	local: "en_UK",
	description: "Emson & Co Solicitors",
	email: "Email:info@emsoandcosolicitors.com",
	phone: "44 (0)79 5186 7712",
	logoUrl: "/logo.webp",
	address: "London, United Kingdom.",
	contact: [
		{
			name: "Email:info@croydonwebservices.com",
			title: "email contact croydonwebservices.com",
			href: "mailto:info@croydonwebservices.com",
			subtitle: "Email contact",
			icons: FaEnvelope,
		},
		{
			name: "020-8665-4227",
			title: "croydonwebservices.com phone",
			href: "tel:020-8665-4227<",
			subtitle: "Office",
			icons: FaPhone,
		},
	],

	solutions: [
		{
			name: "Analytics",
			description:
				"Get a better understanding of where your traffic is coming from.",
			href: "#",
			icon: ChartBarIcon,
		},
		{
			name: "Engagement",
			description:
				"Speak directly to your customers in a more meaningful way.",
			href: "#",
			icon: CursorArrowRaysIcon,
		},
		{
			name: "Security",
			description: "Your customers' data will be safe and secure.",
			href: "#",
			icon: ShieldCheckIcon,
		},
		{
			name: "Integrations",
			description:
				"Connect with third-party tools that you're already using.",
			href: "#",
			icon: Squares2X2Icon,
		},
		{
			name: "Automations",
			description:
				"Build strategic funnels that will drive your customers to convert",
			href: "#",
			icon: ArrowPathIcon,
		},
	],

	callsToAction: [
		{ name: "Watch Demo", href: "#", icon: PlayIcon },
		{ name: "Contact Sales", href: "#", icon: PhoneIcon },
	],
	resources: [
		{
			name: "Help Center",
			description:
				"Get all of your questions answered in our forums or contact support.",
			href: "#",
			icon: LifebuoyIcon,
		},
		{
			name: "Guides",
			description:
				"Learn how to maximize our platform to get the most out of it.",
			href: "#",
			icon: BookmarkSquareIcon,
		},
		{
			name: "Events",
			description:
				"See what meet-ups and other events we might be planning near you.",
			href: "#",
			icon: CalendarIcon,
		},

		{
			name: "Security",
			description: "Understand how we take your privacy seriously.",
			href: "#",
			icon: ShieldCheckIcon,
		},
	],

	recentPosts: [
		{ id: 1, name: "Boost your conversion rate", href: "#" },
		{
			id: 2,
			name: "How to use search engine optimization to drive traffic to your site",
			href: "#",
		},
		{ id: 3, name: "Improve your customer experience", href: "#" },
	],

	socialLinks: {
		instagram: "https://instagram.com/maninthere",
		twitter: "https://twitter.com/mannupaaji",
		linkedin: "https://linkedin.com/in/manuarora28",
		github: "https://github.com/manuarora700",
		facebook: "https://facebook.com/",
	},
};

export default buildData;