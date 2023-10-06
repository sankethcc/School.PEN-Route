import { Box } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import StyledArea from './StyledArea';

const Instructions = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const [instructions, setInstructions] = useState('');
    const [eligibility, setEligibility] = useState('');
    const [learning, setLearning] = useState('');
    console.log(learning)
    const btnStyle={
        borderRadius:'12px',
        height:'64px',
        fontSize:'20px',
        fontWeight:'700',
        border:'none',
        textTransform:'capitalize'
    }
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
    


  return (

      <Box sx={{
        background:'#FFF',
        padding:'56px 48px',
        mt:'32px',
        borderRadius:'24px',
        textAlign:'center',
        width:'100%'
      }}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group"
            sx={{
                borderRadius:'16px',
                width:'100%',
                mb:'49px',
                border:'none',
                background:'#F5F6F7',
                boxShadow:'none'
                
            }}
            
        >
            <Button style={btnStyle} 
                sx={{ 
                    width:'100%',
                    color: activeTab === 'tab1' ? '#FFF' : '#707070',
                    fontWeight: activeTab === 'tab1' ? '700' : '400',
                    background: activeTab === 'tab1' ? '#7A58E6' : 'transparent',
                    '&:hover': {
                    background: activeTab === 'tab1' ? '#7A58E6' : 'transparent',
                    }   
                }}
                className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
                onClick={() => handleTabClick('tab1')}
            >Instruction</Button>
            <Button style={btnStyle} 
                sx={{ 
                    width:'100%',
                    color: activeTab === 'tab2' ? '#FFF' : '#707070',
                    fontWeight: activeTab === 'tab2' ? '700' : '400',
                    background: activeTab === 'tab2' ? '#7A58E6' : 'transparent',
                    '&:hover': {
                    background: activeTab === 'tab2' ? '#7A58E6' : 'transparent',
                    }   
                }}
                className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
                onClick={() => handleTabClick('tab2')}
            >Eligibility</Button>
            <Button style={btnStyle} 
                sx={{ 
                    width:'100%',
                    color: activeTab === 'tab3' ? '#FFF' : '#707070',
                    fontWeight: activeTab === 'tab3' ? '700' : '400',
                    background: activeTab === 'tab3' ? '#7A58E6' : 'transparent',
                    '&:hover': {
                    background: activeTab === 'tab3' ? '#7A58E6' : 'transparent',
                    }   
                }}
                className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
                onClick={() => handleTabClick('tab3')}
            >Learning</Button>

        </ButtonGroup>
        {activeTab == 'tab1'? 
        <StyledArea value={instructions} setValue={setInstructions} />
        
        :activeTab == 'tab2'?
        <StyledArea value={eligibility} setValue={setEligibility} />
        
        : <StyledArea value={learning} setValue={setLearning} />}
                
      </Box>

  )
}

export default Instructions
