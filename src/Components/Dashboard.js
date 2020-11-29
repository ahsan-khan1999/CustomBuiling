import React, { useState } from 'react'
import './Dashboard.css';
import { Col, Row, Container } from 'react-bootstrap';
import Card from './Card';
import Chart from './Chart'
import DougnutChart from './DougnutChart';
import Dropdown from 'react-dropdown'
export default function Dashboard({ data }) {


    const chartData = [{
            label: "Venezuela",
            value: "290"
        },
        {
            label: "Saudi",
            value: "260"
        },
        {
            label: "Canada",
            value: "180"
        },
        {
            label: "Iran",
            value: "140"
        },
        {
            label: "Russia",
            value: "115"
        },
        {
            label: "UAE",
            value: "100"
        },
        {
            label: "US",
            value: "30"
        },
        {
            label: "China",
            value: "30"
        }
    ];

    return ( <
        div >
        <
        Card title = "Hello"
        value = ""
        description = "Hello World" / >
        <
        Card title = "Hello"
        value = { 1010 }
        description = "Hello World" / >
        <
        Card title = "Hello"
        value = { 1010 }
        description = "Hello World" / >
        <
        Card title = "Hello"
        value = { 1010 }
        description = "Hello World" / >

        <
        Chart data = { chartData }
        // title = { chartData.label }
        / > <
        DougnutChart data = { chartData }
        />

        <
        /
        div >
    )
}