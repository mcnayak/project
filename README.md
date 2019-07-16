**Instructions**

Using the previous activity as a guide, add the code necessary to listen to `socket.io` events for `task updated`.

```js
this.socket.on('task added', (data) => {
  this.push('tasks', data.payload);
});
```

When data about an updated task is received, you should run the `this.getAll()` method. 

Currently our Iron-Ajax is setup to make requests when the request method changes. We need to add one more line of code to our `getAll` method to make sure that if the request method does not change (GET->GET) we are still able to make the request. Add the following line of code to the bottom of the `getAll` method:

```js
this.$.dataAjax.generateRequest();
```
