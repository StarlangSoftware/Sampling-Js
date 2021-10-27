import * as assert from "assert";
import {StratifiedKFoldCrossValidation} from "../dist/StratifiedKFoldCrossValidation";

describe('StratifiedKFoldCrossValidationTest', function() {
    describe('StratifiedKFoldCrossValidationTest', function() {
        let class1 = new Array<number>()
        for (let i = 0; i < 1000; i++){
            class1.push(i)
        }
        let class2 = new Array<number>()
        for (let i = 0; i < 3000; i++){
            class2.push(1000 + i)
        }
        let class3 = new Array<number>()
        for (let i = 0; i < 5000; i++){
            class3.push(4000 + i)
        }
        let largeSample = new Array<Array<number>>();
        largeSample[0] = class1
        largeSample[1] = class2
        largeSample[2] = class3
        it('testLargeSample10Fold', function() {
            let stratifiedKFoldCrossValidation: StratifiedKFoldCrossValidation<number> = new StratifiedKFoldCrossValidation<number>(largeSample, 10, 1);
            for (let i = 0; i < 10; i++){
                let items = new Set<number>()
                for (let item of stratifiedKFoldCrossValidation.getTrainFold(i)){
                    items.add(item)
                }
                for (let item of stratifiedKFoldCrossValidation.getTestFold(i)){
                    items.add(item)
                }
                assert.equal(900, stratifiedKFoldCrossValidation.getTestFold(i).length)
                assert.equal(8100, stratifiedKFoldCrossValidation.getTrainFold(i).length)
                assert.equal(9000, items.size)
                let trainCounts = [0, 0, 0]
                for (let integer of stratifiedKFoldCrossValidation.getTrainFold(i)) {
                    if (integer < 1000) {
                        trainCounts[0]++
                    } else {
                        if (integer < 4000) {
                            trainCounts[1]++
                        } else {
                            trainCounts[2]++
                        }
                    }
                }
                assert.equal(900, trainCounts[0])
                assert.equal(2700, trainCounts[1])
                assert.equal(4500, trainCounts[2])
                let testCounts = [0, 0, 0]
                for (let integer of stratifiedKFoldCrossValidation.getTestFold(i)) {
                    if (integer < 1000) {
                        testCounts[0]++
                    } else {
                        if (integer < 4000) {
                            testCounts[1]++
                        } else {
                            testCounts[2]++
                        }
                    }
                }
                assert.equal(100, testCounts[0])
                assert.equal(300, testCounts[1])
                assert.equal(500, testCounts[2])
            }
        });
        it('testLargeSample5Fold', function() {
            let stratifiedKFoldCrossValidation: StratifiedKFoldCrossValidation<number> = new StratifiedKFoldCrossValidation<number>(largeSample, 5, 1);
            for (let i = 0; i < 5; i++){
                let items = new Set<number>()
                for (let item of stratifiedKFoldCrossValidation.getTrainFold(i)){
                    items.add(item)
                }
                for (let item of stratifiedKFoldCrossValidation.getTestFold(i)){
                    items.add(item)
                }
                assert.equal(1800, stratifiedKFoldCrossValidation.getTestFold(i).length)
                assert.equal(7200, stratifiedKFoldCrossValidation.getTrainFold(i).length)
                assert.equal(9000, items.size)
                let trainCounts = [0, 0, 0]
                for (let integer of stratifiedKFoldCrossValidation.getTrainFold(i)) {
                    if (integer < 1000) {
                        trainCounts[0]++
                    } else {
                        if (integer < 4000) {
                            trainCounts[1]++
                        } else {
                            trainCounts[2]++
                        }
                    }
                }
                assert.equal(800, trainCounts[0])
                assert.equal(2400, trainCounts[1])
                assert.equal(4000, trainCounts[2])
                let testCounts = [0, 0, 0]
                for (let integer of stratifiedKFoldCrossValidation.getTestFold(i)) {
                    if (integer < 1000) {
                        testCounts[0]++
                    } else {
                        if (integer < 4000) {
                            testCounts[1]++
                        } else {
                            testCounts[2]++
                        }
                    }
                }
                assert.equal(200, testCounts[0])
                assert.equal(600, testCounts[1])
                assert.equal(1000, testCounts[2])
            }
        });
        it('testLargeSample2Fold', function() {
            let stratifiedKFoldCrossValidation: StratifiedKFoldCrossValidation<number> = new StratifiedKFoldCrossValidation<number>(largeSample, 2, 1);
            for (let i = 0; i < 2; i++){
                let items = new Set<number>()
                for (let item of stratifiedKFoldCrossValidation.getTrainFold(i)){
                    items.add(item)
                }
                for (let item of stratifiedKFoldCrossValidation.getTestFold(i)){
                    items.add(item)
                }
                assert.equal(4500, stratifiedKFoldCrossValidation.getTestFold(i).length)
                assert.equal(4500, stratifiedKFoldCrossValidation.getTrainFold(i).length)
                assert.equal(9000, items.size)
                let trainCounts = [0, 0, 0]
                for (let integer of stratifiedKFoldCrossValidation.getTrainFold(i)) {
                    if (integer < 1000) {
                        trainCounts[0]++
                    } else {
                        if (integer < 4000) {
                            trainCounts[1]++
                        } else {
                            trainCounts[2]++
                        }
                    }
                }
                assert.equal(500, trainCounts[0])
                assert.equal(1500, trainCounts[1])
                assert.equal(2500, trainCounts[2])
                let testCounts = [0, 0, 0]
                for (let integer of stratifiedKFoldCrossValidation.getTestFold(i)) {
                    if (integer < 1000) {
                        testCounts[0]++
                    } else {
                        if (integer < 4000) {
                            testCounts[1]++
                        } else {
                            testCounts[2]++
                        }
                    }
                }
                assert.equal(500, testCounts[0])
                assert.equal(1500, testCounts[1])
                assert.equal(2500, testCounts[2])
            }
        });
    });
});