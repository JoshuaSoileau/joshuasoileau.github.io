---
layout: post
title: Generic XML markup for CMS block creation in Magento 2
description:
categories: articles
date: 2017-06-22
tags: [magento 2, cms, xml]
keywords: [magento 2, cms, xml]
image:
---

If you want to reference an already existing CMS block, and create it through XML, here's how you do that in XML:


```XML
<block class="Magento\Cms\Block\Block" name="my.block.name">
    <arguments>
        <argument name="block_id" xsi:type="string">cms_block_id_here</argument>
    </arguments>
</block>
```

Then, in the template you created that block, you can just do:

```php
<?php echo $this->getChildHtml('my.block.name') ?>
```
