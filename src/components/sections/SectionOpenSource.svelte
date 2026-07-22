<script lang="ts">
  const REPO = 'https://github.com/codewiththiha/OpenSlides'
  const RELEASES = `${REPO}/releases`
</script>

<section id="open-source">
  <h2>Open source</h2>
  <p>
    OpenSlides is free to use, open source, and built to keep your presentation work in
    your hands. Download an installer when you want to present, or explore and build the
    source when you want to customize it.
  </p>

  <h3 id="os-download">Download OpenSlides</h3>
  <p>
    Choose the latest installer for macOS or Windows from
    <a href={RELEASES} target="_blank" rel="noopener" style:color="var(--ink)" style:text-decoration="none" style:border-bottom="1px solid var(--line)">GitHub Releases</a>.
    Each release includes the desktop packages and its release notes.
  </p>

  <h3 id="os-mit">MIT license</h3>
  <p>
    OpenSlides is released under the MIT license. Read it, fork it, and adapt it to your
    own creative or technical workflow.
  </p>

  <h3 id="os-build">Build from source</h3>
  <p>
    To run OpenSlides from source, you need Node.js 20 or newer, a stable Rust toolchain
    with Cargo, and the platform requirements for Tauri 2.
  </p>
  <div class="codeblock"><span class="cmt"># install frontend dependencies</span>
npm install

<span class="cmt"># start the desktop app in development</span>
npm run tauri dev

<span class="cmt"># or start the web interface only</span>
npm run dev</div>
  <p>
    Browse the source, report an issue, or contribute at
    <a
      href={REPO}
      target="_blank"
      rel="noopener"
      style:color="var(--ink)"
      style:text-decoration="none"
      style:border-bottom="1px solid var(--line)">github.com/codewiththiha/OpenSlides</a>.
  </p>
</section>
