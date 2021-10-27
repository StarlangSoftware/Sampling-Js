import { CrossValidation } from "./CrossValidation";
export declare class KFoldCrossValidation<T> extends CrossValidation<T> {
    private readonly instanceList;
    private readonly N;
    /**
     * A constructor of {@link KFoldCrossValidation} class which takes a sample as an array of instances, a K (K in K-fold cross-validation) and a seed number,
     * then shuffles the original sample using this seed as random number.
     *
     * @param instanceList Original sample
     * @param K K in K-fold cross-validation
     * @param seed Random number to create K-fold sample(s)
     */
    constructor(instanceList: Array<T>, K: number, seed: number);
    /**
     * getTrainFold returns the k'th train fold in K-fold cross-validation.
     *
     * @param k index for the k'th train fold of the K-fold cross-validation
     * @return Produced training sample
     */
    getTrainFold(k: number): Array<T>;
    /**
     * getTestFold returns the k'th test fold in K-fold cross-validation.
     *
     * @param k index for the k'th test fold of the K-fold cross-validation
     * @return Produced testing sample
     */
    getTestFold(k: number): Array<T>;
}
