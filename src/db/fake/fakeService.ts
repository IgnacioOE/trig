import {Triangle} from '../types/types';

const getHip = (CA: number, CO: number): number => {
    return Math.sqrt(CA ** 2 + CO ** 2);
}

export const triangle: Triangle[] = [
    {CA: 3, CO: 4, hip: getHip(3, 4)},
    {CA: 5, CO: 12, hip: getHip(5, 12)},
    {CA: 8, CO: 15, hip: getHip(8, 15)},
    {CA: 7, CO: 24, hip: getHip(7, 24)},
    {CA: 20, CO: 21, hip: getHip(20, 21)},
];
