# My LeetCode
https://leetcode.com/sonohara/

[![LeetCode](https://img.shields.io/badge/Solved-22%2F2598-black.svg?&color=%23ffa116style=flat&logo=leetcode&logoColor=yellow)](https://leetcode.com/sonohara/)

![Score](score.png)


## Testing
![TypeScript testing](https://github.com/sonohara/my-leetcode/actions/workflows/TypeScript.yml/badge.svg) ![Go testing](https://github.com/sonohara/my-leetcode/actions/workflows/Go.yml/badge.svg)


## Memo
### 難しかったリスト
https://leetcode.com/list?selectedList=ozmezud6
- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
  - 全然 Easy じゃなかった…
  - データ構造で考えないと解けない 
- [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)
  - 二分探索がそらで書けなかった…
    - 単純な二分探索じゃなくて、最小値以下 / 最大値以上のケースもあるのが余計にごちゃごちゃしてしまった
  - `left + ((right - left) / 2)` じゃなくて `(left + right) / 2` で出来るのは覚える 
- [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)
  - そもそもどうやって求めればよいか気付けず、discussion 見るまでコード書くまで至らなかった
  - fibonacci