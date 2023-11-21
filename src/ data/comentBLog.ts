import {v1} from "uuid";
import Img1 from "../images/testimonials/img_1.png";
import Img2 from "../images/testimonials/img_2.png";

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
        name: 'Kaia Jordan Gerber',
        city: 'Belgrade',
        img: Img1
    },
    {
        id: v1(),
        comment: 'The vehicle was in excellent condition, enhancing our trip significantly. I highly recommend using this car rental website!',
        name: 'Tom Cruise',
        city: 'New York',
        img: Img2
    }
]