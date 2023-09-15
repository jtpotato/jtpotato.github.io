function Center(props: React.PropsWithChildren<{}>) {
  return (
    <div className="flex justify-center items-center w-fit m-auto">{props.children}</div>
  );
}

export default Center;
