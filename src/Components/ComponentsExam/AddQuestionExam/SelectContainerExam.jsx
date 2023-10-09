import React from 'react'
import SelectMenuExam from './SelectMenuExam'
import { Box } from '@mui/system'
import { State } from '../../Context/Provider'


const SelectContainerExam = () => {
  const { exam,  desubject, destopic} = State();
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
        <SelectMenuExam dropdownName={"Class"} listArray={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} classList={"classChange"} add={true} value={"Class"} val={exam.Class} />
        <SelectMenuExam dropdownName={"Subject"} listArray={desubject} add={true} value={"Subject"} val={exam.Subject}/>
        <SelectMenuExam dropdownName={"Topic"} listArray={destopic} add={true} value={"Topic"} val={exam.Topic}/>
        <SelectMenuExam dropdownName={"Level"} listArray={["Beginner", "Intermediate" , "Advance"]} add={false} value={"Level"} val={exam.Level}/>
        <SelectMenuExam dropdownName={"Per Question Time"} listArray={['1 Munute', '2 Minutes', '3 Minutes']} value={"perquest"} val={exam.perquest}/>
        <SelectMenuExam dropdownName={"Test Duration"} listArray={['60 Minutes', '120 Minutes', '180 Minutes']} value={"assigned_time"} val={exam.assigned_time}/>

    </Box>
  )
}

export default SelectContainerExam
