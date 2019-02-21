## There are three Steps to begin using flex-box. The steps are as followed:

1. Determine which elements you want to control with flexbox
2. Wrap these elements inside an container element class
3. Set the display property of the container to flex

Here is an example:

```<body>
  <article>
    <div class="flex-container">
        <div class="flex-item flex-item-1">
            <h3>one</h3>
        </div>
        <div class="flex-item flex-item-2">
          <h3>two two two two</h3>
        </div>
        <div class="flex-item flex-item-3">
          <h3>three</h3>
        </div>
        <div class="flex-item flex-item-4">
          <h3>four</h3>
        </div>
      </div>
  </article>
</body>
```

1. Select the elements to control with flex box:

```
<div class="flex-item flex-item-1">
    <h3>one</h3>
</div>

<div class="flex-item flex-item-2">
  <h3>two two two two</h3>
</div>

<div class="flex-item flex-item-3">
  <h3>three</h3>
</div>

<div class="flex-item flex-item-4">
  <h3>four</h3>
</div>
```

2. Wrap these elements inside an outer container.

```
<div class="flex-container">
</div>
```

Please these elements inside the container like so:

```
<div class="flex-container">
  <div class="flex-item flex-item-1">
      <h3>one</h3>
  </div>

  <div class="flex-item flex-item-2">
    <h3>two two two two</h3>
  </div>

  <div class="flex-item flex-item-3">
    <h3>three</h3>
  </div>

  <div class="flex-item flex-item-4">
    <h3>four</h3>
  </div>
</div>
```

3. Set the display property of the container to flex

```
.flex-container {
display: flex;
}
```

## Notes:

- By default the flex elements (elements inside the flex container) flows horizontally: (flex-flow: row) <= this is the defaul behavior
- To change the flow direction use the flex property flex-flow: colunm
- When the flex-flow is set to row, two imaginary axis are automatically created:
  - Main axis is horizontal
  - Cross axix is vertical
- When the flex-flow is set to colunm, two imaginary axis are automatically created as well:
  - Main axis is vertical
  - Cross axix is horizontal
- Some of flexbox properties is set to row, it affects elements along the main axis
  - justify-content
- Some of flexbox properties is set to colunm, it affects elements along the cross axis
