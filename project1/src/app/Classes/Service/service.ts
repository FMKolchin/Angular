export class Service {
    id?:number;
    name?: string;
    description: string="";
    image?: string;
    priceRange: { low: number, high: number } = { low:20,high:100 };
    avgServiceTime?: number;
    images: Array<string> = [""];

}
