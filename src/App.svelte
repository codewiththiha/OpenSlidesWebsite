<script lang="ts">
  import VersionCorner from './components/VersionCorner.svelte'
  import TopBar from './components/TopBar.svelte'
  import HeroSection from './components/HeroSection.svelte'
  import TableOfContents from './components/TableOfContents.svelte'
  import SiteFooter from './components/SiteFooter.svelte'

  import SectionWhy from './components/sections/SectionWhy.svelte'
  import SectionEditor from './components/sections/SectionEditor.svelte'
  import SectionHighlighting from './components/sections/SectionHighlighting.svelte'
  import SectionSteps from './components/sections/SectionSteps.svelte'
  import SectionSearch from './components/sections/SectionSearch.svelte'
  import SectionPresentation from './components/sections/SectionPresentation.svelte'
  import SectionPersistence from './components/sections/SectionPersistence.svelte'
  import SectionOpenSource from './components/sections/SectionOpenSource.svelte'
  import SectionChangelog from './components/sections/SectionChangelog.svelte'
</script>

<!-- fixed chrome -->
<VersionCorner />
<TopBar />
<TableOfContents />

<main>
  <HeroSection />

  <hr class="rule wrap-rule" />

  <!-- article: each section is its own component -->
  <article class="wrap">
    <SectionWhy />
    <SectionEditor />
    <SectionHighlighting />
    <SectionSteps />
    <SectionSearch />
    <SectionPresentation />
    <SectionPersistence />
    <SectionOpenSource />
    <SectionChangelog />
  </article>

  <hr class="rule wrap-rule" />

  <SiteFooter />
</main>
