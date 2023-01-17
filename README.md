# web-agent

WE ARE FINALLY DOING IT.

Browser-based teleoreactive agent development.

## How to run the system

### Install dependencies

```console
user@machine:~$ npm install -D live-server webpack webpack-cli typescript ts-loader
```

### Build the system

```console
user@machine:~$ cd vacuumworld-ts && npm run build
```

```console
user@machine:~$ live-server
```

## Notes

developer run `parcel index.html`
install parcel with npm! (its good)

Possible code editors

[https://github.com/codemirror/CodeMirror](https://github.com/codemirror/CodeMirror)

[https://csplayground.io/how-to-build-website-like-codecademy](https://csplayground.io/how-to-build-website-like-codecademy)

Yacc/Bison for javascript for the interpreter

[https://gerhobbelt.github.io/jison/docs/](https://gerhobbelt.github.io/jison/docs/)

## Teleora

At some point soon I (Ben) will write a proper program spec for this, I need to dig out an old version of it.

// goals are evaluated in order.
`G(X) : X < 1 -> action1` // take `action1` if `X < 1`
`G(_) -> action2` // default condition (always true) take `action2`

// conditions
`G(X) : C1(X), C2(X) -> action1` // evaluate `C1(X)` and `C2(X)` in order.
`C1(X) : X < 1` // first condition
`C2(X) : X > 0` // second condition

// invalid goal (static checking?)
`G(X) : C1(X), C2(X) -> action1` // `G(X)` is not valid since `C1 && C2` is always false.
`C1(X) : X < 1` // first condition
`C2(X) : X > 1` // second condition

// branching

`G(X) : X[0] > 1 -> action1`
`>> G({1,2})`

`> 1 > 1 -> F`
`> 2 > 1 -> action1`

All possibilities will be checked for each goal, if they all fail then the next goal will be tested.

### Types

atom := abc // lowercase (grounded), can act like a pointer to a goal, condition or action, can also be a `key:value` pair
function := // fun(X,Y) lowercase (grounded), can be evaluated, returns a value, which is T/F for a condition, or an action for a goal

int := 1 //
float := 1.0 //
str := 'string' or "string" // can use single or double quotes,
list := [a,d,c]             // valid element types: int, float, string, atom, set, list, map
set := {a,b,c}              // valid element types: int, float, string, atom, set, list? map?

map := {a:b, b:c, c:d}      // valid key type: int, float, string, atom. valid element types: int, float, string, atom, set, list, map
omap := [a:b, b:c, c:d]     // valid key type: int, float, string, atom. valid element types: int, float, string, atom, set, list, map

### Variables

examples of `X`: `atom` or `'string'` or `1` or `1.0` or `[1,2,3]` or `{1,2,3}` or `{1:2, 2:3, 3:4}` or `[1:2, 2:3]` or `fun(X)`

#### Pattern matching

`K:V = a:b` // `K=a, V=b`
`XandY = meandyou` // `X = me, Y = you`
`XandY = meandyouandyou` // `X = me, y= youandyou` or `X = meandyou, Y = you` the program will branch

`[X,2,1,Y] = [1,2,1]` // failure

#### Collections

##### Lists

[X, Y] = [a,b], [1,2] // will ground a 2 element list, X = a, Y = b
[X] = [a] // will ground a 1 element list, X = a

###### Pipe `|` operator for lists

The pipe operator will always try to ground the variable on the RHS to a list (which may be empty). Variables on the left will be grounded as elements of the list.

`[X | Y] = [a,b,c]` // will ground `N > 0` element list `X = a, Y = [b, c]`
`[X, Y | Z] = [a,b,c]` // will ground `N > 1` element list, `X = a, Y = b, Z = [c]`
`[X, Y | Z] = [a,b]` // will ground `N > 1` element list, `X = a, Y = b, Z = []`

`X = [a | Y], Y = [b,c]` // the pipe operator can be used to append one list to another lists `X = [a,b,c]`
`X = [Y | Z], Y = a, Z = [b,c]` // `X = [a,b,c]`
`X = [Y | Z], Y = [a], Z = [b,c]` // `X = [[a],b,c]`
`[X,2,1|Y] = [1,2,1]` // `X = 1, Y = []`

`[Y | Z] = X, X = [1,2,3]` // `Y = 1, Z = [2,3]` the pipe operator can be used to split lists

###### Joining lists

`Z = X | Y, X = [a], Y = [b]` // join lists `Z = [a,b]`
`Z = X | Y, X = [a], Y = b`   // this will fail as `Y` is not a list
`Z = X | [Y], X = [a], Y = b`  // `Z = [a,b]`

###### Unpacking lists

`Z = | Y, Y = [[a,b]]` // `Z = [a,b]`
`Z = | Y, Y = [[a,b],[c,d]]` // this will fail
`Z = | Y, Y = [a,b]` // `Z = ab` this will only work if the list elements are atoms or strings
`Z = [a | [b,c]]` // `Z = [a,b,c]`

If the pipe operator is used without brackets, the LHS will not be unpacked. One can think of the brackets around `[X | Y]` as belonging to `X`. list joining can only be done in the body of a function.

###### Ellipses '...' operator

The ellipsis operator disappears after grounding, it represents a `N >= 0` element list `... = a,b,c` without list brackets.

`[... X] = [a,b,c]` // will ground an `N > 0` element list `X = c`
`[X ...] = [a,b,c]` // will ground an `N > 0` element list `X = a`

If the ellipsis operator is used without list brackets, the given list will be split `... X = [a,b,c]` `... X = [a], [b], [c]`

`... X = [a, b, c]` // will ground an `N > 0` element list, `X = [c]`
`X ... = [a, b, c]` // will ground an `N > 0` element list, `X = [a]`

`[X ... Y] = [a,b,c]`     // will ground an `N > 1` element list taking the first and last element, `X = a, Y = c`
`[X ... | Y ] = [a,b,c]`  // will ground an `N > 0` element list, `X = a, Y = [c]`
`[X | ... Y] = [a,b,c]`   // will ground an `N > 1` element list, `X = a, Y = [c]`, essentially `... Y = [b, c]`
`[X | Y ... ] = [a,b,c]`  // will ground an `N > 1` element list, `X = a, Y = [b]`, essentially `Y ... = [b, c]`

`X = [a, ..., Y], Y = b` // add element to the end of a list `X = [a,b]` equivalent to `X = [a, Y]`, `Y = b` or `X = [a | Y], Y = [b]`

###### Slice `:` operator

The slice operator allows for more find grained control over indexing, some operators are equivalent to the pipe operator but provide greater flexibility. The pipe operator acts as a special case of slicing where we are interested in collecting variables. The grounding semantics are more complex, elements are usually discarded. ':' has a special meaning and cannot be used as a list element unless surrounded by quotes (i.e. as string).

`X = [a,b,c], Y = X[:]`  // `Y = [a,b,c]` this is equivalent to `Y = X`.

`X = [a,b,c], Y = X[1:]` // `Y = [b,c]` the general form is `X[N:]` which will take the elements after index `N` (inclusive). This example is equivalent to `[X | Y] = [a,b,c]`
`X = [a,b,c], Y = X[-1:]` // `Y = [c]` negative indices are resolved as `list length - N`

`X = [a,b,c], Y = X[:1]` // `Y = [a]` the general form is `X[:N]` which will take the first elements up to index `N` (exclusive)
`X = [a,b,c], Y = X[:-1]` // `Y = [a,b]` negative indices are resolved as `list length - N`

`X = [a,b,c,d], Y = X[1:3]` // `Y = [b,c]` the general form is `X[N:M]` which will take the elements between `N` (inclusive) and `M` (exclusive)

`X = [a,b,c], Y = X[::]`  // `Y = [a,b,c]` this is equivalent to `Y = X`.
`X = [a,b,c], Y = X[::1]` // `Y = [a,b,c]` this is equivalent to `Y = X`.

`X = [a,b,c,d], Y = X[::2]`  // `Y = [a,c]` the general form is `X[::N]` which will take every `N`th element.
`X = [a,b,c,d], Y = X[1::2]` // `Y = [b,d]` the general form is `X[M::N]` which will take every `N`th element starting from `M` (inclusive).
`X = [a,b,c,d], Y = X[:1:2]` // `Y = [a]` the general form is `X[:M:N]` which will take every `N`th element ending at `M` (exclusive).

`X = [a,b,c,d], Y = X[::-1]`  // `Y = [d,c,b,a]` the general form is `X[::-N]` which will take every `N`th element in reverse.

`X = [a,b,c][1:]` // `X = [b,c]` the above operations can all be used in list building.

###### Arithmetic operators `+`,`-`,`*`,`/`

`X = [1,2,3] + [1,2,3]` // `X = [2,4,6]` if both lists are of equal length the operator will be applied recursively.
`X = [1,2,3] - [1,2,3]` // `X = [0,0,0]` if both lists are of equal length the operator will be applied recursively.
`X = [1,2,3] * [1,2,3]` // `X = [1,4,9]` if both lists are of equal length the operator will be applied recursively.
`X = [1,2,3] / [1,2,3]` // `X = [1,1,1]` if both lists are of equal length the operator will be applied recursively.

This will only work if the operator is defined for the element type.

##### Sets

Sets are unordered collections of unique elements e.g. `{a,b,c,}`. Since they are unordered they have unique semantics when it comes to the basic collection operator.  

###### Pipe `|` operator for sets

`X = { Y | Z }, Y = a, Y = {b}` // `X = {a,b}`
`X = { Y | Z }, Y = a, Y = {a}` // `X = {a}`
`X = { Y | Z }, Y = {a}, Y = {b}` // `X = {{a},b}`
`X = Y | Z, Y = {a}, Z = {b}` // `X = {a,b}`

Splitting sets will lead to branching in the program execution.

`Z | Y = X, X = {a,b}` // `Z = a, Y = {b}` or `Z = b, Y = {a}` the program would split here using all possible permutations of the set...
This could similarly be the case for slicing and ellipsis... but would be complex to implement? maybe not TODO elaborate on this.

TODO other operators...

##### Maps

Maps are unordered collections of `key:value` pairs e.g. `{a:b, b:c, c:d}`.

`X = {a:b, b:c}, Y = X[a]` // `Y = b` maps can be indexed by their keys

###### Pipe `|` operator for maps

`X = {Y | Z}, Y = a:b, Z = {b:c}` // `X = {a:b, b:c}`
`X = {Y | Z}, Y = a:b, Z = {a:c, b:c}` // `X = {a:b, b:c}` the LHS takes priority in uniqueness of keys, here we can think of `Y` being added to `Z`.
`X = {U, Y | Z}, U = a:b, Y = a:c, Z = {a:d, b:c}` // `X = {a:b, b:c}` the LHS takes priority in uniqueness of keys.

Splitting maps follows the semantics of set where the `key` is the set element.

##### Ordered Maps

Ordered maps are a list/map cross over, they are ordered and act like lists for all collection operations. Their only advantage is that they can be indexed by their keys. The key value pairs are otherwise treated as atoms. If a numerical index is used, the `key:value` pair will be retrieved as an atom. If the key is of type int then only the value will be retrieved.

`Z | Y = [a:b, b:c]`  // `Z = a:b, y = [b:c]`
`X = [a:b, b:c], Y = X[0]`  // `Y = a:b`
`X = [1:b, 0:c], Y = X[0]`  // `Y = c`
`[X:Y] = [a:b]` // `X = a, Y = b`
`[X:Y | Z] = [a:b]` // `X = a, Y = b, Z = []`

##### Strings & atoms

The pipe, ellipsis and slice operators can all be used on string data for similar effects.

###### Pipe `|` operator for strings and atoms

`Z = X | Y, X = a, Y = b` // `Z = ab` the pipe operator can be used to join characters.

`[X | Y] = abc` // will ground `N > 0` character string/atom `X = a, Y = bc`
`[X, Y | Z] = abc` // will ground `N > 1` character string/atom, `X = a, Y = b, Z = c`
`[X, Y | Z] = ab` // will ground `N > 1` character string/atom, `X = a, Y = b, Z = <EMPTY>` the empty string `''`, the empty atom is a special case, it is analogous to the null pointer.

###### Ellipsis `...` operator

This works the same as with lists, working on characters rather than list elements.

###### Slice `:` operator for strings and atoms

This works the same as with lists, working on characters rather than list elements.

###### Conversions

`Y = [a,b,c], Z = { | Y }`  // `Z = {a,b,c}`
