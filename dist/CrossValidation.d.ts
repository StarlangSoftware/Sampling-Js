export declare abstract class CrossValidation<T> {
    protected K: number;
    shuffleArray(array: Array<T>): void;
    abstract getTrainFold(k: number): Array<T>;
    abstract getTestFold(k: number): Array<T>;
}
