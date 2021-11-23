import React from "react";

export default function buildList(data: []) {
    return data?.map((text: string, key: number, array: any) => (
        <li key={key}>
            <span className="content__table-parag">
                {text}
                {array.length === (key + 1) ? ' ' : `,`}
                &nbsp;
            </span>
        </li>
    ))
}