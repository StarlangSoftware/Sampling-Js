(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./CrossValidation", "nlptoolkit-util/dist/Random"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KFoldCrossValidation = void 0;
    const CrossValidation_1 = require("./CrossValidation");
    const Random_1 = require("nlptoolkit-util/dist/Random");
    class KFoldCrossValidation extends CrossValidation_1.CrossValidation {
        /**
         * A constructor of {@link KFoldCrossValidation} class which takes a sample as an array of instances, a K (K in K-fold cross-validation) and a seed number,
         * then shuffles the original sample using this seed as random number.
         *
         * @param instanceList Original sample
         * @param K K in K-fold cross-validation
         * @param seed Random number to create K-fold sample(s)
         */
        constructor(instanceList, K, seed) {
            super();
            this.instanceList = instanceList;
            let random = new Random_1.Random(seed);
            random.shuffle(this.instanceList);
            this.N = instanceList.length;
            this.K = K;
        }
        /**
         * getTrainFold returns the k'th train fold in K-fold cross-validation.
         *
         * @param k index for the k'th train fold of the K-fold cross-validation
         * @return Produced training sample
         */
        getTrainFold(k) {
            const trainFold = [];
            for (let i = 0; i < (k * this.N) / this.K; i++) {
                trainFold.push(this.instanceList[i]);
            }
            for (let i = ((k + 1) * this.N) / this.K; i < this.N; i++) {
                trainFold.push(this.instanceList[i]);
            }
            return trainFold;
        }
        /**
         * getTestFold returns the k'th test fold in K-fold cross-validation.
         *
         * @param k index for the k'th test fold of the K-fold cross-validation
         * @return Produced testing sample
         */
        getTestFold(k) {
            const testFold = [];
            for (let i = (k * this.N) / this.K; i < ((k + 1) * this.N) / this.K; i++) {
                testFold.push(this.instanceList[i]);
            }
            return testFold;
        }
    }
    exports.KFoldCrossValidation = KFoldCrossValidation;
});
//# sourceMappingURL=KFoldCrossValidation.js.map