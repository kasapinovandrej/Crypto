import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useCrypto } from '../hooks/index.js'

const useStyles = makeStyles({
    table: {
        //minWidth: 650,
        //height: 300,
    },
    caption: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 13
    }
});

function createData(symbol, dailyChange, volume, lastPrice) {
    return { symbol, dailyChange, volume, lastPrice };
}

////////////////WEB SOCKETS////////////////////////
const clientBitCoinUsd = new WebSocket(`wss://api-pub.bitfinex.com/ws/2`);
const clientBitCoinEur = new WebSocket(`wss://api-pub.bitfinex.com/ws/2`);
const clientEthUsd = new WebSocket(`wss://api-pub.bitfinex.com/ws/2`);
const clientEthEur = new WebSocket(`wss://api-pub.bitfinex.com/ws/2`);
const clientEosUsd = new WebSocket(`wss://api-pub.bitfinex.com/ws/2`);
///////////////////////////////////////////////////


export default function DenseTable() {
    const classes = useStyles();
    const btcUsd = useCrypto(clientBitCoinUsd, 'BTCUSD')
    const btcEur = useCrypto(clientBitCoinEur, 'BTCEUR')
    const ethUsd = useCrypto(clientEthUsd, 'ETHUSD')
    const ethEur = useCrypto(clientEthEur, 'ETHEUR')
    const eosUsd = useCrypto(clientEosUsd, 'EOSUSD')

    const rows = [
        createData('BTC/USD', ...btcUsd),
        createData('BTC/EUR', ...btcEur),
        createData('ETH/USD', ...ethUsd),
        createData('ETH/EUR', ...ethEur),
        createData('EOS/USD', ...eosUsd),
    ];
    return (

        <div style={{ position: "relative", width: '100%' }}>
            {(typeof eosUsd[2]) !== 'number' ? <CircularProgress style={{ position: "absolute", top: '10rem', left: '50%' }} /> :
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" className={classes.caption}>#</TableCell>
                                <TableCell align="center" className={classes.caption}>Symbol</TableCell>
                                <TableCell align="right" className={classes.caption}>Daily change</TableCell>
                                <TableCell align="right" className={classes.caption}>Volume</TableCell>
                                <TableCell align="right" className={classes.caption}>Last price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row" className={classes.caption}>{i + 1}</TableCell>
                                    <TableCell align="center" className={classes.content}>{row.symbol}</TableCell>
                                    <TableCell align="right" className={classes.content}>{row.dailyChange} %</TableCell>
                                    <TableCell align="right" className={classes.content}>{new Intl.NumberFormat('en-US').format(row.volume)}{row.symbol.includes('USD') ? ' $' : ' €'}</TableCell>
                                    <TableCell align="right" className={classes.content}>{new Intl.NumberFormat('en-US').format(row.lastPrice)}{row.symbol.includes('USD') ? ' $' : ' €'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
        </div>
    );
}


