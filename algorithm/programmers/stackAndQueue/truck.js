/**
 * https://programmers.co.kr/learn/courses/30/lessons/42583
 */
function solution(bridge_length, weight, truck_weights) {
  const brige = new Array(bridge_length);
  let timer = 0;

  while (truck_weights.length !== 0) {
    let truck = truck_weights.shift();
    while (truck) {
      brige.shift();
      if (
        truck &&
        weight >= truck + brige.reduce((p, c) => (c ? p + c : p), 0)
      ) {
        brige.push(truck);
        truck = null;
      } else {
        brige.push(undefined);
      }
      timer++;
    }
  }

  console.log(brige, timer);
  const idx = brige.findIndex((v) => !!v);
  if (idx !== -1) {
    brige.splice(0, idx);
    timer += idx;
  }

  while (brige.some((v) => v)) {
    brige.shift();
    timer++;
  }

  return timer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));

function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from(Array(bridge_length), () => 0);

  let bridgeWeight = 0;
  let timer = 0;

  while (true) {
    if(!(truck_weights[0])){
      return timer + bridge.length;
    }

    const truckWeight = truck_weights[0];
    const out = bridge.shift();

    if (bridgeWeight + truckWeight - out > weight) {
      bridgeWeight -= out;
      bridge.push(0);
      timer++;
    } else {

      if (truckWeight) {
        truck_weights.shift();
      }

      bridge.push(truckWeight);
      bridgeWeight += truckWeight - out;
      timer++;
    }
  }
}

console.log(solution(2, 10, [7, 4, 5, 6]));


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
function Node(firstData) {
    this.data = firstData;
    this.prev = null;
    this.next = null;
}

// first out last in
function Queue() {
    this.first = null;
    this.last = null;

    this.enqueue = function(node) {
        if (this.first === null) {
            this.first = node;
            this.first.next = node;
            this.last = node;
            this.last.prev = node;
        } else if (this.first === this.last) {
            this.first.prev = null;
            this.first.next = node;
            this.last = node;
            this.last.prev = this.first;
            this.last.next = null;
        } else if (this.last !== null) {
            var temp = this.last;
            temp.next = node;
            this.last = node;
            this.last.prev = temp;
        }
    }

    this.dequeue = function() {
        var returnValue = this.first.data;

        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else if (this.first !== this.last) {
            this.first = this.first.next;
        }

        return returnValue;
    }

    this.length = function() {
        if (this.first === null)
            return 0;
        else if (this.first === this.last) {
            return 1;
        } else if (this.first !== this.last) {
            var count = 1, node = this.first;

            while (node.next !== null) {
                node = node.next;
                count++;
            }

            return count;
        }
    }

    this.sum = function() {
        if (this.first === null)
            return 0;
        else if (this.first === this.last) {
            return this.first.data;
        } else if (this.first !== this.last) {
            var count = this.first.data !== -1 ? this.first.data : 0, // 이 문제에 맞게 추가함
                node = this.first;

            while (node.next !== null) {
                node = node.next;
                if (node.data !== -1) // 이 문제에 맞게 추가한 조건문
                    count += node.data;
            }

            return count;
        }
    }
}

function solution(bridge_length, weight, truck_weights) {
    var answer = 0, truck_length = truck_weights.length, 
        q = new Queue(), end = 0;

    var i = 0;
    for (; i < bridge_length; i++)
        q.enqueue(new Node(-1));

    while (end !== truck_length) {
        // move truck
        answer++;
        end += q.dequeue() !== -1 ? 1 : 0;

        // add truck
        q.enqueue(new Node(q.sum() + truck_weights[0] <= weight ? truck_weights.shift() : -1));
    }

    return answer;
}
