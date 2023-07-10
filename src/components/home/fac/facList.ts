import {v1} from "uuid";

export type FacListType = {
    id: string
    question: string
    answer: string
}


export const facList: FacListType[] = [
    {
        id: v1(),
        question: 'What is special about comparing rental car deals?',
        answer: 'Comparing rental car deals is important as it helps find the\n' +
            '                                    best deal that fits your budget and requirements, ensuring you\n' +
            '                                    get the most value for your money. By comparing various\n' +
            '                                    options, you can find deals that offer lower prices,\n' +
            '                                    additional services, or better car models. You can find car\n' +
            '                                    rental deals by researching online and comparing prices from\n' +
            '                                    different rental companies.'
    },
    {
        id: v1(),
        question: 'How do I find the car rental deals?',
        answer: 'You can find car rental deals by researching online and\n' +
            '                                    comparing prices from different rental companies. Websites\n' +
            '                                    such as Expedia, Kayak, and Travelocity allow you to compare\n' +
            '                                    prices and view available rental options. It is also\n' +
            '                                    recommended to sign up for email newsletters and follow rental\n' +
            '                                    car companies on social media to be informed of any special\n' +
            '                                    deals or promotions.'
    },
    {
        id: v1(),
        question: 'How do I find such low rental car prices?',
        answer: 'Book in advance: Booking your rental car ahead of time can\n' +
            '                                    often result in lower prices. Compare prices from multiple\n' +
            '                                    companies: Use websites like Kayak, Expedia, or Travelocity to\n' +
            '                                    compare prices from multiple rental car companies. Look for\n' +
            '                                    discount codes and coupons: Search for discount codes and\n' +
            '                                    coupons that you can use to lower the rental price. Renting\n' +
            '                                    from an off-airport location can sometimes result in lower\n' +
            '                                    prices.'
    }
]