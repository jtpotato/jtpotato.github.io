import Header from "../Header";

function PostLayouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default PostLayouts;
