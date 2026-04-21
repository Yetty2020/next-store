
export type FeaturesCategory = {
    id: number;
    icon: string;
    title: string;
    description: string;

}

export const Features: FeaturesCategory[] = [
    {
        id: 1,
        icon: '/images/chair.svg',
        title: "Top Quality",
        description: "Each piece is made with care, ensuring strength and style for years to come."
    },
    {
        id: 2,
        icon: '/images/shipping.svg',
        title: "Easy Delivery",
        description: "Fast and easy delivery, getting your new furniture to you without delay."
    },
    {
        id: 3,
        icon: '/images/support.svg',
        title: "24/7 Customer Support",
        description: "Our customer support team is here 24/7 to help with any questions or requests."
    },
    
];