/*
    这是网上牛人版本，自己写了个hash类，虽然效率很高。
    但我认为用方法2的系统map对象就可以接受了。
*/

class Node {

    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {

    constructor() {
        this.capacity = 5;
        this.size = 0;
        this.map = [];

        for (let i = 0; i < this.capacity; i++) {
            this.map.push(null);
        }
    }

    hash (value) {
        if (value < 0) {
            value = 0 - value;
        }
        var hashed_index = value % this.capacity;
        return hashed_index;
    }

    insert (key, value) {
        this.size++;
        var hashing = this.hash(value);
        if (this.map[hashing] == null) {
            this.map[hashing] = new Node(key, value);
        } else {
            var cur_node = this.map[hashing];
            while (cur_node.next != null) {
                cur_node = cur_node.next;
            }
            cur_node.next = new Node(key, value);
        }
    }

    find (value) {
        var hashing = this.hash(value);
        var cur_node = this.map[hashing];
        while (cur_node != null && cur_node.value != value) {
            cur_node = cur_node.next;
        }
        if (cur_node == null) {
            return null;
        } else {
            return cur_node.key;
        }
    }
}

var target;
var nums;
var twoSum = function(nums = [2, 7, 11, 15], target = 9) {
    var map = new HashTable;
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        var complement_index = map.find(complement);
        if (complement_index != null) {
           result = [i, complement_index];
           return result;
        }
        map.insert(i, nums[i]);
    }
    for (var i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        complement_index = map.find(complement);
        if (complement_index != null) {
           result = [i, complement_index];
           return result;
        }
    }

    
};