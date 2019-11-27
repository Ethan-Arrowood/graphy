# Graphy ⛄️

A not so serious graph database written in TypeScript and operating in memory.

## Example

Input:
```typescript
import Graphy from './Graphy'

const db = new Graphy()

const nodeA = db.addNode('a')
const nodeB = db.addNode('b')
const nodeC = db.addNode('c')

const relation1 = db.addRelation('foo', nodeA, nodeB)
const relation2 = db.addRelation('bar', nodeB, nodeC)

console.log(nodeA.toString())
console.log(nodeB.toString())
console.log(nodeC.toString())

console.log(relation1.toString())
console.log(relation2.toString())
```

Output:
```
GraphyNode [1]: a
GraphyNode [2]: b
GraphyNode [3]: c
GraphyRelationship [4]: (1)-(foo)-(2)
GraphyRelationship [5]: (2)-(bar)-(3)
```