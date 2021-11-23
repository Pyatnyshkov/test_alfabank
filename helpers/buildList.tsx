import React from "react";

export default function buildList(data: []) {
    return data?.map((text: string, key: number, array: any) => (
        <li key={key}>
            {text}
            {array.length === (key + 1) ? ' ' : `,`}
            &nbsp;
        </li>
    ))
}