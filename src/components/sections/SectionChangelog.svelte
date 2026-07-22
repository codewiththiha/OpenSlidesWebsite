<script lang="ts">
  import latestRelease from '../../data/latest-release.json'

  const releaseDate = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${latestRelease.date}T00:00:00Z`))
</script>

<section id="changelog">
  <h2>Changelog</h2>
  <h3 id={`ch-${latestRelease.version.replace(/[^a-z0-9]+/gi, '-')}`}>
    {latestRelease.version}
  </h3>
  <p class="release-date">Released {releaseDate}</p>
  <div class="release-notes">{latestRelease.whatsNew}</div>
</section>
