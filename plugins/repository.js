import createAuth from '@/api/auth'
import createMe from '@/api/me'
import createCourses from '@/api/courses'

const api = {
  auth: '/auth',
  me: '/me',
  courses: '/courses'
}

export default (context, inject) => {
  // Auth
  const authWithAxios = createAuth(context.$axios)
  const authRepository = authWithAxios(api.auth)
  inject('authRepository', authRepository)
  context.$authRepository = authRepository
  // Me
  const meWithAxios = createMe(context.$axios, context)
  const meRepository = meWithAxios(api.me)
  inject('meRepository', meRepository)
  context.$meRepository = meRepository
  // 課程
  const coursesWithAxios = createCourses(context.$axios)
  const coursesRepository = coursesWithAxios(api.courses)
  inject('coursesRepository', coursesRepository)
  context.$coursesRepository = coursesRepository
}
