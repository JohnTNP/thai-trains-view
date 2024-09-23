import { NotImplementedError } from "../errors";
import { Train } from "../types";
import { IDebug, ITrainPosition } from "./interfaces";

export class TrainSystem implements ITrainPosition, IDebug {
    private _train: Train;
    private _x: number;
    private _y: number;

    constructor(train: Train) {
        this._train = train;
        this._x = 0;
        this._y = 0;
    }

    public getDebugInfo(): string {
        return `Train No.: ${this._train.trains_no}`
    }

    public get x(): number {
        throw new NotImplementedError("Method not implemented.")
    }

    public get y(): number {
        throw new NotImplementedError("Method not implemented.")
    }
}