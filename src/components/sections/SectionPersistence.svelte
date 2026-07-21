<section id="persistence">
  <h2>Persistence</h2>
  <p>
    All durable state is owned by the Rust backend and SQLite. Zustand only holds
    transient UI state — preview overrides, panel sizes, interaction state.
  </p>

  <h3 id="per-sqlite">SQLite with WAL</h3>
  <p>
    The database runs in WAL mode with normal synchronous writes, a busy timeout, and a
    connection pool. Thumbnails are cached with an LRU cache and persistent thumbnail
    HTML, and the cache is invalidated when a slide's code, the project language, or the
    project theme changes. Worker write-back checks the current code before storing a
    thumbnail, so a stale render can never overwrite newer content.
  </p>

  <h3 id="per-migrations">Migrations</h3>
  <p>
    Migrations are imperative and tracked through a <code>schema_version</code> table.
    Current migrations cover project-wide language settings, slide names and code
    alignment, highlight JSON data, the FTS5 slide search with synchronization triggers,
    and persistent thumbnail HTML.
  </p>
</section>
