<section id="highlighting">
  <h2>Highlighting</h2>
  <p>
    Code is colored by Shiki, run in a single shared web worker that serves the editor,
    the slide thumbnails, and hover previews alike.
  </p>

  <h3 id="hl-worker">One shared Shiki worker</h3>
  <p>
    There is exactly one worker client. Themes and language grammars load lazily, and
    unusually large inputs skip highlighting entirely instead of freezing the UI. A
    custom grammar is included for the Merustmar language.
  </p>

  <h3 id="hl-priority">Two priorities</h3>
  <ul>
    <li><strong>High priority</strong> — the active editor and any hover preview you explicitly asked for.</li>
    <li><strong>Low priority</strong> — background slide thumbnails, rendered when the worker is idle.</li>
  </ul>

  <h3 id="hl-magic">Magic Move</h3>
  <p>
    Slide previews animate between states with Magic Move transitions, so the same
    identifier visually travels from one slide to the next instead of hard-cutting.
    Highlight geometry is computed in TypeScript — a pure-math monospace path first,
    with a DOM Range fallback — and text nodes and character widths are cached
    independently.
  </p>
</section>
