export abstract class CrossValidation<T> {

    protected K: number

    abstract getTrainFold(k: number): Array<T>
    abstract getTestFold(k: number): Array<T>
}