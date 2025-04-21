import { triangle } from "../db/fake/fakeService";

export class TriController {
    async getTriangle() {
        return triangle;
    }
    getCos (CA: number, hip: number): number {
        return parseFloat((CA / hip).toFixed(3));
    }
    getSin (CO: number, hip: number): number {
        return parseFloat((CO / hip).toFixed(3));
    }
    getTan ( CA: number, CO: number ): number {
        return parseFloat((CA / CO).toFixed(3));
    }
}
