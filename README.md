# futl
Functional library full of utilities

## Functions

### List functions (lst)

#### sort

```javascript
// sort(comparation function, list)
// sort(list of numbers)
sort((a, b) => a.v - b.v, [{v: 2}, {v: 1}])
// => [{v: 1}, {v: 2}]
```