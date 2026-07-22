<script lang="ts">
  import releases from '../data/releases.json'

  const REPO = 'https://github.com/codewiththiha/OpenSlides'
</script>

<footer class="wrap">
  <div class="foot">
    <span>OpenSlides · MIT · v{releases[0]?.version ?? '—'}</span>
    <span>
      <a href={REPO} target="_blank" rel="noopener">GitHub</a>
      &nbsp;·&nbsp;
      <a href="#top">Back to top</a>
    </span>
  </div>
  <div class="note">Free, open-source, and offline. Not affiliated with codeslides.app.</div>
</footer>
