import "./Magnify.css"

function Magnify(props: React.PropsWithChildren<{}>) {
  return <div className="boba-magnify">{props.children}</div>;
}

export default Magnify;
