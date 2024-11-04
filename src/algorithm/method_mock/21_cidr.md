---
title: ip是否处于cidr范围
---

## 代码实现

```js
/** 将IP地址转换为一个32位的二进制字符串*/
function ipToBinary(ip) {
  return ip
    .split('.')
    .map(Number)
    .map((num) => num.toString(2).padStart(8, '0'))
    .join('');
}

/** 检查给定的IP是否在CIDR范围内 */
function isIpInCidrRange(ip, cidr) {
  const [range, cidrMask] = cidr.split('/');
  const ipBinary = ipToBinary(ip);
  const rangeBinary = ipToBinary(range);
  const maskLength = parseInt(cidrMask, 10);

  // 比较前缀是否相同
  return ipBinary.slice(0, maskLength) === rangeBinary.slice(0, maskLength);
}

// 测试函数
const ipAddress = '100.1.2.0/23';
const cidrRange = '100.1.1.2';

console.log(isIpInCidrRange(ipAddress, cidrRange));
```
