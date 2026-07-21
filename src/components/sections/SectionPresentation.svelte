<section id="presentation">
  <h2>Presentation</h2>
  <p>
    The presentation overlay is a separate fullscreen layout. Its keyboard behavior is
    isolated from the editor and the dashboard, so presenting never accidentally
    triggers an edit shortcut.
  </p>

  <h3 id="pres-auto">Autoplay</h3>
  <p>
    Autoplay advances by each slide's duration, and highlight steps consume extra
    navigation steps before the next slide. The visible progress bar is a CSS transform
    animation, while the numeric countdown lives in its own small component so it
    re-renders without disturbing the bar.
  </p>

  <h3 id="pres-keys">Keyboard control</h3>
  <table class="keys">
    <tbody>
    <tr><td><kbd>⌘</kbd><kbd class="plus">/</kbd><kbd>Ctrl</kbd> + <kbd>K</kbd></td><td>Open the command palette</td></tr>
    <tr><td><kbd>⌘</kbd><kbd class="plus">/</kbd><kbd>Ctrl</kbd> + <kbd>G</kbd></td><td>Open Go to Slide</td></tr>
    <tr><td><kbd>⌘</kbd><kbd class="plus">/</kbd><kbd>Ctrl</kbd> + <kbd>⇧</kbd> + <kbd>F</kbd></td><td>Focus slide search</td></tr>
    <tr><td><kbd>/</kbd> outside a typing target</td><td>Focus slide search</td></tr>
    <tr><td><kbd>⌘</kbd><kbd class="plus">/</kbd><kbd>Ctrl</kbd> + <kbd>F</kbd></td><td>Open find and replace</td></tr>
    <tr><td><kbd>⌘</kbd><kbd class="plus">/</kbd><kbd>Ctrl</kbd> + <kbd>Z</kbd></td><td>Undo code editing</td></tr>
    <tr><td><kbd>⌘</kbd><kbd class="plus">/</kbd><kbd>Ctrl</kbd> + <kbd>⇧</kbd> + <kbd>Z</kbd></td><td>Redo code editing</td></tr>
    <tr><td><kbd>⌘</kbd><kbd class="plus">/</kbd><kbd>Ctrl</kbd> + <kbd>B</kbd></td><td>Toggle zen mode</td></tr>
    <tr><td><kbd>←</kbd> <kbd>→</kbd></td><td>Step highlights or slides when not typing</td></tr>
    <tr><td><kbd>1</kbd>–<kbd>9</kbd></td><td>Jump to a highlight step</td></tr>
    <tr><td><kbd>0</kbd></td><td>Return to the clean slide</td></tr>
    <tr><td><kbd>Esc</kbd></td><td>Close dialog / leave zen or presentation</td></tr>
    </tbody>
  </table>
  <p>
    The slide strip uses roving focus: with a card focused, <kbd>←</kbd> <kbd>→</kbd>
    move focus, <kbd>Home</kbd> / <kbd>End</kbd> jump to the edges, <kbd>Enter</kbd> or
    <kbd>Space</kbd> selects, <kbd>Delete</kbd> removes, and <kbd>F2</kbd> starts
    renaming.
  </p>
</section>
