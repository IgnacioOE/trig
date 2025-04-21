import { TriController } from "../controller/triController";
import { Request, Response, NextFunction } from 'express';

const controller= new TriController();

export class TriHandler {
    async getTriangles(req: Request, res: Response, next: NextFunction) {
        try{
            const triangle = await controller.getTriangle();
            const result = triangle.map((tri) => {
                const cos = controller.getCos(tri);
                const sin = controller.getSin(tri);
                const tan = controller.getTan(tri);
                return {cos, sin, tan};
            });
            res.json({triangle, result});
        }
        catch (error) {
            next(error);
        }
    }
}