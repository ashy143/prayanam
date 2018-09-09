import { Card } from './card/card.model';

/**
 *  For mocking purposes only, retrieve this data from API later
 */
export const destinations: Card[] = [
    {
        from: 'Hyderabad',
        to: 'Vizag',
        lowestPrice: 1200,
        img: 'vizag.jpg'
    },
    {
        from: 'Hyderabad',
        to: 'Hyderabad',
        lowestPrice: 800,
        img: 'hyderabad.jpg'
    },
    {
        from: 'Hyderabad',
        to: 'Banglore',
        lowestPrice: 1000,
        img: 'banglore.jpg'
    }
]