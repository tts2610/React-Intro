import React from 'react'

export default function History({historyList}){
    const historyItems=[];
    historyList.forEach(history => {
        alert(history)
        if(history[0]>history[1])
            historyItems.push(<div>
                <li>
                    {history}
                </li>
                </div>);
        else if(history[0]<history[1])
            historyItems.push(<div>
                <li>
                    {history}
                </li>
                </div>)
        else{
            historyItems.push(
                <div>
                <li>
                    {history}
                </li>
                </div>
            );

    

    return (
        <div>
            <h1>History</h1>
            <ul>
            {historyItems}
            </ul>
        </div>
    );
}