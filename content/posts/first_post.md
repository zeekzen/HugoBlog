+++
date = '2025-02-27T09:05:42+08:00'
draft = false
title = '我的第一篇测试文章'
+++

# 测试使用

```golang

package main
 
import (
    "fmt"
)
 
// BubbleSort 对整数切片进行冒泡排序
func BubbleSort(arr []int) {
    n := len(arr)
    // 外层循环控制遍历次数
    for i := 0; i < n-1; i++ {
        // 内层循环用于进行相邻元素的比较和可能的交换
        for j := 0; j < n-i-1; j++ { // 每完成一次外层循环，最大的元素已经“冒泡”到它应该在的位置，因此下一次内层循环可以少比较一次
            if arr[j] > arr[j+1] {
                // 如果当前元素大于下一个元素，则交换它们
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}
 
func main() {
    arr := []int{64, 34, 25, 12, 22, 11, 90}
    fmt.Println("Original array:", arr)
    BubbleSort(arr)
    fmt.Println("Sorted array: ", arr)
}
```

# 标题2

测试更新


# 测试标题

更新


