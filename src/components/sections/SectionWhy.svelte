<section id="why">
  <h2>Why OpenSlides</h2>
  <p>
    OpenSlides exists to do one job well: turn source code into a deck you can stand up
    and present, with the code itself as the visual. Syntax highlighting, stepped
    highlights that walk an audience through a function line by line, and smooth
    transitions between states — all of it running from a single desktop window, with
    no account and no connection.
  </p>

  <h3 id="why-codeslides">The codeslides.app problem</h3>
  <p>
    codeslides.app sells this exact idea — code slides with highlight steps and
    transitions — for <strong>$5 a month</strong>, and keeps your work inside its
    ecosystem. OpenSlides is a direct, drop-in alternative that does the same job for
    <strong>$0</strong>. It is fully open source under the MIT license, and every
    project is a local SQLite file that you own, copy, back up, or put in git. No
    subscription, no sign-up, no network call, no telemetry.
  </p>

  <h3 id="why-offline">Offline by design</h3>
  <p>
    The app is a Tauri shell over a local SQLite database. Projects, slides, rendered
    thumbnails, and the full-text search index all live on disk. It works on a plane,
    on a stage with flaky venue wifi, or in a room with no signal at all — because
    there is nothing to reach for online. The syntax-highlighting worker, the themes,
    and the language grammars are bundled and loaded lazily from the local app, not
    fetched at presentation time.
  </p>
</section>
