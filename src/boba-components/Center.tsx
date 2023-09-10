function Center(props: React.PropsWithChildren<{}>) {
  return (
    <div className="flex justify-center items-center">{props.children}</div>
  );
}

export default Center;
