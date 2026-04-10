export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between items-center backdrop-blur-md bg-black/30">
      <h1 className="text-white font-bold text-lg">KABILAN S</h1>

      <div className="flex gap-6 text-gray-300">
        <button onClick={() => scrollTo("home")} className="hover:text-white">Home</button>
        <button onClick={() => scrollTo("projects")} className="hover:text-white">Projects</button>
        <button onClick={() => scrollTo("about")} className="hover:text-white">About</button>
        <button onClick={() => scrollTo("contact")} className="hover:text-white">Contact</button>
      </div>
    </div>
  );
}