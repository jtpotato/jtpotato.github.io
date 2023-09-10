function Row(props: React.PropsWithChildren<{}>) {
    return (<>
        <div className="flex flex-row items-center space-x-2">
            {props.children}
        </div>
    </>);
}

export default Row;