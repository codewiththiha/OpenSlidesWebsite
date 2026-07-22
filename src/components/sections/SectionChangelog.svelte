<script lang="ts">
  import releases from '../../data/releases.json'

  function releaseId(version: string) {
    return `ch-${version.replace(/[^a-z0-9]+/gi, '-')}`
  }

  function whatsNewItems(markdown: string) {
    return markdown
      .split('\n')
      .map((line) => line.replace(/^\s*-\s*/, '').trim())
      .filter(Boolean)
  }
</script>

<section id="changelog">
  <h2>Changelog</h2>
  <div class="release-history">
    {#each releases as release}
      <section class="release-entry" id={releaseId(release.version)}>
        <div class="release-meta">
          <span class="release-version">v{release.version}</span>
          <time datetime={release.date}>{release.date}</time>
        </div>
        <h3>What&apos;s new</h3>
        <ul class="release-notes">
          {#each whatsNewItems(release.whatsNew) as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
</section>
