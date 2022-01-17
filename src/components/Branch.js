import { useState } from "react";

import Tree from "./Tree";

const Branch = props => {
    const { data } = props;
    const { children } = data;
    const [marker, setMarker] = useState(children ? "▶" : "•");
    const [show, setShow] = useState(false);

    const child = children ? <Tree data={children} /> : null;

    const toggle = () => {
        if (!children) {
            return;
        }

        setShow(!show);
        setMarker(marker === "▶" ? "▼" : "▶")
    }

    return <li key={data.id}>
        <span onClick={toggle}>{marker}{data.name}</span>
        {show && child}
    </li>
};

export default Branch;