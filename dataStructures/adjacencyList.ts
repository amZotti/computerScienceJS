type Tuple = [number, number];

class AdjacencyList {

    public vertices: Vertex[] = [];

    public addVertex(vertex: Vertex) {
        this.vertices.push(vertex);
    }

    public addEdge(points: Tuple) {
        this._insertEdge(points[0], points[1]);
        this._insertEdge(points[1], points[0]);
    }

    private _insertEdge(source: number, target: number) {
        const vertex = this.vertices[source];

        if (vertex.next === null) {
            vertex.next = new Edge(target);
            return;
        }

        let trav: Edge = vertex.next;

        while (trav.next !== null) {
            trav = trav.next;
        }

        trav.next = new Edge(target);
    }
}

class Edge {
    public target: number;
    public next: Edge;

    constructor(target: number, next: Edge = null) {
        this.target = target;
        this.next = next;
    }
}

class Vertex {
    public value: number;
    public next: Edge = null;
}