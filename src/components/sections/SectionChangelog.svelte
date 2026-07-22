<script lang="ts">
  import releases from '../../data/releases.json'

  const dateFormatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  function formatReleaseDate(date: string) {
    return dateFormatter.format(new Date(`${date}T00:00:00Z`))
  }

  function releaseId(version: string) {
    return `ch-${version.replace(/[^a-z0-9]+/gi, '-')}`
  }
</script>

<section id="changelog">
  <h2>Changelog</h2>
  {#each releases as release}
    <section class="release-entry" id={releaseId(release.version)}>
      <h3>{release.version}</h3>
      <p class="release-date">Released {formatReleaseDate(release.date)}</p>
      <div class="release-notes">{release.whatsNew}</div>
    </section>
  {/each}
</section>
