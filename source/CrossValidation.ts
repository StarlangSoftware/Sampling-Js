export abstract class CrossValidation<T> {

    protected K: number

    shuffleArray(array: Array<T>) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    abstract getTrainFold(k: number): Array<T>
    abstract getTestFold(k: number): Array<T>
}