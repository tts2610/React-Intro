import React from 'react'

export default function History({historyList}){
    const historyItems=[];
    historyList.forEach((history,element) => {
        if(history[0]>history[1])
            historyItems.push(<div key={element}>
                <li>
                    Win
                </li>
                </div>);
        else if(history[0]<history[1])
            historyItems.push(<div key={element}>
                <li>
                    Lost
                </li>
                </div>)
        else{
            historyItems.push(
                <div key={element}>
                <li>
                    Tie
                </li>
                </div>
            );
        }
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