# Teleora Language Spec

## Program Structure

#### Goals 
`G(P1, P2, ..., Pn) : C1, C2, ..., Cn -> A`
- `G(P)` is a goal header
- `G` is the goal name (e.g. `goal`).
- A goal takes one or more percepts `P1, P2, ... Pn` as input.
- Each goal comes with a collection of conditional statements `C1, C2, ..., Cn`, and example of a condition might be `P > 0`.
- If all conditional statements evaluate to `true` the action `A` is selected for execution.
- `A` might also be a subgoal.

**Goal Example:** 
```
goal(P) : P <= 0 -> turn
goal(P) : P > 0 -> move
goal(P) :-> idle
```
Each goal statement is evaluated in order, the first goal specified in the `main.tela` is treated as the top-level goal (entry point). The default goal statement contains no conditional statements.

**Subgoal Example:**
```
goal(X, Map) : X <= 0 -> navigate(B) 
goal(X, _) : X > 0 -> move
goal(_, _) :-> idle
navigate(Map) : ... -> ...
...
```

**Code comments** are denoted with double forward slash
`// example comment`

## Types

`atom` - atoms may refer to named statements (e.g. in goal statement headers), actions, or be used as data (similar to a `string` type in other languages). 

 ---------- 
 
`variable` - variables are grounded (assigned a value) during the evaluation of a goal statement. They may appear anywhere in the header or body of a goal statement. They are denoted by capitalization (following the regex `[A-Z][a-zA-Z0-9]*`). Examples have already been seen above (`P`, `X` and `Map`),

 ---------- 
 
`number` - may be an `int` or `float` e.g. `1` or `1.0`. 

 ---------- 
 
`list` - an ordered collection of data declared in square brackets `[]`. Elements of a list may be extracted using variables, or by indexing. 

Example unpacking lists: 
```
goal(X) :-> subgoal(X)
subgoal([A,B]) : A > 0, B > 0 -> action
```
Assuming `X` is a list with two elements, it will be unpacked into `A` and `B` in `subgoal`. If the list length is not known the pipe operator `|` may be used.
```
subgoal([A|C])
```
if the list `[1,2,3]` is given as input to `subgoal([A|C])` then `A = 1` and `C = [2,3]`. Lists function similarly to the Prolog language. 

Other valid examples:
```
subgoal([A,B|C])  // evaluated if the list contains least two elements.
>> subgoal([1,2,3,4]) then A = 1, B = 2, C = [3, 4]
>> subgoal([1,2]) then A = 1, B = 2, C = []

subgoal([A])      // evaluated if the list cotains exactly one element.
>> subgoal([1]) then A = 1

subgoal([])       // evaluated if the list is empty.
```

Specific elements of a list can be found by indexing as follows: `A[I]` where `I` is an `int` value, this is typically done in the evaluation of conditional statements, for example:
```
subgoal(X) : X[3] > 0 -> action
```
It is possible to use a variable index as follows:
```
subgoal(X, I) : X[I] > 0 -> action
```



 ---------- 
 
`ulist` - unordered lists function similarly to lists, but have some quirks that make them useful. They are denoted by curly brackets `{}`.  

Looping with `ulist` example:
```
goal({A | B}) : A > 0 -> subgoal(B)
```
The following input will *expand* the above goal.
```
>> goal({-1,0,1}
goal({-1 | { 0, 1}}) : -1 > 0  (FAIL)
goal({ 0 | {-1, 1}}) :  0 > 0  (FAIL) 
goal({ 1 | {-1, 0}}) :  1 > 1  (SUCCESS)
``` 
The possible permutations of the `ulist` are checked in no particular order until one succeeds. The use as above can be seen as a kind of _existence_ operator. 

Another example: 
```
goal({A,B}) : A > 0 -> subgoal(B)
>> goal({-1, 1})
goal({-1, 1}) : -1 > 0 (FAIL)
goal({1, -1}) : 1 > 0 (SUCCESS)
```

 Yet another example:
 
```
goal({A,B}) : A > 0 -> subgoal(B)
>> goal({1, 2})
goal({1, 2}) : 1 > 0 (SUCCESS)
goal({2, 1}) : 2 > 0 (SUCCESS)
```
In the above, if one grounded of `B` fails in the subgoal then the other will be tried. The goal statement here can be thought of as a shorthand for the following: 
```
goal([A,B]) : A > 0 -> subgoal(B)
goal([B,A]) : A > 0 -> subgoal(B)
```
The only difference being that order of execution is undetermined.

There is further discussion of looping with `list` and `ulist` in later sections (**TODO**).
**TODO** indexing `ulist`?

---------- 

`object` - objects are similar to `ulist` but have named values. They are similar to _maps_ in other languages. They are denoted as a collection of `key:value` pairs in curly brackets `{}`.

Example of a coordinate object: `{ x : 1, y : 2 }`  with the properties `x` and `y`.

Objects can be _matched_ in goal headers like any other type. For example:

```
goal({ x : X, y : Y }) : X > 0, Y > 0 -> action
```

properties can also be accessed using _dot notation_ as follows:

```
goal(P) : P.x > 0 P.y > 0 -> action
```


properties can be checked (for equality) directly in the goal header as follows:
```
goal({ x : 10, y : 10 }) :-> action
>> goal({ x : 0, y : 0})   (FAIL)
>> goal({ x : 10, y : 10}) (SUCCESS)
```

### pipe `|` operator

objects are matched based on their properties. The pipe operator `|` can be used in a similar fashion to lists to pack additional properties into a new object. For example:

```
goal({ x : X | Obj}) : x > 0 -> subgoal(Obj) 
>> goal({x : 1, y : 1}) : 1 > 0 -> subgoal({ y : 1}) 
```
additional properties can be ignored by using the anonymous variable `_`. For example: 

```
goal({ x : X | _}) : x > 0 -> action 
>> goal({x : 1, y : 1}) : 1 > 0 -> action
```
if the `|` operator is missing here then the goal will fail as it not contain the required property `y`.
```
goal({x : X}) : x > 0 -> action 
>> goal({x : 1, y : 1}) (FAIL)
```
### Variable object keys `K:V`

So far all object keys have been grounded i.e. of the form `k:V`. Keys may also be variables under some circumstances and will begin to function like the `ulist` type. For example: 
```
goal({K:V | _}) :-> subgoal(K,V)
```
will match each object property and try the subgoal, effectively looping over the object's properties. 




## Equality & Pattern Matching

Examples of pattern matching in goal statement headers have been seen above. These examples are checking for equality. A variable `X` will match _anything_. 

In some instances it may be more desirable to check for equality as part of a conditional statement.  The equals operate `=` checks for equality, but may also be used to _assign_ ungrounded variables. For example:

```
goal(P) : Q = 10,  P = Q -> action
```
`Q` will be assigned the value `10` as it is ungrounded, `P` and `Q` will then be check for equality.
Assignment conditionals like `Q = 10` always succeed. It is not possible to assign one ungrounded value to another (the RHS of `=` must always be grounded when the conditional is evaluated). Note that the above can be written in short hand as `goal(10) :-> action`.

#### Populating Data Structures

Sometimes we want to create objects or collections for subsequent use in subgoals. This can be done both with assignment or matching. The following are equivalent:
```
goal(P) :-> subgoal({x : 10, y : P}) 
goal(P) : Y = P, subgoal({x : 10, y : Y})
``` 
Elements of a `list`, `ulist` or `object` cannot be _reassigned_ (they are immutable) a new collection must be built. This can be done with the pipe operator, for example:
```
goal(L1) : L2 = [0|L1] -> subgoal(L2)
>> goal([1,2]) : [0,1,2] = [0|[1,2]] -> subgoal([0,1,2])

goal(L1) : L2 = [[0]|L1] -> subgoal(L2)
>> goal([1,2]) : [[0],1,2] = [[0]|[1,2]] -> subgoal([[0],1,2])
```

Collections can be joined with the `+` operator, the following are equivalent: 
```
goal(L1) : L2 = [0|L1] -> subgoal(L2)
goal(L1) : L2 = [0]+L1 -> subgoal(L2)
goal(L1) :-> subgoal([0]+L1)
```
The same can be done for objects, for example:
```
goal(X) :-> subgoal(X + { y : 10})
>> goal({x : 10}) :-> subgoal({x : 10, y : 10})
```
Pipes might also be used to the same effect. 
```
goal({x : X}) :-> subgoal({ x : X | { y : 10}})
>> goal({x : 10}) :-> subgoal({x : 10, y : 10})
```
The `+` operate is useful when combining objects with many properties. When combining collections, the LHS always take priority in resolving property conflicts, for example:
```
goal(A, B) : C = B + A -> subgoal(C)
>> goal({x : 10, y : 10}, {x : 3}) : C = B + A -> subgoal({ x : 3, y : 10})
goal(A, {x : X}) :-> subgoal({x : X | A}) 
>> goal({x : 10, y : 10}, {x : 3}) :-> subgoal({ x : 3, y : 10})
```

Needless to say, any collection may be **nested**. 

### Type checking

Sometimes it may be useful to do type checking (was `X` grounded to an `atom`? `int`? `object`?). This can often be done implicitly using the correct syntax. To check for collection type it is sufficient to use square brackets and the pipe operator `|` for example: 
```
goal([A | B])   // check for list
goal({A | B})   // check for ulist
goal({A:B | C}) // check for object
``` 

a similar trick can be used to check for `number` types, for example: 
```
goal(X) : X + 0 -> subgoal(X)
```
will fail for types other than `number`. 

(**TODO** better type checking mechanism?)

### unpack `*` operator

Another useful operator is the unpack `*` operator, this can be useful for evaluating subgoals with multiple parameters that have been obtained from a collection. For example:
```
goal(L) :-> subgoal(*L) 
subgoal(A) : A > 0 -> a1
subgoal(A,B) : A > 0 -> a2
subgoal(A,B,C) : A > 0 -> a3 
```
```
>> goal([1]) :-> subgoal(*[1])
> subgoal(1) : 1 > 0 -> a1 (SUCCESS)
```

`ulist` can also be unpacked but have more complex semantics. Using the same program as above:

```
>> goal({0,1}) -> subgoal(*{0,1})
> subgoal(_) (FAIL)
> subgoal(0,1) : 0 > 0 (FAIL)
> subgoal(1,0) : 1 > 0 -> a2 (SUCCESS)
```

Another way to unpack both `list` and `ulist` involve the equality `=` operator. The following are equivalent assuming the collection is of length 3:
```
goal(L) :-> subgoal(*L)
goal(L) : A,B,C = *L -> subgoal(A,B,C)
```

The pipe operator `|` can also be used to unpack as follows:
```
goal(L) : [A,B|C] = L -> subgoal(A,B)
>> goal([1,2,3]) : [1,2|[3]] = [1,2,3] -> subgoal(1,2)
```

More examples of unpacking:
```
goal(L) : A,*B = *L -> subgoal(A,B)
>> goal([1,2,3]) : 1,*[2,3] = *[1,2,3] -> subgoal(1,[2,3])
```
```
goal(L) : *A,B = *L -> subgoal(A,B)
>> goal([1,2,3]) : *[1,2],3 = *[1,2,3] -> subgoal([1,2],3)
```
```
goal(L) :-> subgoal(*L)
>> goal([]) :-> subgoal()
```

A goal with any number of arguments

```
goal(*L1) : L2 = L1 + [1] -> subgoal(L2)
>> goal() : [1] = [] + [1] -> subgoal([1])
>> goal(0,1) : [0,1,1] = [0,1] + [1] -> subgoal([0,1,1])
```
Variable length arguments are always interpreted as the `list` type.

Unpacking the `atom` (the irony is not lost), atoms like collections can be unpacked. They behave similarly to the `list` type. For example:
```
goal(A) :-> subgoal(*A)
>> goal(test) :-> subgoal(t,e,s,t)
```

Packing the `atom`. Like collections, atoms can be recombined using the join operator `+`. For example: 
```
goal(A,B) : subgoal(A + B)
>> goal(hello, world) :-> subgoal(helloworld)
```
Note that lack of _white space_, atoms cannot contain spaces, but can contain underscores! e.g. `hello_world`


## Casting Types

Since different types offer different functionality, it is often useful to change types. Below is a table of type conversions that may be done and how:

| from | to | operation | notes |
| ---- | ---- | ---- | ---- |
| `list`   | `ulist`   | `UL = {*L}` | |
| `atom`   | `list`    | `L = [*A]`  | | 
| `atom`   | `ulist`   | `UL = {*A}` | |
| `ulist`  | `list`    | `L = [*UL]` | all permutations will be tried.  |
| `object` | ?         | ?           | **TODO** how might this be done? | 
| `ulist`  | `atom`    | ? | **TODO** all permutations will be tried.  |
| `list`   | `atom`    | ?  | **TODO** |

## Loops

Although there is no explicit looping as in other languages (e.g. `for` or `while`), looping can be achieved in various ways.  Loops are often a convenient way to represent many similar rules, or write conditions that check for existence or universality. We have already seen some of what is possible in to the `ulist` and `object` types.  

The unpack operator `*` also provides a means to loop. For example, over the `list` type as follows:
```
goal(L) : *A, *B = *L -> subgoal(A, B)
>> goal([1,2,3])
> goal([1,2,3]) : *[], *[1,2,3] = *[1,2,3] -> subgoal([], [1,2,3])
> goal([1,2,3]) : *[1], *[2,3] = *[1,2,3] -> subgoal([1], [2,3])
> goal([1,2,3]) : *[1,2], *[3] = *[1,2,3] -> subgoal([1,2], [3])
> goal([1,2,3]) : *[1,2,3], *[] = *[1,2,3] -> subgoal([1,2,3], [])
```

A more traditional `for` loop can be constructed using the above by taking only the first element from the second list `B`, or last element from the first list `A`. For example: 
```
goal(L) : *A, *B = *L, [X | _] = B -> subgoal(X)
>> goal([1,2,3]) :
> *[], *[1,2,3] = *[1,2,3], [1 | [2,3]] = [1,2,3] -> subgoal(1) (SUCCESS)
> *[1],  *[2,3] = *[1,2,3], [2 | [3]] = [2,3]     -> subgoal(2) (SUCCESS)
> *[1,2],  *[3] = *[1,2,3], [3 | []] = [3]        -> subgoal(3) (SUCCESS)
> *[1,2,3], *[] = *[1,2,3], [X | _] = []                        (FAIL)
```

looping with a conditional is also possible as follows:
```
goal(L) : *A, *B = *L, [X | _] = B, X > 1 -> action
```
Given a grounding for `L` this goal statement can be expanded similarly as above. 

Sometimes we do not care about the order in which a loop is executed, we may simply want to know if _any_ of the elements satisfy a subgoal. This can be can be achieved by first casting a `list` to a `ulist` as follows:

```
goal(L) : UL = {*L}, {X | _} = UL -> subgoal(X)
subgoal(X) : X > 2 -> action
>> goal([1,2,3]) : {1,2,3} = {*[1,2,3]}, 
> {1 | {2,3}} = {1,2,3} -> subgoal(1) : 1 > 2 (FAIL)
> {2 | {1,3}} = {1,2,3} -> subgoal(2) : 2 > 2 (FAIL)
> {3 | {1,2}} = {1,2,3} -> subgoal(3) : (3 > 2) (SUCCESS)
```
Remember that this loop is _unordered_ meaning that the first element of the `ulist` that satisfies the goal tree will be used!


### Conditional statements

Conditionals are evaluated to determine whether a particular action or subgoal should be taken. Many conditionals will be of the form `X > 1`, `X = [U | _]` or similar, we have seen a number of examples above. More complex conditionals are sometimes required, this can be achieved by defining conditional statements. These statements look like goals but do not contain the `->` operator. An example is given below:

```
goal(X) : reverse(X, R), R = [3 | _] -> action
// reverse conditional
reverse(X, R) : reverse_worker(X, [], R)
reverse_worker([], R, R)
reverse_worker([X|Xs], T, R) : reverse_worker(Xs, [X|T], R)
```

(**TODO** not sure about this, maybe we leave more complex conditionals for later. It is better if everything always grounded...?)



## List of operators
| Operator | Name | Examples | 
| ---------- | ---------- | -------- |
|`=` | equality / assignment | `L = 1` | 
|`+` | addition / join | `1 + 1 = 2` / `[1] + [2] = [1,2]`
|`-` | subtraction | `1 - 1 = 0` | 
|`*` | multiplication / unpack | `2 * 2 = 4` / `subgoal(*[1,2]) = subgoal(1, 2)`
|`/` | division | `2 / 2 = 1` | 
|`|` | pipe | `[0|[1,2]] = [0,1,2]` | 
|`[]`| square brackets | `L = [0,1,2]` |
|`{}`| curly brackets | `L = {0,1,2}` | 












