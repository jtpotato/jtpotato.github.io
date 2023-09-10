import "./Row.css"

function Row(props: React.PropsWithChildren<{}>) {
    return (<>
        <div className="boba-row">
            {props.children}
        </div>
    </>);
}

export default Row;