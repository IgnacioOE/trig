import { triangle } from "../db/fake/fakeService";

export class TriController {
    async getTriangle() {
        return triangle;
    }
    async getCos (tri: { CA: number; hip: number }) {
        return tri.CA / tri.hip;;
    }
    async getSin (tri: { CO: number; hip: number }) {
        return tri.CO / tri.hip;
    }
    async getTan (tri: { CA: number; CO: number }) {
        return tri.CA / tri.CO;
    }
}
