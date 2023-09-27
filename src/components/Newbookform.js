function Newbookform() {
  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input placeholder="Book title" required="" />
        <input placeholder="Author" required="" />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
}

export default Newbookform;
