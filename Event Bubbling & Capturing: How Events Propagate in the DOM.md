## **Event Bubbling & Capturing: How Events Propagate in the DOM**

### **Concept Breakdown**  
When an event occurs in the DOM (like a click), it doesn’t just affect the element where it happened. Instead, it propagates through the DOM tree. This propagation happens in **two phases**:  

1. **Capturing Phase (Event Capturing / Trickling Down)**  
   - The event starts at the root (`document`) and moves **down** to the target element.  
   - This is **rarely used** in practice.  

2. **Bubbling Phase (Event Bubbling / Propagating Up)**  
   - After reaching the target element, the event **bubbles up** from the target back to the root (`document`).  
   - This is the most commonly used phase.  

### **Visualizing Event Propagation**  
Consider this HTML structure:  
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```
If you click the `<button>`, the event propagates like this:  

1. **Capturing Phase** (Top to bottom)  
   - `document` → `html` → `body` → `#parent` → `#child`  

2. **Target Phase** (Event reaches the clicked element)  
   - `#child` (button)  

3. **Bubbling Phase** (Bottom to top)  
   - `#child` → `#parent` → `body` → `html` → `document`  

---

## **Interview Questions & Answers**  

### **1. What is event bubbling?**  
**Answer:**  
Event bubbling is a process where an event triggered on a child element **propagates upwards** to its ancestors in the DOM tree. For example, if you click a button inside a `div`, the event bubbles from the button to the `div` and further up to `document`.  

### **2. What is event capturing (trickling)?**  
**Answer:**  
Event capturing is the opposite of bubbling. Here, the event starts from the root (`document`) and **trickles down** to the target element before executing the event.  

### **3. How do you prevent event bubbling?**  
**Answer:**  
You can use the `event.stopPropagation()` method inside an event handler to stop the event from propagating to parent elements.  

Example:  
```javascript
document.getElementById("child").addEventListener("click", function(event) {
    event.stopPropagation(); // Stops bubbling
    console.log("Button clicked!");
});
```

### **4. What is the difference between event bubbling and event capturing?**  
| Feature | Event Bubbling | Event Capturing |
|---------|--------------|----------------|
| Direction | Bottom to top | Top to bottom |
| Default Behavior | Default phase in most browsers | Needs explicit use of `{capture: true}` |
| Usage | Used in most cases | Rarely used |

### **5. How do you use event capturing?**  
**Answer:**  
You can enable capturing by passing `{ capture: true }` as the third argument to `addEventListener`.  

Example:  
```javascript
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked! (Capturing phase)");
}, true); // Capture mode enabled
```

---

## **Use Cases & Scenarios**  

### **1. Use Case: Click Delegation (Event Bubbling)**
Instead of adding event listeners to multiple child elements, we add one to the parent and let bubbling handle clicks on children.

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
```javascript
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("You clicked: " + event.target.innerText);
    }
});
```
👉 **Why?** Efficient when handling many dynamically created elements.

---

### **2. Use Case: Preventing Unwanted Click Propagation**
Consider a modal with a close button. Clicking inside the modal should not close it, but clicking outside should.

```html
<div id="modal">
  <div id="content">
    <button id="close">Close</button>
  </div>
</div>
```
```javascript
document.getElementById("modal").addEventListener("click", function() {
    console.log("Modal closed!");
});

document.getElementById("content").addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents modal from closing when clicking inside
});
```
👉 **Why?** Ensures only outside clicks close the modal.

---

## **Coding Questions**  

### **1. Write code to demonstrate event bubbling.**  
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```
```javascript
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked!");
});
```
**Output when button is clicked:**  
```
Child clicked!
Parent clicked!
```
👉 **Why?** The event bubbles up after triggering the child event.

---

### **2. How do you prevent event bubbling?**  
```javascript
document.getElementById("child").addEventListener("click", function(event) {
    event.stopPropagation(); // Stops bubbling
    console.log("Child clicked!");
});
```
👉 **Now, clicking the button won’t trigger the `parent` event.**

---

### **3. Demonstrate event capturing.**  
```javascript
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked (Capturing phase)!");
}, true); // Capture mode
```
👉 **Now, "Parent clicked" will log before "Child clicked".**

---

## **Best Practices & Takeaways**  
✅ **Use event delegation for better performance** (especially for dynamic elements).  
✅ **Use `event.stopPropagation()` when necessary** to prevent unwanted bubbling.  
✅ **Avoid excessive event listeners** on individual elements—use event delegation instead.  
✅ **Know when to use capturing vs. bubbling** (capturing is rarely needed).  

---

This should cover **everything** you need—**concepts, interview questions, scenarios, and coding!** Let me know if you need more clarity. 🚀
