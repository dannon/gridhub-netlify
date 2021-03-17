---
title: Markdown image tests
---

This is some markdown.

[Here's a link.](/jxtx/)

# Images

## Local `<img>`

`<img src="10candles.jpg"/>`  
<img src="10candles.jpg"/>

`<img src="./10candles.jpg"/>`  
<img src="./10candles.jpg"/>

`[<img src="10candles.jpg" alt="10 Candles"/>](10candles.jpg)`  
[<img src="10candles.jpg" alt="10 Candles"/>](10candles.jpg)

## Global `<img>`

`<img src="/images/icons/World40.png"/>`  
<img src="/images/icons/World40.png"/>

## Markdown syntax

`![alt text](World40.png)`  
![alt text](World40.png)

`![alt text](./World40.png)`  
![alt text](./World40.png)

`![alt text](./10candles.jpg){height=50}`:  
![alt text](./10candles.jpg){height=50}

`![alt text](./World40.png){style="height:50%"}`:  
![alt text](./World40.png){style="height:50%"}

`![alt text](./World40.png){testattr="value"}`:  
![alt text](./World40.png){testattr="value"}

`![alt text](./World40.png){data-test="value"}`:  
![alt text](./World40.png){data-test="value"}

`![alt text](./10candles.jpg){width=50}`  
![alt text](./10candles.jpg){width=50}

### In a link

`[![alt text](./10candles.jpg){width="50"}](/jxtx)`:  
[![alt text](./10candles.jpg){width="50"}](/jxtx)

# Arbitrary `remark-attr`

## From their [examples](https://www.npmjs.com/package/remark-attr):

This is a title
---------------
{style="color: pink;"}

[rms with a computer](https://rms.sexy){rel="external"}

Npm stand for *node*{style="color:red"} packet manager.

This is a **Unicorn**{awesome} !

You can use the `fprintf`{language=c} function to format the output to a file.

## Their examples, but change only the element, not the attributes

This is a title
---------------
{style="color:pink;"}

[rms with a computer](https://rms.sexy){style="color:pink;"}

Npm stand for *node*{style="color:pink;"} packet manager.

This is a **Unicorn**{style="color:pink;"} !

You can use the `fprintf`{style="color:pink;"} function to format the output to a file.
