import {CrossValidation} from "./CrossValidation";

export class StratifiedKFoldCrossValidation<T> extends CrossValidation<T>{

    private readonly instanceLists: Array<Array<T>>
    private readonly N: Array<number>

    /**
     * A constructor of {@link StratifiedKFoldCrossValidation} class which takes as set of class samples as an array of array of instances, a K (K in K-fold cross-validation) and a seed number,
     * then shuffles each class sample using the seed number.
     *
     * @param instanceLists Original class samples. Each element of the this array is a sample only from one class.
     * @param K K in K-fold cross-validation
     * @param seed Random number to create K-fold sample(s)
     */
    constructor(instanceLists: Array<Array<T>>, K: number, seed: number) {
        super();
        this.instanceLists = instanceLists;
        this.N = []
        for (let i = 0; i < instanceLists.length; i++){
            this.shuffleArray(instanceLists[i])
            this.N.push(instanceLists[i].length)
        }
        this.K = K
    }

    /**
     * getTrainFold returns the k'th train fold in K-fold stratified cross-validation.
     *
     * @param k index for the k'th train fold of the K-fold stratified cross-validation
     * @return Produced training sample
     */
    getTrainFold(k: number): Array<T> {
        const trainFold: Array<T> = [];
        for (let i = 0; i < this.N.length; i++){
            for (let j = 0; j < (k * this.N[i]) / this.K; j++){
                trainFold.push(this.instanceLists[i][j])
            }
            for (let j = ((k + 1) * this.N[i]) / this.K; j < this.N[i]; j++){
                trainFold.push(this.instanceLists[i][j])
            }
        }
        return trainFold
    }

    /**
     * getTestFold returns the k'th test fold in K-fold stratified cross-validation.
     *
     * @param k index for the k'th test fold of the K-fold stratified cross-validation
     * @return Produced testing sample
     */
    getTestFold(k: number): Array<T> {
        var testFold : Array<T> = []
        for (let i = 0; i < this.N.length; i++){
            for (let j = (k * this.N[i]) / this.K; j < ((k + 1) * this.N[i]) / this.K; j++){
                testFold.push(this.instanceLists[i][j])
            }
        }
        return testFold
    }
}