import Box1 from "../../images/chooseUs/icon1.png";
import Box2 from "../../images/chooseUs/icon2.png";
import Box3 from "../../images/chooseUs/icon3.png";
import {v1} from "uuid";

export type TakeBoxType = {
    id: string
    img: string
    title: string
    description: string
}

export const takeBox: TakeBoxType[] = [
    {
        id: v1(),
        title: 'Cross Country Drive',
        description: 'Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.',
        img: Box1
    },
    {
        id: v1(),
        title: 'All Inclusive Pricing',
        description: 'Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.',
        img: Box2
    },
    {
        id: v1(),
        title: 'No Hidden Charges',
        description: 'Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.',
        img: Box3
    }
]