export default function ({ store, redirect, route }) {
  if (!process.server) {
    if (store.getters.isExpires && (store.state.token === '' && route.name !== 'index')) {
      return redirect('/')
    } else if (store.state.token !== '' && route.name === 'index') {
      return redirect('/account')
    }
  }
}
