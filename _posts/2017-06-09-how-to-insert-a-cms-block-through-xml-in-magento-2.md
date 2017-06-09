---
layout: post
title: How to insert a CMS block through XML in Magento 2
description:
categories: articles
date: 2017-06-09
tags: [Magento 2, cms]
keywords: [Magento 2, cms]
image:
---

The XML block you are looking for is this: `Magento\Cms\Block\Block`

```xml
<block class="Magento\Cms\Block\Block" name="Promo">
    <arguments>
        <argument name="block_id" xsi:type="string">promo</argument>
    </arguments>
</block>
```
