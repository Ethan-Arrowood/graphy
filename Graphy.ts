export class GraphyNode <T> {
  id: string
  data: T
  constructor (id: string, data: T) {
    this.id = id
    this.data = data
  }

  toString (): string {
    return `GraphyNode [${this.id}]: ${this.data}`
  }
}

export class GraphyRelation {
  id: string
  relation: string
  nodes: GraphyNode<unknown>[]

  constructor (id: string, relation: string, nodes: GraphyNode<unknown>[]) {
    this.id = id
    this.relation = relation
    this.nodes = nodes
  }

  toString (): string {
    return `GraphyRelationship [${this.id}]: (${this.nodes[0].id})-(${this.relation})-(${this.nodes[1].id})`
  }
}

export class Graphy {
  private indexer: Generator
  nodes: { [k: string]: GraphyNode<unknown> } = {}
  relations: { [k: string]: GraphyRelation } = {}

  constructor (indexer?: Generator) {
    this.indexer = indexer || Graphy.GraphyIndexer()
  }

  addNode<T = string>(data: T): GraphyNode<T> {
    var index = this.indexer.next().value
    console.log(index)
    if (index) {
      const graphyNode = new GraphyNode(index.toString(), data)
      this.nodes[index] = graphyNode
      return graphyNode
    } else {
      throw new Error('Index does not exist. Ensure index generator is valid.')
    }
  }

  addRelation(relation: string, node1: GraphyNode<unknown>, node2: GraphyNode<unknown>) {
    var index = this.indexer.next().value
    if (index) {
      const graphyRelation = new GraphyRelation(index, relation, [node1, node2])
      this.relations[index] = graphyRelation
      return graphyRelation
    } else {
      throw new Error('Index does not exist. Ensure index generator is valid.')
    }
  }

  static * GraphyIndexer() {
    var i = 1
    while(true) yield i++
  }
}

export default Graphy