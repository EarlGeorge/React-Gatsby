---
title: 'React Hooks'
date: '2019-05-04'
path: react.js-hooks
tags: '#react.js #javascript #hooks'
image: /assets/bzu1hz4tglecz9nj8gaj.jpg
seo: 'react hooks, react.js, javascript'
---

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

This is great, as writing functional components is often preferred by the community as they offer advantages, code that is easier to read and maintain, easier to test and often following better practices.Let's get started and overview some of them.

## Let's review old classic class-based component and convert it to functional component.

```js
class Example extends React.Component {
  state = {
    value: ''
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <article>
        <h1>Class-based component</h1>

        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />

        <p>
          Value: {this.state.value}
        </p>
      </article>
    )
  }
}
```

All it does is allows the user to input something, which is saved in the components internal state and displayed bellow input field. But the useState hook will allow us to transform it into its functional component.

## Lets Transform the component 

## useState 

```js
const [value, setValue] = useState('')
```
Where value is the variable to which we will bind the state, setState is the method to be called to update it and the parameter passed to useState is the state's default value.

## 1) We change the declaration of the component into a functional one.

```js
// Changed the declaration of the component
const Example = () => {
  state = {
    value: ''
  }

  // onChange is now assigned to a constant variable
  const onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  // Removed the render method
  return (
    <article>
      <h1>Changing to functional component</h1>
      <input
        type="text"
        value={this.state.value}
        onChange={this.onChange}
      />
      <p>
        Value: {this.state.value}
      </p>
    </article>
  )
}
```

## 2) Let's now remove all traces of the class' context (this) and state

```js
const Example = () => {
  // Removed the state declaration

  // Removed the call to this.setState()
  const onChange = event => {}

  // Removed all calls to the context
  return (
    <article>
      <h1>useState example/Functional component</h1>
      <input
        type="text"
        onChange={onChange}
      />
      <p>
        Value:
      </p>
    </article>
  )
}
```

## 3) Final Result

```js
import React, { useState } from "react"

const Example = () => {
  // We declare the state and the method to update it
  const [value, setValue] = useState('')

  // On input, call setValue with the new state value
  const onChange = event => {
    setValue(event.target.value)
  }

  // Bind the input to the state value and display it
  return (
    <article>
      <h1>useState example</h1>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
      <p>
        Value: {value}
      </p>
    </article>
  )
}
```

# Another example

Lets Transform another Class-based component.

```js
lass Example extends React.Component {
  state = {
    url: ''
  }

  /**
   * Fetch a random dog photo and save its URL in our state
   */
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => this.setState({
        url: data.image
      }))
  }

  render() {
    return (
      <section>
        <h1>Class-based component</h1>
        <img src={this.state.url} alt="dog picture"/> 
      </section>
    )
  }
}
```

### We will use the useEffect hook to do the exact same thing but in a functional component.

```js
useEffect(() => {
  // ...
})
```

It takes as its first parameter a callback that will be triggered each time the component is rendered. 
But in our case, we only wish to trigger it once, when the component is mounted, right?

To do so, we can pass useEffect a second parameter, an array of variables that will trigger the callback only when they are modified (instead of triggering it at every render of the component). We can also pass an empty array ([]) to tell the callback to be triggered only on mount and unmount of the component.

```js
useEffect(() => {
  // ...
}, [])
```

## Final Result

```js
// Don't forget to import both hooks
import React, { useState, useEffect } from "react"

const Example = () => {
  const [url, setUrl] = useState('')

  // On component mount, the callback is called
  // Fetch retrieves a picture and saves it in our internal state
  // The second parameter tells useEffect
  // to only be triggered on mount and dismount
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => setUrl(data.image))
  }, [])

  return (
    <section>
      <h1>useEffect example</h1>
      <img src={url} alt="dog picture" />
    </section>
  )
}
```

#WOW : )