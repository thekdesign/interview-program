export default ($axios, context) => resource => ({
  index () {
    return $axios.$get(`${resource}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + (context.store.state.token || '')
      }
    })
  }
})
