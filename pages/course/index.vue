<template>
  <div class="main">
    <h1 class="title">
      分類標題
    </h1>
    <div id="course-list" class="courses">
      <section v-for="course in courses" :key="course.id" class="course">
        <div class="image-responsive">
          <img class="image" :src="course.image" alt="">
        </div>
        <div class="content">
          <h3 class="title">
            {{ course.title }}
          </h3>
          <p class="name">
            <span v-for="(lecturer, index) in course.lecturers" :key="`${currentPage}-${index}`">
              {{ lecturer.username }}
            </span>
          </p>
          <div class="info">
            <p>評價：{{ course.feedback_score }}%</p>
            <p>人數：{{ course.students }}人</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseIndexPage',

  data () {
    return {
      courses: [],
      meta: {},
      currentPage: 1
    }
  },

  created () {
    this.getCourses()
  },

  mounted () {
    this.infinityScroll()
  },

  methods: {
    getCourses () {
      this.$coursesRepository.index(this.currentPage).then((response) => {
        this.courses = this.courses.concat(response.data)
        this.meta = response.meta
      }).catch(() => {
        this.$store.dispatch('logout')
      })
    },

    infinityScroll () {
      window.document.addEventListener('scroll', () => {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && this.currentPage < this.meta.last_page) {
          this.currentPage += 1
          this.getCourses()
        }
      })
    }
  }
}
</script>

<style scoped>
.main > .title {
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.main .courses {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  margin-bottom: 16px;
}

.main .courses .course {
  display: grid;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  padding: 8px;
}

.main .courses .course .image-responsive {
  position: relative;
  width: 100%;
  padding-top: 60%;
}

.main .courses .course .image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 6px;
}

.main .courses .course .content .title {
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 16px;
}

.main .courses .course .content .name {
  margin-bottom: 8px;
  font-size: 1rem;
}

.main .courses .course .content .info {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}

@media only screen and (max-width: 768px) {
  .main .courses {
    grid-template-columns: 1fr;
  }

  .main .courses .course {
    grid-template-columns: 2fr 3fr;
  }

  .main .courses .course .content {
    margin-left: 8px;
  }

  .main .courses .course .content .title {
    margin-bottom: 0;
  }
}
</style>
