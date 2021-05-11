import React from "react";



export const ActiveCasesTable: React.FC<{
    height: number,
}> = ({height}) => {
    return (
        <table>
            <thead>
                <tr>
                    <td></td>
                    <th>Total Active Cases</th>
                    <th>Non-payment</th>
                    <th>Holdover</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="rowgroup">
                        Statewide Totals
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                
                </tr>
                <tr>
                    <th scope="row">
                        Pre-Pandemic
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr>
                    <th scope="row">
                        Pandemic
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr>
                    <th scope="rowgroup">
                        NYC Totals
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                
                </tr>
                <tr>
                    <th scope="row">
                        Pre-Pandemic
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr>
                    <th scope="row">
                        Pandemic
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr>
                    <th scope="rowgroup">
                        Outside NYC Totals
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                
                </tr>
                <tr>
                    <th scope="row">
                        Pre-Pandemic
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr>
                    <th scope="row">
                        Pandemic
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                    
            </tbody>
            

        
        </table>
    );
};