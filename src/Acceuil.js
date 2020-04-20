import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col, Card } from "react-bootstrap";

//components
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Chart1 from './Components/Chart1'
import Chart2 from "./Components/Chart2";
import Chart3 from "./Components/Chart3";


const Styles = styled.div`
 height:100%;
  .home-layout{
    display: grid;
    height:100%;
    grid-template-areas:
        'title title'
        'chart-1 chart-1'
        'chart-2 chart-3';
     grid-template-rows: 10% 50% 40%;
     grid-template-columns: 40% 60%;
     padding:1% 1% 1% 2% ;
     transition:0.9s;
  }
  .titre{
    grid-area: title;
    justify-content:center;
    justify-items:center;
    align-items:center;
    padding:0 1.5%;
    padding-left:0;
  }
  .graphique-1{
    grid-area: chart-1;
    justify-content:center;
    justify-items:center;
    align-items:center;
    padding: 1.5%;
    padding-left:0;

  }
  .graphique-2{
    grid-area: chart-2;
    justify-content:center;
    justify-items:center;
    align-items:center;
    padding:0 3%;
    padding-left:0;
  }
  .graphique-3{
    grid-area: chart-3;
    justify-content:center;
    justify-items:center;
    align-items:center;
    padding:0 2%;
  }
  .card-graphique{
      height: 100%;
      width:100%;
      padding-left: 2%;
      border-radius:10px;
      box-shadow:5px 10px 20px 1px rgba(0, 0, 0, 0.153);
  }
`;


const Dashboard = () => {
    return(
        <React.Fragment>
            <Styles>
                <div className='home-layout'>
                    <div className='titre'>
                       <Card className='card-graphique'>
                            <p style={{fontSize:'2rem', fontWeight:'500', color:'#999', marginLeft:'2%'}}>Acceuil</p>
                        </Card>
                    </div>
                    <div className='graphique-1'>
                        <Card className='card-graphique'>
                            <Chart1/>
                        </Card>
                    </div>    
                    <div className='graphique-2'>
                        <Card className='card-graphique'>
                            <Chart2/>
                        </Card>
                    </div>
                    <div className='graphique-3'>
                        <Card className='card-graphique' style={{paddingRight:'1%'}}>
                            <Chart3/>
                        </Card>
                    </div>

                </div>
            </Styles>
        </React.Fragment>
        
    )
}

export default Dashboard;