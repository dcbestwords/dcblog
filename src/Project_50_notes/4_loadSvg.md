---
title: vue3中引入svg图片
---

## 一、引入单张svg图

通过导入真实的图片路径

```vue
import homeIcon from '@/assets/fileType/picture/JPEG.svg';
<img :src="homeIcon" />
```

通过将svg作为组件

```vue
import LogoFull from '@/assets/assets-logo-full.svg?component';
<LogoFull></LogoFull>
```

## 二、传参引入单张svg图

```vue
const getAssetsFile = (url: string) => {
  return new URL(`@/assets/fileType/${url}`, import.meta.url).href;
};

<img  :src="getAssetsFile('images/'+ item.country_code +'.png')" />
```

## 三、使用vite自带函数引入多张svg图

`import.meta.glob`默认使用懒加载

```vue
const modules = import.meta.glob('@/assets/fileType/**/*');
const svgFile = ref('');

const loadSvg = async () => {
    const module = await modules['/src/assets/fileType/picture/JPEG.svg']();
    svgFile.value = module.default;
};
loadSvg();

<img :src="svgFile"/>
```

也可以配置`eager`参数来静态加载

```vue
const modules = import.meta.glob('@/assets/fileType/**/*', { eager: true });

<img :src="modules['/src/assets/fileType/picture/JPEG.svg'].default"/>
```

