type TestimonialList = {
    id: number;
    name: string;
    image: string;
    biggerImage: string;
    
    subtitle: string;
    quote: string;
    rating: number;
}



export const testimonials: TestimonialList[] = [
    {
        id: 1,
        name: 'Inem',
        image: '/images/TestimonialImage1.svg',
        biggerImage: 'images/Testimonials1.svg',
        subtitle: 'Mahasiwa',
        quote: "FurniHome is really great. I bought a sofa here, it’s super comfortable, and the price is also affordable",
        rating: 5
    },
    {
        id: 2,
        name: 'Bu Inah',
        image: '/images/TestimonialImage2.svg',
        biggerImage: 'images/Testimonials2.svg',
        subtitle: 'Ibu Rumah Tangga',
        quote: "Bought a set of furniture for the kids’ room, the style is really nice and there are lots of options. Super satisfied!",
        rating: 4
    },
    {
        id: 3,
        name: 'Pak Muh',
        image: '/images/TestimonialImage3.svg',
        biggerImage: 'images/Testimonials3.svg',
        subtitle: 'Dosen',
        quote: "The products are really nice, and the prices don’t break the bank. Totally awesome!",
        rating: 5
    }
]