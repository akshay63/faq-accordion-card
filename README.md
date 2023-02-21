# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

In this project, I have learned how Event Delegation can be used efficiently using Vanilla JS instead of relying on jquery. Also, I learned how to style scrollbar using modern CSS.

To see how you can add code snippets, see below:

```html

```

```css
.accordian::-webkit-scrollbar {
  width: 10px;
}

.accordian::-webkit-scrollbar-thumb {
  /* Foreground */
  background: linear-gradient(
    var(--color-background-violet),
    var(--color-background-blue)
  );
  border-radius: 10px;
}
.accordian::-webkit-scrollbar-track {
  /* Background */
  background: var(--color-secondary-light);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
```

```js
element.on(event, eventObject, callbackFunc) --->>> closest() and nextElementSibling() functions can be used to create Event Delegation instead of jquery's on() method
```

### Continued development

There are lot of CSS that is need to be corrected because of my responsive CSS code.

### Useful resources

- [For Adding style to scrollbars](https://css-tricks.com/the-current-state-of-styling-scrollbars-in-css/) - to style scrollbar using modern CSS

## Author

- Frontend Mentor - [@akshay63](https://www.frontendmentor.io/profile/akshay63)
- Twitter - [@aka_akshaymesh](https://www.twitter.com/aka_akshaymesh)

## Acknowledgments
