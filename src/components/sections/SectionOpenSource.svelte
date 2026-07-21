<script lang="ts">
  const REPO = 'https://github.com/codewiththiha/OpenSlides'
</script>

<section id="open-source">
  <h2>Open source</h2>
  <p>
    Everything is public and will stay that way. The repository, the issue tracker, and
    the design decisions are all in the open.
  </p>

  <h3 id="os-mit">MIT license</h3>
  <p>
    OpenSlides is released under the MIT license. Read it, fork it, ship it inside your
    own tooling. The Tauri identifier is <code>com.codewiththiha.openslides</code> and
    the Rust package is <code>openslides</code>.
  </p>

  <h3 id="os-build">Build it yourself</h3>
  <p>
    There are <strong>no prebuilt macOS, Linux, or Windows installers yet</strong> — for
    now the way to run it is from source. You need Node.js 20 or newer, a stable Rust
    toolchain with Cargo, and the platform requirements for Tauri 2. Then:
  </p>
  <div class="codeblock"><span class="cmt"># install frontend dependencies</span>
npm install

<span class="cmt"># start the Tauri desktop app in dev</span>
npm run tauri dev

<span class="cmt"># or just the Vite dev server</span>
npm run dev

<span class="cmt"># check the Rust backend</span>
cd src-tauri && cargo check</div>
  <p>
    The full source, build instructions, and architecture notes live in the repository:
    <a
      href={REPO}
      target="_blank"
      rel="noopener"
      style:color="var(--ink)"
      style:text-decoration="none"
      style:border-bottom="1px solid var(--line)">github.com/codewiththiha/OpenSlides</a>.
  </p>
</section>
