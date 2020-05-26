import React from 'react'

export default function History({historyList}){
    const historyItems=[];
    historyList.forEach(history => {
        historyItems.push(
            <div>
                <li>
                    {history}
                </li>
                </div>
        )
    });
    return (
        <div>
            <h1>History</h1>
            <ul>
            {historyItems}
            </ul>
        </div>
    );
}