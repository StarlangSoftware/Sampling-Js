import {CrossValidation} from "./CrossValidation";
import {Random} from "nlptoolkit-util/dist/Random";

export class KFoldCrossValidation<T> extends CrossValidation<T> {

    private readonly instanceList: Array<T>
    private readonly N: number

    /**
     * A constructor of {@link KFoldCrossValidation} class which takes a sample as an array of instances, a K (K in K-fold cross-validation) and a seed number,
     * then shuffles the original sample using this seed as random number.
     *
     * @param instanceList Original sample
     * @param K K in K-fold cross-validation
     * @param seed Random number to create K-fold sample(s)
     */
    constructor(instanceList: Array<T>, K: number, seed: number) {
        super();
        this.instanceList = instanceList
        let random = new Random(seed)
        random.shuffle(this.instanceList)
        this.N = instanceList.length
        this.K = K
    }

    /**
     * getTrainFold returns the k'th train fold in K-fold cross-validation.
     *
     * @param k index for the k'th train fold of the K-fold cross-validation
     * @return Produced training sample
     */
    getTrainFold(k: number): Array<T> {
        const trainFold: Array<T> = [];
        for (let i = 0; i < (k * this.N) / this.K; i++){
            trainFold.push(this.instanceList[i])
        }
        for (let i = ((k + 1) * this.N) / this.K; i < this.N; i++){
            trainFold.push(this.instanceList[i])
        }
        return trainFold
    }

    /**
     * getTestFold returns the k'th test fold in K-fold cross-validation.
     *
     * @param k index for the k'th test fold of the K-fold cross-validation
     * @return Produced testing sample
     */
    getTestFold(k: number): Array<T> {
        const testFold: Array<T> = [];
        for (let i = (k * this.N) / this.K; i < ((k + 1) * this.N) / this.K; i++){
            testFold.push(this.instanceList[i])
        }
        return testFold;
    }
}