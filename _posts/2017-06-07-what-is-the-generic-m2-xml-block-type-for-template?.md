---
layout: post
title: What is the generic M2 xml block type for template?
description:
categories: articles
date: 2017-06-07
tags: [magento 2]
keywords: [magento 2]
image:
---

In M1, you would use `core/template` in XML whenever you wanted to create a generic XML block that points to a give template.

The M2 equivalent is `Magento\Framework\View\Element\Template`.

You can still do that in M2. Like this:

```xml
<block class="Magento\Framework\View\Element\Template" name="block.name" template="Module::my-template.phtml" />
```
