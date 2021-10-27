import * as assert from "assert";
import {KFoldCrossValidation} from "../dist/KFoldCrossValidation";

describe('KFoldCrossValidationTest', function() {
    describe('KFoldCrossValidationTest', function() {
        const largeSample: Array<number> = []
        for (let i = 0; i < 1000; i++){
            largeSample.push(i);
        }
        it('testLargeSample10Fold', function() {
            let kFoldCrossValidation: KFoldCrossValidation<number> = new KFoldCrossValidation(largeSample, 10, 1);
            for (let i = 0; i < 10; i++){
                let items = new Set<number>()
                for (let item of kFoldCrossValidation.getTrainFold(i)){
                    items.add(item)
                }
                for (let item of kFoldCrossValidation.getTestFold(i)){
                    items.add(item)
                }
                assert.equal(100, kFoldCrossValidation.getTestFold(i).length)
                assert.equal(900, kFoldCrossValidation.getTrainFold(i).length)
                assert.equal(1000, items.size)
            }
        });
        it('testLargeSample5Fold', function() {
            let kFoldCrossValidation: KFoldCrossValidation<number> = new KFoldCrossValidation(largeSample, 5, 1);
            for (let i = 0; i < 5; i++){
                let items = new Set<number>()
                for (let item of kFoldCrossValidation.getTrainFold(i)){
                    items.add(item)
                }
                for (let item of kFoldCrossValidation.getTestFold(i)){
                    items.add(item)
                }
                assert.equal(200, kFoldCrossValidation.getTestFold(i).length)
                assert.equal(800, kFoldCrossValidation.getTrainFold(i).length)
                assert.equal(1000, items.size)
            }
        });
        it('testLargeSample2Fold', function() {
            let kFoldCrossValidation: KFoldCrossValidation<number> = new KFoldCrossValidation(largeSample, 2, 1);
            for (let i = 0; i < 2; i++){
                let items = new Set<number>()
                for (let item of kFoldCrossValidation.getTrainFold(i)){
                    items.add(item)
                }
                for (let item of kFoldCrossValidation.getTestFold(i)){
                    items.add(item)
                }
                assert.equal(500, kFoldCrossValidation.getTestFold(i).length)
                assert.equal(500, kFoldCrossValidation.getTrainFold(i).length)
                assert.equal(1000, items.size)
            }
        });
    });
});