import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="border-t text-sm text-secondary">
        <div className="m-auto max-w-4xl p-4 py-8">
          <div className="flex gap-32">
            <div>
              <h5 className="mb-4 font-bold uppercase text-black/60">
                projects
              </h5>
              <Link href="/tools/project-cards">
                <p>Project Card Generator</p>
              </Link>
              <Link href="/genshin-visions">
                <p>Genshin Vision Calculator</p>
              </Link>
            </div>
            <div>
              <h5 className="mb-4 font-bold uppercase text-black/60">
                Version
              </h5>
              <p>v2024.3.28</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
