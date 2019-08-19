export class ChartModel {
    public name: string;
    public data: number[];

    constructor(name: string, data: number[]) {
        this.name = name;
        this.data = data;
    }
}

const years = 10;
const min = 100;
const max = 700;
const step = (max - min) / years;

const generateArrayOfNum = (years) =>
    Array.from(
        {
            length: years
        },
        (el, index) => {
            const xMin = min + step * index;
            const xMax = min + step * (index + 1);
            return Math.floor(Math.random() * (xMax - xMin) + xMin);
        }
    );

export const dataFromDB = [
    {
        name: 'Russia',
        data: generateArrayOfNum(years)
    },
    {
        name: 'Saudi Arabia',
        data: generateArrayOfNum(years)
    },
    {
        name: 'USA',
        data: generateArrayOfNum(years)
    },
    {
        name: 'Iraq',
        data: generateArrayOfNum(years)
    }
];
