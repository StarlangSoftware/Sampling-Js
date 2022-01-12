(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-util/dist/Random"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bootstrap = void 0;
    const Random_1 = require("nlptoolkit-util/dist/Random");
    class Bootstrap {
        /**
         * A constructor of {@link Bootstrap} class which takes a sample an array of instances and a seed number, then creates a bootstrap
         * sample using this seed as random number.
         *
         * @param instanceList  Original sample
         * @param seed Random number to create boostrap sample
         */
        constructor(instanceList, seed) {
            let N;
            let random = new Random_1.Random(seed);
            N = instanceList.length;
            this.instanceList = new Array();
            for (let i = 0; i < N; i++) {
                this.instanceList.push(instanceList[random.nextInt(N)]);
            }
        }
        /**
         * getSample returns the produced bootstrap sample.
         *
         * @return Produced bootstrap sample
         */
        getSample() {
            return this.instanceList;
        }
    }
    exports.Bootstrap = Bootstrap;
});
//# sourceMappingURL=Bootstrap.js.map