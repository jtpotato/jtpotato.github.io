import "./BentoRow.css"

function BentoRow(props: React.PropsWithChildren<{}>) {
    return (<>
        <div className="flex flex-row flex-nowrap boba-bento-row" style={{gap: "1em"}}>
            {props.children}
        </div>
    </>);
}

export default BentoRow;