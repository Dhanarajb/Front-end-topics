### Flexbox
##### What is Flexbox?
> Answer: Flexbox, or Flexible Box Layout, is a layout model in CSS that allows the design of complex and responsive layouts with a more efficient and predictable way than traditional models.
---
##### Explain the main axis and cross axis in Flexbox.
> Answer: The main axis is the primary axis along which flex items are distributed, and it is determined by the flex-direction property. The cross axis is perpendicular to the main axis.
---
##### How do you enable Flexbox on an element?
> Answer: You enable Flexbox by setting the display property of an element to flex or inline-flex.
```
.container {
  display: flex;
}
```
---
##### What is the purpose of the justify-content property in Flexbox?
> Answer: justify-content is used to align flex items along the main axis. It has values like flex-start, flex-end, center, space-between, and space-around.
---
##### Explain the align-items property in Flexbox.
> Answer: The align-items property is used to align flex items along the cross axis. It has values like flex-start, flex-end, center, baseline, and stretch.
---
##### What is the purpose of the flex-grow property?
> Answer: The flex-grow property determines how much a flex item should grow relative to the rest of the flex items inside the same container.
---
##### How does the flex-shrink property work in Flexbox?
> Answer: The flex-shrink property defines the ability of a flex item to shrink if necessary. It specifies the factor by which a flex item will shrink relative to the other flex items when there is not enough space in the container.
---
##### What is the use of the flex-basis property?
> Answer: The flex-basis property defines the initial size of a flex item before any free space is distributed. It can be set to a specific length, percentage, or auto.
---
##### Explain the purpose of the align-self property.
> Answer: The align-self property allows you to override the align-items value for a specific flex item. It accepts the same values as align-items.
---
##### How can you create a responsive layout using Flexbox?
> Answer: Flexbox inherently provides a responsive layout by allowing items to flexibly adjust based on the available space. Use properties like flex-grow, flex-shrink, and media queries to create responsive designs.
---


