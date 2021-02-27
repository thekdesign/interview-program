export default $axios => resource => ({
  login (data = {}) {
    return $axios.$post(`${resource}/login`, data, {
      headers: {
        'content-type': 'application/json'
      }
    })
  }
})
