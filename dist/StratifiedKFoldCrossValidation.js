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
    exports.StratifiedKFoldCrossValidation = void 0;
    const CrossValidation_1 = require("./CrossValidation");
    const Random_1 = require("nlptoolkit-util/dist/Random");
    class StratifiedKFoldCrossValidation extends CrossValidation_1.CrossValidation {
        /**
         * A constructor of {@link StratifiedKFoldCrossValidation} class which takes as set of class samples as an array of array of instances, a K (K in K-fold cross-validation) and a seed number,
         * then shuffles each class sample using the seed number.
         *
         * @param instanceLists Original class samples. Each element of the this array is a sample only from one class.
         * @param K K in K-fold cross-validation
         * @param seed Random number to create K-fold sample(s)
         */
        constructor(instanceLists, K, seed) {
            super();
            this.instanceLists = instanceLists;
            this.N = [];
            let random = new Random_1.Random(seed);
            for (let i = 0; i < instanceLists.length; i++) {
                random.shuffle(instanceLists[i]);
                this.N.push(instanceLists[i].length);
            }
            this.K = K;
        }
        /**
         * getTrainFold returns the k'th train fold in K-fold stratified cross-validation.
         *
         * @param k index for the k'th train fold of the K-fold stratified cross-validation
         * @return Produced training sample
         */
        getTrainFold(k) {
            const trainFold = [];
            for (let i = 0; i < this.N.length; i++) {
                for (let j = 0; j < (k * this.N[i]) / this.K; j++) {
                    trainFold.push(this.instanceLists[i][j]);
                }
                for (let j = ((k + 1) * this.N[i]) / this.K; j < this.N[i]; j++) {
                    trainFold.push(this.instanceLists[i][j]);
                }
            }
            return trainFold;
        }
        /**
         * getTestFold returns the k'th test fold in K-fold stratified cross-validation.
         *
         * @param k index for the k'th test fold of the K-fold stratified cross-validation
         * @return Produced testing sample
         */
        getTestFold(k) {
            var testFold = [];
            for (let i = 0; i < this.N.length; i++) {
                for (let j = (k * this.N[i]) / this.K; j < ((k + 1) * this.N[i]) / this.K; j++) {
                    testFold.push(this.instanceLists[i][j]);
                }
            }
            return testFold;
        }
    }
    exports.StratifiedKFoldCrossValidation = StratifiedKFoldCrossValidation;
});
//# sourceMappingURL=StratifiedKFoldCrossValidation.js.map