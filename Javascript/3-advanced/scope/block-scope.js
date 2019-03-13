function fn() {
  console.log('scope 1')
  let scope = 5
  console.log(scope)

  {
    console.log('scope 2')
    scope = 10
    console.log(scope)
  }

  {
    console.log('scope 3')
    scope = 15
    console.log(scope)
  }
}

fn()
