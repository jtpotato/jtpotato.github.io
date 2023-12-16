function Background() {
  return (<>
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-background-a">
      <div className="rounded-full absolute bg-background-b w-[48vw] h-[48vw] bottom-[-8vw] left-[-16vw] blur-[128px]" />
      <div className="rounded-full absolute bg-background-c w-[48vw] h-[48vw] top-[-8vw] right-[-15vw] blur-[128px]" />
    </div>
  </>);
}

export default Background;