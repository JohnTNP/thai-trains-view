import { beforeAll, describe, expect, test } from 'vitest'
import { Train } from '../types'
import { TrainSystem } from './train'

describe('Train', () => {

    const train: Partial<Train> = {
        trains_no: 1,
    }

    let trainSystem: TrainSystem 

    beforeAll(() => {
        // init Train
        trainSystem = new TrainSystem(train as Train)
    })

    test('should initialize', () => {
        expect(trainSystem).toBeTruthy()
    })

    test('should get debug info', () => {
        expect(trainSystem.getDebugInfo()).toBe('Train No.: 1')
    })
})