export declare class Bootstrap<T> {
    private instanceList;
    /**
     * A constructor of {@link Bootstrap} class which takes a sample an array of instances and a seed number, then creates a bootstrap
     * sample using this seed as random number.
     *
     * @param instanceList  Original sample
     * @param seed Random number to create boostrap sample
     */
    constructor(instanceList: Array<T>, seed: number);
    /**
     * getSample returns the produced bootstrap sample.
     *
     * @return Produced bootstrap sample
     */
    getSample(): Array<T>;
}
