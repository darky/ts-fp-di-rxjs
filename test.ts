import test from 'node:test'
import assert from 'node:assert'
import { dirx } from './index'
import { from, lastValueFrom, map, merge, mergeMap } from 'rxjs'
import { diInit } from 'ts-fp-di'

test('basic', async () => {
  await diInit(async () => {
    const incNumbers$ = dirx(
      arr => from(arr).pipe(map(n => n + 1)),
      () => [1, 2, 3]
    )

    const resp = await lastValueFrom(incNumbers$())
    assert.strictEqual(resp, 4)
  })
})

test('multicast', async () => {
  await diInit(async () => {
    let call = 0

    const inc = async (n: number) => {
      call += 1
      return n + 1
    }

    const incNumbers$ = dirx(
      arr => from(arr).pipe(mergeMap(inc)),
      () => [1, 2, 3]
    )

    const numbersToStrings$ = dirx(numbers$ => numbers$.pipe(map(n => n.toString())), incNumbers$)

    const decNumbers$ = dirx(numbers$ => numbers$.pipe(map(n => n - 1)), incNumbers$)

    await lastValueFrom(merge(numbersToStrings$(), decNumbers$()))

    assert.strictEqual(call, 3)
  })
})
