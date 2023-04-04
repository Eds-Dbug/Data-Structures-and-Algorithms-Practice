/**
 * What is a Tree?:
 * - is a hierarchical structure that is used to represent and
 *  organize data in a way that is easy to navigate and search.
 *  It is a collection of nodes that are connected by edges and
 *  has a hierarchical relationship between the nodes. The topmost
 *  node of the tree is called the root, and the nodes below it are
 *  called the child nodes. Each node can have multiple child nodes
 * , and these child nodes can also have their own child nodes,
 *  forming a recursive structure.
 * 
 * What is it for?
 * - This data structure is a specialized method to organize and
 *  store data in the computer to be used more effectively. It
 *  consists of a central node, structural nodes, and sub-nodes,
 *  which are connected via edges. We can also say that tree data
 *  structure has roots, branches, and leaves connected with one
 *  another. 
 * 
 * Why is a tree a non linear data structure:
 * - The data in a tree are not stored in a sequential manner i.e,
 *  they are not stored linearly. Instead, they are arranged on
 *  multiple levels or we can say it is a hierarchical structure.
 *  For this reason, the tree is considered to be a non-linear data
 *  structure.
 * 
 * Basic Terminology for a Tree:
 * Parent Node: 
 * - The node which is a predecessor of a node is called the parent
 *  node of that node. {B} is the parent node of {D, E}.
 * Child Node: 
 * - The node which is the immediate successor of another node is
 *  called the child node of that node. Examples: {D, E} are the
 *  child nodes of {B}.
 * Root Node:
 * - The topmost node of a tree or the node which does not have any
 *  parent node is called the root node. {A} is the root node of
 *  the tree. A non-empty tree must contain exactly one root node
 *  and exactly one path from the root to all other nodes of the
 *  tree.
 * Leaf Node or External Node:
 * - The nodes which do not have any child nodes are called leaf
 *  nodes. {K, L, M, N, O, P} are the leaf nodes of the tree.
 * Ancestor of a Node:
 * - Any predecessor nodes on the path of the root to that node are
 *  called Ancestors of that node. {A,B} are the ancestor nodes of
 *  the node {E}
 * Descendant: 
 * - Any successor node on the path from the leaf node to that node.
 *  {E,I} are the descendants of the node {B}.
 * Sibling: Children of the same parent node are called siblings.
 *  {D,E} are called siblings.
 * Level of a node: 
 * - The count of edges on the path from the root node to that node.
 *  The root node has level 0.
 * Internal node: 
 * - A node with at least one child is called Internal Node.
 * Neighbour of a Node:
 *  Parent or child nodes of that node are called neighbors of that
 *  node.
 * 
 * Tree Properties: 
 * Number of edges: 
 * - An edge can be defined as the connection between two nodes.
 *  If a tree has N nodes then it will have (N-1) edges.
 *  There is only one path from each node to any other node of the
 *  tree.
 * Depth of a node: 
 * - The depth of a node is defined as the length of
 *  the path from the root to that node. Each edge adds 1 unit of
 *  length to the path. So, it can also be defined as the number of
 *  edges in the path from the root of the tree to the node.
 * Height of a node: 
 * - The height of a node can be defined as the length of the longest
 *  path from the node to a leaf node of the tree.
 * Height of the Tree:
 * - The height of a tree is the length of the longest path from the
 *  root of the tree to a leaf node of the tree.
 * Degree of a Node: 
 * - The total count of subtrees attached to that node is called the
 *  degree of the node. The degree of a leaf node must be 0. The
 *  degree of a tree is the maximum degree of a node among all the
 *  nodes in the tree
 * Other:
 * - Traversing in a tree is done by depth first search and 
 * breadth first search algorithm.
 * - It has no loop and no circuit
 * - It has no self-loop
 * - Its hierarchical model.
 * 
 * Basic operations of a Tree:
 * Create: 
 * – create a tree in data structure. 
 * Insert:
 * − Inserts data in a tree.
 * Search:
 * − Searches specific data  in a tree to check it is present or not.
 * Preorder Traversal:
 * – perform Traveling a tree in a pre-order manner in data structure .
 * In order Traversal: 
 * - perform Traveling a tree in an in-order manner.
 * Post order Traversal: 
 * - perform Traveling a tree in a post-order manner.
 * 
 * Types of Trees:
 * General:
 * - A general tree data structure has no restriction on the number
 *  of nodes. It means that a parent node can have any number of
 *  child nodes.
 * Binary:
 * - A node of a binary tree can have a maximum of two child nodes. In
 *  the given tree diagram, node B, D, and F are left children, while
 *  E, C, and G are the right children.
 * Balanced tree:
 * - If the height of the left sub-tree and the right sub-tree is
 *  equal or differs at most by 1, the tree is known as a balanced
 *  tree. 
 * Binary Search Tree:
 * - As the name implies, binary search trees are used for various
 *  searching and sorting algorithms. The examples include AVL tree
 *  and red-black tree. It is a non-linear data structure. It shows
 *  that the value of the left node is less than its parent, while
 *  the value of the right node is greater than its parent.
 * 
 * Applications of Tree data structure:
 * Spanning trees: 
 * - It is the shortest path tree used in the routers to direct the
 *  packets to the destination. 
 *  Binary Search Tree: 
 * - It is a type of tree data structure that helps in maintaining a 
 * sorted stream of data.
 * - Full Binary tree
 * - Complete Binary tree
 * - Skewed Binary tree
 * - Strictly Binary tree
 * - Extended Binary tree
 * Storing hierarchical data: 
 * - Tree data structures are used to store
 *  the hierarchical data, which means data is arranged in the form
 *  of order
 * Syntax tree:
 * - The syntax tree represents the structure of the program’s source
 *  code, which is used in compilers.
 * Trie:
 * - It is a fast and efficient way for dynamic spell checking.
 *  It is also used for locating specific keys from within a set.
 * Heap:
 * - It is also a tree data structure that can be represented
 *  in a form of an array. It is used to implement priority queues.
 * Artificial intelligence:
 * - Decision trees and other tree-based models are commonly used in
 *  machine learning and artificial intelligence to make predictions
 *  and classify data. 
 * Database:
 * - Some databases use trees to organize data for efficient
 *  searching and sorting
 * Network:
 * - Routing algorithms for networks, such as Internet Protocol (IP)
 *  routing, use trees to find the best path for data to travel from
 *  one network to another.
 * 
 * Advantages of Tree data structure:
 * - Efficient insertion, deletion, and search operations.
 * - Trees are flexibility in terms of the types of data that can be stored.
 * - It is used to represent hierarchical relationships.
 * - It has the ability to represent a recursive structure
 * - Used in various algorithms and data structures such as Huffman
 *  coding and decision trees.
 * - Trees use less space than other data structures, like lists,
 *  and linked lists.
 * - Trees are dynamic in nature.
 * - Tree data structures can automatically self-organize as new data
 *  is added or removed, which can improve performance and reduce
 *  complexity.
 * 
 * Disadvantages of Tree data structure:
 * - Trees require additional memory for pointers.
 * - Trees are not the best choice for data that does not have
 *  hierarchical relationships.
 * - Trees with many levels can become expensive to search and traverse.
 * - Limited scalability compared to other data structures such as
 *  hash tables.
 * - Trees are typically used for storing and manipulating
 *  hierarchical data, and may not be the best choice for other
 *  types of data.
 * - Not suitable for large datasets.
 * - Trees can become unbalanced, leading to poor performance and
 *  decreased efficiency.
 * 
 */

/**
 * DFS and BFS:
 * DFS: 
 * - To traverse binary trees with depth-first search, perform the following operations at each node:[3][4]:
 * - If the current node is empty then return.
 * - Execute the following three operations in a certain order:
 * - N: Visit the current node.
 * 
 * Pre-order, NLR:
 * Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get prefix expressions on an expression tree.
 *  
 * Post-order, LRN:
 * - Postorder traversal is used to delete the tree. Please see the question for the deletion of a tree for details. Postorder traversal is also useful to get the postfix expression of an expression tree
 * 
 * In-order, LNR:
 * - In the case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal is reversed can be used. 
 * 
*/



class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let root = null;

function insertion(insertionRoot, key) {
  // if there is no node than add one with the given key
  //console.log('what is root?', root)
  if (!insertionRoot) {
    insertionRoot = new Node(key);
    //its the params insertionRoot
    return insertionRoot;
  }
  //All the diffrent conditions for keys
  // key is for new value
  // node here is probably insertionRoot
  if(insertionRoot.key > key) {
    insertionRoot.left = insertion(insertionRoot.left,key);
    
  }
  if (insertionRoot.key < key) {
    insertionRoot.right = insertion(insertionRoot.right, key);
  }
  return insertionRoot;
}

// A utility function to
// do inorder traversal of BST
function inorder(root)
{
  if (root) {
    inorder(root.left);
    console.log(`inorder ${root.key}`)
    inorder(root.right);
  }
}

function preorder(root) {
  if(root ) {
    //the node itself
    console.log(`preorder: ${root.key}`);
    //traverse left tree
    preorder(root.left);
    preorder(root.right);
  }
}

function postorder(root) {
  if (root) {
    postorder(root.left);
    postorder(root.right);
    console.log(`postorder ${root.key}`)
 }
}

function insert(key) {
  root = insertion(root,key);
}


// for(let i = 1; i < 11; i++ ) {
//   //console.log('loop running?')
//   insert(i);
// }


/* Let us create following BST
      50
    /     \
  30      70
  /  \    /  \
20   40  60   80 */

insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);

//inorder(root);
//preorder(root);
postorder(root);


