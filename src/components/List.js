import React from "react";
import { Table } from 'react-bootstrap'

const List = () => {

    return(
        <div className="container">
            {/* A JSX comment */}

            {/* <div>
                <p>Valinta 2.</p>
            </div>
            */}
            <Table striped>
            <tbody>
                <tr>
                    <td>
                        <p>1. rivi</p>
                    </td>
                    <td>
                        <p>kdfjhfdkjhsfdkjh</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>2. rivi</p>
                    </td>
                    <td>
                        <p>jhgkjdkgjgdkjhdgk</p>
                    </td>
                </tr>
            </tbody>
            </Table>

        </div>
    )
}

export default List