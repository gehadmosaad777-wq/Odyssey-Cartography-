function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-brand">
          <h1>Odyssey</h1>
          <p>Gale Crater Marswalk Planner</p>
        </div>
        <span className="app-badge">Scaffold</span>
      </header>

      <main className="app-main">
        <section className="map-stage" aria-label="Mars map">
          <div className="placeholder">
            <p>Map layers not implemented yet.</p>
            <p className="placeholder-note">
              CTX, MOLA, and THEMIS overlays will register to the same Gale
              Crater AOI.
            </p>
          </div>
        </section>

        <aside className="side-panel" aria-label="Route and safety panels">
          <section>
            <h2>Traverse</h2>
            <p>Start and end selection will appear here.</p>
          </section>
          <section>
            <h2>Safety</h2>
            <p>Dose, suit-hours, and warnings will appear here.</p>
          </section>
        </aside>
      </main>

      <footer className="app-footer">
        <p>
          Illustrative hackathon prototype. Not operational mission planning.
          Map data credits will be listed with each layer.
        </p>
      </footer>
    </div>
  );
}

export default App;
