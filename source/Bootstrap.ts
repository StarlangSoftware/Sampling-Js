export class Bootstrap<T> {

    private instanceList: Array<T>

    /**
     * A constructor of {@link Bootstrap} class which takes a sample an array of instances and a seed number, then creates a bootstrap
     * sample using this seed as random number.
     *
     * @param instanceList  Original sample
     * @param seed Random number to create boostrap sample
     */
    constructor(instanceList: Array<T>, seed: number) {
        let N;
        N = instanceList.length
        this.instanceList = new Array<T>()
        for (let i = 0; i < N; i++){
            this.instanceList.push(instanceList[Math.floor(Math.random() * N)])
        }
    }

    /**
     * getSample returns the produced bootstrap sample.
     *
     * @return Produced bootstrap sample
     */
    getSample(): Array<T>{
        return this.instanceList
    }
}