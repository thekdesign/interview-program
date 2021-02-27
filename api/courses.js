export default $axios => resource => ({
  index (page = 1) {
    return $axios.$get(`${resource}`, {
      params: {
        page
      },
      headers: {
        'content-type': 'application/json'
      }
    })
  }
})
