import { CrossValidation } from "./CrossValidation";
export declare class StratifiedKFoldCrossValidation<T> extends CrossValidation<T> {
    private readonly instanceLists;
    private readonly N;
    /**
     * A constructor of {@link StratifiedKFoldCrossValidation} class which takes as set of class samples as an array of array of instances, a K (K in K-fold cross-validation) and a seed number,
     * then shuffles each class sample using the seed number.
     *
     * @param instanceLists Original class samples. Each element of the this array is a sample only from one class.
     * @param K K in K-fold cross-validation
     * @param seed Random number to create K-fold sample(s)
     */
    constructor(instanceLists: Array<Array<T>>, K: number, seed: number);
    /**
     * getTrainFold returns the k'th train fold in K-fold stratified cross-validation.
     *
     * @param k index for the k'th train fold of the K-fold stratified cross-validation
     * @return Produced training sample
     */
    getTrainFold(k: number): Array<T>;
    /**
     * getTestFold returns the k'th test fold in K-fold stratified cross-validation.
     *
     * @param k index for the k'th test fold of the K-fold stratified cross-validation
     * @return Produced testing sample
     */
    getTestFold(k: number): Array<T>;
}
