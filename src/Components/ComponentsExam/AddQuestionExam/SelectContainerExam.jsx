import React from 'react'
import SelectMenuExam from './SelectMenuExam'
import { Box } from '@mui/system'
import { State } from '../../Context/Provider'


const SelectContainerExam = () => {
  const { quest, dsubject, dtopic, dstopic } = State();
  // console.log(quest)
  return (
    <Box 
    sx={{
            background:'#fff', width:'100%', mt:'32px', p:'56px 48px', 
            display:'grid', 
            gridTemplateColumns:{
                lg:"6fr 6fr"
            }, 
            gridGap:'24px',
            borderRadius:'40px'
        }}>
        <SelectMenuExam dropdownName={"Class"} listArray={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} classList={"classChange"} add={true} value={"Class"} val={quest.Class} />
        <SelectMenuExam dropdownName={"Subject"} listArray={dsubject} add={true} value={"Subject"} val={quest.Subject}/>
        <SelectMenuExam dropdownName={"Topic"} listArray={dtopic} add={true} value={"Topic"} val={quest.Topic}/>
        <SelectMenuExam dropdownName={"Level"} listArray={["Beginner", "Intermediate" , "Advance"]} add={false} value={"Level"} val={quest.Level}/>
        <SelectMenuExam dropdownName={"Per Question Time"} listArray={['1 Munute', '2 Minutes', '3 Minutes']} value={"Sub_topic"} val={quest.Sub_topic}/>
        <SelectMenuExam dropdownName={"Test Duration"} listArray={['60 Minutes', '120 Minutes', '180 Minutes']} value={"Test_Duration"} val={quest.Quiz_Type}/>

    </Box>
  )
}

export default SelectContainerExam
