import NotesList from "./../components/Notes/NotesList";

const Home = () => {
  const notes = [
    {
      id: "1",
      title: "Nota 1",
      subtitle: "29/05/24",
      content: "Esto es la nota 1",
    },
    {
      id: "2",
      title: "Nota 2",
      subtitle: "29/05/24",
      content: "Esto es la nota 2",
    },
    {
      id: "3",
      title: "Nota 3",
      subtitle: "31/05/24",
      content: "Esto es la nota 3",
    },
  ];

  return (
    <div data-testid="home">
      <NotesList notes={notes} />
    </div>
  );
};

export default Home;
