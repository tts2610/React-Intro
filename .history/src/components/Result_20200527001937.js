import React from 'react'

export default function Result({ result }) {
    if (result[0] > result[1])
        return ( < div className = "resultInner" >
                <
                h1 > You Won!!! < /h1> <
                /div>);
                else if (result[0] < result[1]) {
                    return ( < div className = "resultInner" >
                        <
                        h1 > You Lost!!! < /h1> <
                        /div>);
                    }
                    else if (result[0] == result[1]) {
                        return ( < div className = "resultInner" >
                            <
                            h1 > Tie Game!!! < /h1> <
                            /div>);
                        }
                        else {
                            return ( < div className = "resultInner" >

                                <
                                /div>);
                            }
                        }