function Home() {
  return (
    <div className="h-[calc(100vh-2rem)] w-full">
      <img
        src="/images/rick-and-morty-wallpaper.jpg"
        className="w-full h-full object-cover object-center rounded-md xl:hidden"
      />
      <img
        src="/images/rick-and-morty-wallpaper-lanscape.jpg"
        className="w-full h-full object-cover object-center rounded-md hidden xl:block"
      />
    </div>
  );
}

export default Home;
