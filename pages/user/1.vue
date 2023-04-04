<template>
  <NuxtLayout :name="pages">
  <div>
    <div>
      <div>
        <div>
          <img src="" alt="">
        </div>
        <div>
          <DefaultInput placeholder="My name"/>
          <div>
            <h4>Speciality</h4>
            <DefaultInput placeholder="Frontend dev"/>
          </div>
          <div>
            <h4>Experience (years)</h4>
            <DefaultInput placeholder="1"/>
          </div>
          <div>
            <h3>Contacts</h3>
            <div>
              <Contacts/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Hard skills</h3>
        <DefaultInput placeholder="Skill"/>
      </div>
      <div>
        <h3>About me</h3>
        <DefaultTextarea/>
      </div>
      <div>
        <h3>Education</h3>
        <DefaultTextarea/>
      </div>
    </div>
    <div>
      <div>
        <h3>Work experience</h3>
        <div>
          <WorkPlaceInfo/>
        </div>
      </div>
      <div>
        <h3>More about technologes</h3>
        <div>
          <MoreAboutTech/>
        </div>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>

<script>
export default {
  name: 'UserId',
  computed: {
    ...mapState({
      isEditble: state => state.pages.isEditble,
    }),
    ...mapGetters({
      getIsEditable: 'pages/getIsEditable',
    })
  },
  methods: {
    ...mapMutations({
      setIsEditble: 'pages/setIsEditble',
    }),
  }
};

definePageMeta({
    layout: "pages",
  })
</script>

<style lang="sass" scoped>

</style>