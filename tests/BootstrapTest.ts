import * as assert from "assert";
import {Bootstrap} from "../dist/Bootstrap";

describe('BootstrapTest', function() {
    describe('BootstrapTest', function() {
        it('testLargeSample', function() {
            const largeSample: Array<number> = []
            for (let i = 0; i < 1000000; i++){
                largeSample.push(i);
            }
            const bootstrap: Bootstrap<number> = new Bootstrap<number>(largeSample, 1);
            const sample: Array<number> = bootstrap.getSample();
            const set = new Set<number>();
            for (let item of sample){
                set.add(item)
            }
            assert.equal(Math.floor(set.size / 1000), 632);
        });
    });
});
