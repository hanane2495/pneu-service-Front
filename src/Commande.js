import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styled from 'styled-components';

//icons
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

//components
import TableCommande from './Components/TableCommande';


const Styles = styled.div`
 height:100%;
  .commande-layout{
    display: grid;
    height:100%;
    grid-template-areas:
        'title-com'
        'table-com';
     grid-template-rows: 10% 90%;
     grid-template-columns: 100%;
     padding:1% 1% 0 2% ;
     transition:0.9s;
  }
  .titre-Commande{
    grid-area: title-com;
    justify-content:center;
    justify-items:center;
    align-items:center;
    padding:0 1.5%;
    padding-left:0;
  }
  .table-commandes{
    grid-area: table-com;
    justify-content:center;
    justify-items:center;
    align-items:center;
    padding: 1.5%;
    padding-left:0;

  }
  .card-commandes{
      display:flex;
      flex-direction: row;
      justify-content:left;
      height: 100%;
      width:100%;
      padding-left: 2%;
      padding-top:0.5%;
      border-radius:10px;
      box-shadow:5px 10px 20px 1px rgba(0, 0, 0, 0.153);
  }
`;


const Commande = ({ parentCallback }) => {
    const [toggle, setToggle] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(<FaAngleLeft/>)
    return(
        <React.Fragment>
            <Styles>
            <div className='commande-layout'>
                <div className='titre-Commande'>
                    <Card className='card-commandes'>
                        <p style={{fontSize:'1.5rem', fontWeight:'500', color:'#999'}}>Listes des Commandes</p>
                        <button 
                           style={{display:'flex',flexDirection:'row' , marginBottom:'0.8%', marginLeft:'68%', color:'#666', fontSize:'1.5rem', background:'none', border:'none'}}
                           onClick={() => {
                            setToggle(!toggle);
                            parentCallback(!toggle);
                           }}
                        > 
                        <FaAngleLeft/><FaAngleRight/>
                        </button>
                    </Card>
                </div>
                <div className='table-commandes'>
                    
                        <TableCommande/>
                </div>        
            </div>
            </Styles>
        </React.Fragment>
        
        
    )
}

export default Commande;