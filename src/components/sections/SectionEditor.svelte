<section id="editor">
  <h2>Editor</h2>
  <p>
    The editing surface is deliberately plain: an uncontrolled textarea, not a heavy
    code-editor component. That choice is the whole reason fast slide-switching feels
    instant.
  </p>

  <h3 id="editor-textarea">Uncontrolled textarea</h3>
  <p>
    A controlled input would fight the caret on every keystroke and every slide change.
    The textarea is uncontrolled; its value is written synchronously when you change
    slides, and caret positions are stored outside React state so saving the caret never
    produces object-spread update traffic.
  </p>

  <h3 id="editor-caret">Caret preservation</h3>
  <p>
    Jump between slides as fast as you like and the cursor is where you left it on each
    one. Caret bookkeeping is kept separate from the document model on purpose, so the
    editor stays quiet during rapid navigation.
  </p>

  <h3 id="editor-save">Shared save queue</h3>
  <p>
    Edits go through one shared code-save queue. Writes are serialized per slide,
    debounced, and flushed before the application quits — so a fast typer never races
    the disk, and nothing typed is lost on close.
  </p>
</section>
