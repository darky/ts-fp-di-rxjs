import { Observable, share } from 'rxjs'
import { diMap, diOnce } from 'ts-fp-di'

export function dirx<T1, R extends Observable<unknown>>(
  pred: (x1: T1) => R,
  fn1: (...args: any[]) => T1
): (() => R) & { raw: (x1: T1) => R }
export function dirx<T1, T2, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2
): (() => R) & { raw: (x1: T1, x2: T2) => R }
export function dirx<T1, T2, T3, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2, x3: T3) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2,
  fn3: (...args: any[]) => T3
): (() => R) & { raw: (x1: T1, x2: T2, x3: T3) => R }
export function dirx<T1, T2, T3, T4, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2, x3: T3, x4: T4) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2,
  fn3: (...args: any[]) => T3,
  fn4: (...args: any[]) => T4
): (() => R) & { raw: (x1: T1, x2: T2, x3: T3, x4: T4) => R }
export function dirx<T1, T2, T3, T4, T5, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2,
  fn3: (...args: any[]) => T3,
  fn4: (...args: any[]) => T4,
  fn5: (...args: any[]) => T5
): (() => R) & { raw: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5) => R }
export function dirx<T1, T2, T3, T4, T5, T6, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2,
  fn3: (...args: any[]) => T3,
  fn4: (...args: any[]) => T4,
  fn5: (...args: any[]) => T5,
  fn6: (...args: any[]) => T6
): (() => R) & { raw: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6) => R }
export function dirx<T1, T2, T3, T4, T5, T6, T7, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6, x7: T7) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2,
  fn3: (...args: any[]) => T3,
  fn4: (...args: any[]) => T4,
  fn5: (...args: any[]) => T5,
  fn6: (...args: any[]) => T6,
  fn7: (...args: any[]) => T7
): (() => R) & { raw: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6, x7: T7) => R }
export function dirx<T1, T2, T3, T4, T5, T6, T7, T8, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6, x7: T7, x8: T8) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2,
  fn3: (...args: any[]) => T3,
  fn4: (...args: any[]) => T4,
  fn5: (...args: any[]) => T5,
  fn6: (...args: any[]) => T6,
  fn7: (...args: any[]) => T7,
  fn8: (...args: any[]) => T8
): (() => R) & { raw: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6, x7: T7, x8: T8) => R }
export function dirx<T1, T2, T3, T4, T5, T6, T7, T8, T9, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6, x7: T7, x8: T8, x9: T9) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2,
  fn3: (...args: any[]) => T3,
  fn4: (...args: any[]) => T4,
  fn5: (...args: any[]) => T5,
  fn6: (...args: any[]) => T6,
  fn7: (...args: any[]) => T7,
  fn8: (...args: any[]) => T8,
  fn9: (...args: any[]) => T9
): (() => R) & { raw: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6, x7: T7, x8: T8, x9: T9) => R }
export function dirx<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R extends Observable<unknown>>(
  pred: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6, x7: T7, x8: T8, x9: T9, x10: T10) => R,
  fn1: (...args: any[]) => T1,
  fn2: (...args: any[]) => T2,
  fn3: (...args: any[]) => T3,
  fn4: (...args: any[]) => T4,
  fn5: (...args: any[]) => T5,
  fn6: (...args: any[]) => T6,
  fn7: (...args: any[]) => T7,
  fn8: (...args: any[]) => T8,
  fn9: (...args: any[]) => T9,
  fn10: (...args: any[]) => T10
): (() => R) & { raw: (x1: T1, x2: T2, x3: T3, x4: T4, x5: T5, x6: T6, x7: T7, x8: T8, x9: T9, x10: T10) => R }
export function dirx(pred: (...args: unknown[]) => Observable<unknown>, ...fns: (() => unknown)[]) {
  return diOnce(diMap((...args) => pred(...args).pipe(share()), ...(fns as [() => unknown])))
}
