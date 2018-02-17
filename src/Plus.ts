import { HKT, URIS, URIS2, URIS3, Type, Type2, Type3 } from './HKT'
import { Alt, Alt1, Alt2, Alt3, Alt2C, Alt3C } from './Alt'

/**
 * The `Plus` type class extends the `Alt` type class with a value that
 * should be the left and right identity for `alt`.
 *
 * It is similar to `Monoid`, except that it applies to types of
 * kind `* -> *`, like `Array` or `Option`, rather than concrete types like
 * `string` or `number`.
 *
 * `Plus` instances should satisfy the following laws:
 *
 * 1. Left identity: `A.alt(zero, x) == x`
 * 2. Right identity: `A.alt(x, zero) == x`
 * 3. Annihilation: `A.map(zerp, f) == zero`
 *
 * @typeclass
 */
export interface Plus<F> extends Alt<F> {
  zero: <A>() => HKT<F, A>
}

export interface Plus1<F extends URIS> extends Alt1<F> {
  zero: <A>() => Type<F, A>
}

export interface Plus2<F extends URIS2> extends Alt2<F> {
  zero: <L, A>() => Type2<F, L, A>
}

export interface Plus3<F extends URIS3> extends Alt3<F> {
  zero: <U, L, A>() => Type3<F, U, L, A>
}

export interface Plus2C<F extends URIS2, L> extends Alt2C<F, L> {
  zero: <A>() => Type2<F, L, A>
}

export interface Plus3C<F extends URIS3, U, L> extends Alt3C<F, U, L> {
  zero: <A>() => Type3<F, U, L, A>
}
