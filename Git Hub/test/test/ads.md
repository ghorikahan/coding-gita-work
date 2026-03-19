Define Dictionary? What are different ways of representing dictionaries? Explain.
2. Describe about
a) Hash Table b) Hash function c) Hash key
3. Define Collision? Explain about Collision resolution techniques (Separate chaining and
Open addressing) with examples.
4. Describe about Rehashing with example.
5. The keys 12,18,13,2,3,23,5, and 15 are inserted into an initially empty hash table of length
10 using linear probing with hash function h(k)= k mod 10. What is the resultant hash
table?
6. Describe about Extendable hashing with example.
7. Illustrate quadratic probing in detail.
8. Define Hashing? Explain Review of Hashing and Hash Function?
9. Write about linear probing and quadratic probing.
10. Explain Collision Resolution Techniques in Hashing.
11. What is Double Hashing technique?
12. What is skip list? How search and update operations performed on skip lists?
13. Discuss Binary search trees with an example.
14. Write a detailed note on AVL trees with its operations and example.
15. Explain B- trees and its operations?
16. Explain Red black trees with an example.
17. What are 2-3 trees? How it works with data structures? Discuss with an example.
18. Explain Splay- trees with neat diagram.
19. Explain The Longest Common Subsequence Problem (LCS).
20. Describe The Knuth-Morris-Pattern Algorithm.
21. Discuss the working of Brute force pattern matching.
22. Write about The Boyer-Moore Algorithm.
23. How to Apply Dynamic Programming to the LCS? Justify.
24. Write a detailed note on the Huffman Coding Algorithm.
25. Define Tries and discuss the function Suffix Tries with an example.
26. How Compressed Tries work explain its operations.
27. Explain Standard Tries with an example.
28. Describe about the standard and suffix tries with example. Explain the applications of tries.
29. With an example and also explain performance analysis of an algorithm in terms of time
complexity.
30. Explain different asymptotic notations.
31. Illustrate any three graph applications with algorithms.
32. Explain the various criteria used for analyzing algorithms.
33. Write an algorithm of BFS? Also give an example.
34. Write an algorithm of DFS? Also give an example.
35. Explain Dijkstra’s Algorithm in detail with example and analyze its efficiency.
36. Differentiate graph traversing techniques with algorithm.
37. Explain Euler graph with suitable examples.
38. Explain in detail about the Hamiltonian paths and circuits.

Gandhinagar Institute of Technology

Computer Engineering Department 10070102 ADS
39. What is an amortized analysis? Explain accounting method and aggregate analysis with
suitable example.
40. Describe the algorithm for Hamiltonian cycles and determine the order of magnitude of the
worst case computing time for the backtracking procedure that finds all Hamiltonian
cycles.
41. State Graph coloring problem. Explain how to find valid colorings using back-tracking.
42. Discuss about coloring of graph with example, bipartite, P-partite, k-chromatic graph.
43. Explain All Cut Sets in a Graph and give Theorem proof with an example.
44. Write in detail about different representation of a Planar graph.
45. Prove that the two graphs in following figure are not isomorphic:

46. What is Topological sorting? Illustrate topological sorting with algorithm.
47. What are recent trends in problem solving paradigms. Explain with examples.
48. Describe the following terminology:
i. P
ii. NP
iii. NP-complete
iv. NP-hard
49. Write and explain any advanced sorting technique along with algorithm.
50. Describe proof of NP-hardness and NP-completeness.
51. Discuss any Randomized algorithms.
52. Explain any two Approximation algorithms.
53. Write in detail about Interior Point Method.
54. Illustrate advanced number theoretic Algorithm.
55. Explain the class of P and NP with example.


---

### **1. Define Dictionary? What are different ways of representing dictionaries? Explain.**

A **dictionary** is a data structure that stores key-value pairs, allowing efficient insertion, deletion, and lookup operations. It is also known as a map or associative array.

#### **Ways of Representing Dictionaries:**
1. **Array-based Representation:**
   - Keys are mapped to indices in an array.
   - Example: Direct addressing (keys are unique and directly used as indices).

2. **Linked List Representation:**
   - Key-value pairs are stored in a linked list.
   - Example: Unsorted or sorted linked lists.

3. **Hash Table Representation:**
   - Uses a hash function to map keys to indices in an array.
   - Example: Hash tables with collision resolution techniques.

4. **Binary Search Tree (BST) Representation:**
   - Keys are stored in a BST, enabling efficient search, insert, and delete operations.
   - Example: Balanced BSTs like AVL or Red-Black trees.

5. **Trie Representation:**
   - Used for storing strings where each node represents a character.
   - Example: Standard tries or compressed tries.

---

### **2. Describe:**
#### **a) Hash Table:**
A hash table is a data structure that uses a hash function to map keys to indices in an array. It provides O(1) average-time complexity for insert, delete, and lookup operations.

#### **b) Hash Function:**
A hash function takes a key as input and returns an integer (hash value) that corresponds to an index in the hash table. It should distribute keys uniformly to avoid collisions.
- Example: `h(k) = k mod m`, where `m` is the size of the hash table.

#### **c) Hash Key:**
A hash key is the input to the hash function. It can be any data type (e.g., integer, string) that is converted into an index in the hash table.

---

### **3. Define Collision? Explain Collision Resolution Techniques:**

#### **Collision:**
A collision occurs when two or more keys are mapped to the same index in a hash table.

#### **Collision Resolution Techniques:**
1. **Separate Chaining:**
   - Each bucket in the hash table is a linked list.
   - Colliding keys are stored in the same bucket as a linked list.
   - Example: Keys `12` and `22` map to index `2` in a hash table of size `10`. Both are stored in a linked list at index `2`.

2. **Open Addressing:**
   - All elements are stored in the hash table itself.
   - Techniques include:
     - **Linear Probing:** `h(k, i) = (h(k) + i) mod m`
     - **Quadratic Probing:** `h(k, i) = (h(k) + c1*i + c2*i^2) mod m`
     - **Double Hashing:** `h(k, i) = (h1(k) + i*h2(k)) mod m`
   - Example: If index `2` is occupied, linear probing checks index `3`, then `4`, and so on.

---

### **4. Describe Rehashing with Example:**

Rehashing is the process of increasing the size of the hash table and redistributing the keys to reduce collisions.
- Example: If the load factor exceeds a threshold (e.g., 0.75), the hash table size is doubled, and all keys are rehashed using the new size.

---

### **5. Resultant Hash Table Using Linear Probing:**

Given keys: `12, 18, 13, 2, 3, 23, 5, 15` and hash function `h(k) = k mod 10`.

| Index | Key |
|-------|-----|
| 0     | -   |
| 1     | -   |
| 2     | 12  |
| 3     | 13  |
| 4     | 23  |
| 5     | 15  |
| 6     | -   |
| 7     | -   |
| 8     | 18  |
| 9     | -   |

---

### **6. Extendable Hashing:**

Extendable hashing is a dynamic hashing technique where the hash table grows incrementally. It uses a directory to point to buckets.
- Example: Keys are hashed to a binary value, and the directory uses the first few bits to map to buckets.

---

### **7. Quadratic Probing:**

Quadratic probing resolves collisions by using a quadratic function to find the next available slot.
- Formula: `h(k, i) = (h(k) + c1*i + c2*i^2) mod m`
- Example: If index `2` is occupied, check `(2 + 1*1 + 1*1) mod 10 = 4`.

---

### **8. Hashing and Hash Function Review:**

Hashing is a technique to map data of arbitrary size to fixed-size values (hash values). A hash function should:
- Be deterministic.
- Distribute keys uniformly.
- Minimize collisions.

---

### **9. Linear Probing and Quadratic Probing:**

- **Linear Probing:** Checks the next slot sequentially.
- **Quadratic Probing:** Checks slots using a quadratic function.

---

### **10. Collision Resolution Techniques:**

- **Separate Chaining:** Uses linked lists.
- **Open Addressing:** Uses probing (linear, quadratic, double hashing).

---

### **11. Double Hashing:**

Double hashing uses two hash functions to resolve collisions.
- Formula: `h(k, i) = (h1(k) + i*h2(k)) mod m`
- Example: `h1(k) = k mod 10`, `h2(k) = 7 - (k mod 7)`.

---

### **12. Skip List:**

A skip list is a probabilistic data structure that allows fast search, insert, and delete operations.
- **Search:** Traverse levels to find the key.
- **Update:** Insert or delete nodes while maintaining the skip list structure.

---

### **13. Binary Search Trees (BST):**

A BST is a tree where each node has at most two children, and the left subtree contains keys less than the root, while the right subtree contains keys greater than the root.
- Example: Insert `5, 3, 7` results in:
```
    5
   / \
  3   7
```

---

### **14. AVL Trees:**

AVL trees are self-balancing BSTs where the height difference between left and right subtrees is at most 1.
- **Operations:** Insert, delete, and rotate (left, right, left-right, right-left).
- Example: Insert `3, 2, 1` results in:
```
    2
   / \
  1   3
```

---

### **15. B-Trees:**

B-trees are balanced tree structures used in databases and file systems. They allow multiple keys per node and have a high branching factor.
- **Operations:** Insert, delete, and search.

---

### **16. Red-Black Trees:**

Red-black trees are self-balancing BSTs with additional properties:
- Each node is either red or black.
- The root and leaves are black.
- Red nodes cannot have red children.
- Example: Insert `10, 20, 30` results in:
```
    20 (Black)
   /  \
 10 (Red) 30 (Red)
```

---

### **17. 2-3 Trees:**

2-3 trees are balanced trees where each node can have 2 or 3 children.
- Example: Insert `10, 20, 30` results in:
```
    20
   /  \
 10    30
```

---

### **18. Splay Trees:**

Splay trees are self-adjusting BSTs where recently accessed elements are moved to the root.
- Example: Accessing `10` in a tree results in `10` becoming the root.

---

### **19. Longest Common Subsequence (LCS):**

LCS is a dynamic programming problem to find the longest subsequence common to two sequences.
- Example: LCS of "ABC" and "AC" is "AC".

---

### **20. Knuth-Morris-Pratt (KMP) Algorithm:**

KMP is a pattern-matching algorithm that uses a prefix function to avoid unnecessary comparisons.
- Example: Search for "ABABC" in "ABABABC".

---

### **21. Brute Force Pattern Matching:**

Brute force checks each character of the pattern against the text.
- Example: Search for "ABC" in "ABABABC".

---

### **22. Boyer-Moore Algorithm:**

Boyer-Moore uses a bad-character heuristic and good-suffix heuristic to skip comparisons.
- Example: Search for "ABC" in "ABABABC".

---

### **23. Dynamic Programming for LCS:**

Dynamic programming solves LCS by building a table of subproblems.
- Example: LCS of "ABC" and "AC" is "AC".

---

### **24. Huffman Coding:**

Huffman coding is a lossless data compression algorithm that uses variable-length codes based on frequency.
- Example: Encode "AABBC" as `0, 0, 10, 10, 11`.

---

### **25. Tries and Suffix Tries:**

A trie is a tree-like structure for storing strings. A suffix trie stores all suffixes of a string.
- Example: Suffix trie for "ABC":
```
    A
   / \
  B   C
```

---

### **26. Compressed Tries:**

Compressed tries merge nodes with a single child to save space.
- Example: Compress "ABC" and "ABD" into:
```
    AB
   / \
  C   D
```

---

### **27. Standard Tries:**

Standard tries store strings with each node representing a character.
- Example: Trie for "CAT" and "CAR":
```
    C
   / \
  A   A
 / \   \
T   R   T
```

---

### **28. Standard and Suffix Tries:**

Standard tries store strings, while suffix tries store all suffixes of a string.
- Example: Suffix trie for "BANANA":
```
    B
   / \
  A   A
 / \   \
N   N   N
```

---

### **29. Performance Analysis:**

Performance analysis evaluates an algorithm's efficiency in terms of time and space complexity.
- Example: Bubble sort has O(n²) time complexity.

---

### **30. Asymptotic Notations:**

- **O (Big-O):** Upper bound.
- **Ω (Omega):** Lower bound.
- **Θ (Theta):** Tight bound.

---

### **31. Graph Applications:**

1. **Shortest Path (Dijkstra's Algorithm):**
   - Finds the shortest path between two nodes.
2. **Minimum Spanning Tree (Kruskal's Algorithm):**
   - Finds the minimum spanning tree of a graph.
3. **Topological Sorting:**
   - Orders nodes in a directed acyclic graph.

---

### **32. Algorithm Analysis Criteria:**

- **Time Complexity:** How runtime grows with input size.
- **Space Complexity:** How memory usage grows with input size.
- **Correctness:** Whether the algorithm produces the correct output.

---

### **33. BFS Algorithm:**

BFS explores nodes level by level.
- Algorithm:
  1. Start at the root node.
  2. Enqueue all adjacent nodes.
  3. Dequeue and explore each node.

---

### **34. DFS Algorithm:**

DFS explores nodes depth-wise.
- Algorithm:
  1. Start at the root node.
  2. Recursively explore each adjacent node.

---

### **35. Dijkstra's Algorithm:**

Dijkstra's algorithm finds the shortest path from a source node to all other nodes.
- Example: Find the shortest path from node `A` to `D`.

---

### **36. Graph Traversing Techniques:**

- **BFS:** Level-order traversal.
- **DFS:** Depth-first traversal.

---

### **37. Euler Graph:**

An Euler graph has a cycle that visits every edge exactly once.
- Example: A graph with vertices `A, B, C` and edges `AB, BC, CA`.

---

### **38. Hamiltonian Paths and Circuits:**

A Hamiltonian path visits each vertex exactly once. A Hamiltonian circuit is a closed path.
- Example: A graph with vertices `A, B, C, D` and edges `AB, BC, CD, DA`.

---

### **39. Amortized Analysis:**

Amortized analysis evaluates the average time per operation over a sequence of operations.
- **Accounting Method:** Assigns costs to operations.
- **Aggregate Analysis:** Computes total cost and divides by the number of operations.

---

### **40. Hamiltonian Cycles:**

A Hamiltonian cycle is a closed loop that visits each vertex exactly once.
- Algorithm: Use backtracking to find all cycles.

---

### **41. Graph Coloring Problem:**

Graph coloring assigns colors to vertices so that no two adjacent vertices share the same color.
- Example: Color a map with four colors.

---

### **42. Graph Coloring:**

- **Bipartite Graph:** Can be colored with two colors.
- **k-Chromatic Graph:** Requires `k` colors.

---

### **43. All Cut Sets in a Graph:**

A cut set is a set of edges whose removal disconnects the graph.
- Example: In a graph with edges `AB, BC, CD`, the cut set is `{AB, BC}`.

---

### **44. Planar Graph Representation:**

A planar graph can be drawn on a plane without edge crossings.
- Example: A tree is a planar graph.

---

### **45. Non-Isomorphic Graphs:**

Two graphs are non-isomorphic if they cannot be rearranged to look identical.
- Example: A triangle and a square are non-isomorphic.

---

### **46. Topological Sorting:**

Topological sorting orders nodes in a directed acyclic graph.
- Algorithm:
  1. Find a node with no incoming edges.
  2. Remove the node and repeat.

---

### **47. Recent Trends in Problem Solving:**

- **Machine Learning:** Solving problems using data-driven models.
- **Quantum Computing:** Solving problems using quantum algorithms.

---

### **48. Terminology:**

- **P:** Problems solvable in polynomial time.
- **NP:** Problems verifiable in polynomial time.
- **NP-Complete:** Problems in NP that are as hard as any problem in NP.
- **NP-Hard:** Problems at least as hard as NP-Complete problems.

---

### **49. Advanced Sorting Technique:**

- **Merge Sort:** Divides the array into halves, sorts them, and merges.
- Algorithm:
  1. Divide the array into two halves.
  2. Recursively sort each half.
  3. Merge the sorted halves.

---

### **50. Proof of NP-Hardness and NP-Completeness:**

- **NP-Hard:** A problem is NP-hard if any NP problem can be reduced to it.
- **NP-Complete:** A problem is NP-complete if it is NP-hard and in NP.

---

### **51. Randomized Algorithms:**

Randomized algorithms use randomness to solve problems.
- Example: Randomized quicksort.

---

### **52. Approximation Algorithms:**

Approximation algorithms find near-optimal solutions for NP-hard problems.
- Example: Greedy algorithm for the knapsack problem.

---

### **53. Interior Point Method:**

The interior point method is an algorithm for solving linear programming problems.
- Example: Solve `maximize c^T x` subject to `Ax ≤ b`.

---

### **54. Advanced Number Theoretic Algorithm:**

- **Euclidean Algorithm:** Finds the greatest common divisor (GCD).
- Example: GCD of `12` and `18` is `6`.

---

### **55. Class of P and NP:**

- **P:** Problems solvable in polynomial time.
- **NP:** Problems verifiable in polynomial time.
- Example: Sorting is in P, while the traveling salesman problem is in NP.

---

