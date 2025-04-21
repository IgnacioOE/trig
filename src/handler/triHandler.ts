import { TriController } from "../controller/triController";
import { Request, Response, NextFunction } from 'express';

const controller= new TriController();

export class TriHandler {
    async getTriangles(req: Request, res: Response, next: NextFunction) {
        try{
            const tri = await controller.getTriangle();
            const result = tri.map((triangle) => {
                const cos = controller.getCos(triangle.CA, triangle.hip);
                const sin = controller.getSin(triangle.CO, triangle.hip);
                const tan = controller.getTan(triangle.CA, triangle.CO);
                return {triangle, cos, sin, tan};
            });
            res.json(result);
        }
        catch (error) {
            next(error);
        }
    }
}