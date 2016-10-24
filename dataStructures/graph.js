'use strict';

const Heap = require('./binaryHeap');

class Edge {
    constructor(weight, vertex) {
        this.weight = weight;
        this.vertex = vertex;
    }
}

class Vertex {
    constructor(value, id) {
        this.value = value || null;
        this.edges = [];
        this.id = id;
    }
}

class Graph {

    constructor() {
        this.vertices = [];
        this._uniqueId = 0;
    }

    uniqueId() {
        this._uniqueId++;
        return 'vertex_' + this._uniqueId;
    }

    insertVertex(value) {
        let uniqueId = this.uniqueId();
        let vertex = new Vertex(value, uniqueId);
        this.vertices.push(vertex);
        return vertex;
    }

    addEdge(vertex1, vertex2, weight) {
        let edge = new Edge(weight, vertex2);
        vertex1.edges.push(edge);
    }

    shortestPath(start, finish) {
        let maxInt = Number.POSITIVE_INFINITY;

        //vertex1: distance from starting vertex
        //vertex2: distance from starting vertex
        //vertex3: distance from starting vertex
        let distances = {};


        //Stores vertices we came from?
        let previous = {};

        //Holds unvisited vertices
        let heap = new Heap();

        //Initialize values
        this.vertices.forEach((vertex) => {
            if (vertex === start) {
                distances[ vertex.id ] = 0;
                vertex.value = 0;
                heap.insert(vertex);
            } else {
                distances[ vertex.id ] = maxInt;
                vertex.value = maxInt;
                heap.insert(vertex);
            }
            previous[ vertex.id ] = null;
        });

        while(heap.hasNodes()) {
            let vertex = heap.extract();

            if (vertex === null || vertex.value === null || vertex.value === maxInt) {
                break;
            }

            console.log('vertex:  ', vertex);
            let edges = vertex.edges;

            edges.forEach((edge) => {
                let currentDistance = distances[ vertex.id ] + edge.weight;
                let neighbor = edge.vertex;
                let neighborId = edge.vertex.id;

                //If there is a shorter path to a known or unknown node then take the shorter path
                if (currentDistance < distances[ neighborId ]) {
                    distances[ neighborId ] = currentDistance;
                    previous[ neighborId ] = vertex;

                    neighbor.value = currentDistance
                    heap.insert(neighbor);

                }
            });

        }
        return distances;

    }
}

let graph = new Graph();

let vertex1 = graph.insertVertex();
let vertex2 = graph.insertVertex();
graph.addEdge(vertex1, vertex2, 30);

let vertex3 = graph.insertVertex();
graph.addEdge(vertex2, vertex3, 10);


let vertex4 = graph.insertVertex();
graph.addEdge(vertex3, vertex4, 5);

console.log(graph.shortestPath(vertex1, vertex4));

