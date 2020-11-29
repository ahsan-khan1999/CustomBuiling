import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard'
import Dropdown from 'react-dropdown'
import Card from './Components/Card'
import { Container, Col, Row } from 'react-bootstrap';

function App() {

    let [data, setData] = useState('');
    let [dropDownOptions, setDropDownOptions] = useState([]);
    let [selected, setSelected] = useState('');
    let [items, setItems] = useState([]);
    let [organicSources, setOrganicSources] = useState('');
    let [directSources, setDirectSources] = useState('');
    let [referralSources, setReferralSources] = useState('');
    let [socialSources, setSocialSources] = useState('');
    let [emailSources, setEmailSources] = useState('');

    let [pageView, setPageView] = useState('');
    let [users, setUsers] = useState('');
    let [newUsers, setNewUSers] = useState('');
    let [sessions, setSessions] = useState('');
    let [bounseRate, setBounseRate] = useState('');

    const config = {
        apiKey: 'AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI',
        spreadsheetId: '1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg'
    }
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId
        }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

    const getData = args => {
        const arr = items;
        let organicSource = null;
        let directSource = null;
        let referralSource = null;
        let socialSource = null;
        let emailSource = null;
        let pageView = null;
        let user = null;
        let newUser = null;
        let session = null;
        let bounseRates = null;
        for (let i = 0; i < arr.length; i++) {
            if (args === arr[i].month) {
                organicSource = arr[i].organic_source;
                directSource = arr[i].direct_source;
                referralSource = arr[i].referral_source;
                socialSource = arr[i].social_source;
                emailSource = arr[i].email_source;
                pageView = arr[i].page_views;
                user = arr[i].users;
                newUser = arr[i].new_users;
                session = arr[i].sessions;
                bounseRates = arr[i].bounce_rate;

            }
        }
        selected = args;
        setOrganicSources(organicSource);
        setDirectSources(directSource);
        setReferralSources(referralSource);
        setSocialSources(socialSource);
        setEmailSources(emailSource);
        setPageView(pageView);
        setUsers(user);
        setNewUSers(newUser);
        setSessions(session);
        setBounseRate(bounseRates);
    }

    const update = (e) => {
        getData(e.value);
        setSelected(e.target.value);

    }
    useEffect(() => {
        function handleGetJson() {
            //     console.log("inside handleGetJson");
            //     let data = await fetch(url);

            //     let d = await data.json();
            //     let batchRowValues = data.valueRanges[0].values;

            //     const rows = [];

            //     for (let i = 1; i < batchRowValues.length; i++) {
            //         let rowObject = {};
            //         for (let j = 0; j < batchRowValues[i].length; j++) {
            //             rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
            //         }
            //         rows.push(rowObject);
            //     }
            //     await setData(d.valueRanges[0].values);


            // }
            fetch(url)
                .then(response => response.json())
                .then(data => {

                    let batchRowValues = data.valueRanges[0].values;

                    const rows = [];

                    for (let i = 1; i < batchRowValues.length; i++) {
                        let rowObject = {};
                        for (let j = 0; j < batchRowValues[i].length; j++) {
                            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
                        }
                        rows.push(rowObject);
                        setData(rows);
                    }

                    let dropdownOption = [];

                    for (let i = 0; i < rows.length; i++) {
                        dropdownOption.push(rows[i].month);
                    }
                    setDropDownOptions(dropdownOption);
                    setItems(rows);
                    setSelected(selected);



                }).catch((err) => console.log(err));


        }
        handleGetJson();

    }, []);
    useEffect(() => {
        let d = getData(selected);
    }, [selected]);
    // console.log(newUsers)
    return (
       
            <
        div className="App" >
<Container fluid>
                <
        select value={selected}
                    onChange={
                        update
                    } > {
                        dropDownOptions.map((option) => (<
                option value={option} > { option} < /option>
            ))
        } <
        /select>
        <
        /Container>
    
    
      
    
                                <
                                    Card title="Organic Source"
                                    value={organicSources}
                                    description="Our Organic Sources" />

                                <
                                    Card title="Direct Source"
                                    value={directSources}
                                    description="Our Direct Sources" />

                                <
                                    Card title="referral Source"
                                    value={referralSources}
                                    description="Our Referral Sources" />

                                <
                                    Card title="social Source"
                                    value={socialSources}
                                    description="Our social Sources" />

                                <
                                    Card title="Email Source"
                                    value={emailSources}
                                    description="Our Email Sources" />

                                <
                                    Card title="Page Views "
                                    value={pageView}
                                    description="Our Page Views" />

                                <
                                    Card title="Users "
                                    value={users}
                                    description="Our Users" />


                                <
                                    Card title="New Users"
                                    value={newUsers}
                                    description="Our New Users" />
                                <
                                    Card title="Sessions"
                                    value={sessions}
                                    description="Our Sessions" />

                                <
                                    Card title="Bounce rate"
                                    value={bounseRate}
                                    description="Our Bounse Rate" />
                                <
        /
        div>
    );
}

export default App;