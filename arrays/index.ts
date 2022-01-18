// Get types from arrays
const animals = ["cat", "dog", "mouse"] as const; // readonly ['cat', 'dog', 'mouse']

type Animal1 = typeof animals[number]; // type Animal1 = 'cat' | 'dog' | 'mouse'

// typeof animals[1] ---> 'dog'

const arrAnimalsOfObject = [
  { species: "cat", name: "Tom" },
  { species: "dog", name: "Rex" },
  { species: "mouse", name: "Jerry" },
] as const;

// readonly [species]['cat', 'Tom']
// readonly [species]['dog', 'Rex']
// readonly [species]['mouse', 'Jerry']

type Animal2 = typeof arrAnimalsOfObject[number]["species"]; // type Animal2 = 'cat' | 'dog' | 'mouse'
