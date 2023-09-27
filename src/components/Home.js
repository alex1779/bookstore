function Home() {
  return (
    <div>
      <div>

        <ul>

          <li>
            <h4>Action</h4>
            <h2>The Hunger Games</h2>
            <h6>Suzanne Collins</h6>
            <button type="button">Remove</button>
          </li>

          <li>
            <h4>Science Fiction</h4>
            <h2>Dune</h2>
            <h6>Frank Herbert</h6>
            <button type="button">Remove</button>
          </li>

        </ul>

        <div />

        <section>
          <h2>ADD NEW BOOK</h2>
          <form>
            <input placeholder="Book title" required="" />
            <input placeholder="Author" required="" />
            <button type="submit">ADD BOOK</button>
          </form>
        </section>

      </div>

    </div>
  );
}

export default Home;
