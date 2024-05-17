import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="border-t text-sm text-muted-foreground">
        <div className="m-auto max-w-4xl p-4 py-8">
          <div className="flex gap-32">
            <div>
              <h5 className="mb-4 font-bold uppercase text-secondary-foreground">
                projects
              </h5>
              <p>Coming soon...</p>
            </div>
            <div>
              <h5 className="mb-4 font-bold uppercase text-secondary-foreground">
                Version
              </h5>
              <p>v2024.5.17</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
