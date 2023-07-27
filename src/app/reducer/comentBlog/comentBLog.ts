import {v1} from "uuid";
import Img2 from "../../../images/testimonials/pfp1.jpg";
import Img3 from "../../../images/testimonials/pfp2.jpg";

export type CommentType = {
    id: string
    comment: string
    name: string
    city: string
    img: string
}

export const comment: CommentType[] = [
    {
        id: v1(),
        comment: 'We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.',
        name: 'Parry Hotter',
        city: 'Belgrade',
        img: Img2
    },
    {
        id: v1(),
        comment: 'The car was in great condition and made our trip even better. Highly recommend for this car rental website!',
        name: 'Ron Rizzly',
        city: 'Novi Sad',
        img: Img3
    }
]