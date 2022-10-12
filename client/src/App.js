
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogpost" element={<Show />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
