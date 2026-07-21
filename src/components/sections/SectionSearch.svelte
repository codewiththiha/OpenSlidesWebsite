<section id="search">
  <h2>Search</h2>
  <p>
    The slide strip has a debounced search pipeline that stays responsive while typing
    and stays correct while filtering.
  </p>

  <h3 id="search-fts">SQLite FTS5</h3>
  <p>
    Slides are indexed with SQLite FTS5, kept in sync by triggers. Matching cards show a
    small context snippet with the matched text marked. When the backend is unavailable,
    a browser-side substring scan takes over.
  </p>

  <h3 id="search-debounce">The pipeline</h3>
  <ul>
    <li>The raw input updates immediately, so typing never feels laggy.</li>
    <li>The effective query is debounced by 180 milliseconds.</li>
    <li>Rust searches the project-scoped FTS5 table and returns ranked slide IDs.</li>
    <li>A JavaScript substring scan is the fallback when the backend is down.</li>
    <li>Filtering is kept separate from optimistic drag order; drag reordering is disabled while a filter is active.</li>
  </ul>
</section>
