export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
