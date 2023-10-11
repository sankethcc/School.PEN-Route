import React from 'react'
import UnstyledSelectObjectValues from './UnstyledSelectObjectValues'
import { Box } from '@mui/system'
import { State } from '../../Context/Provider'
import { selectStyle } from '../../../styles/style'


const SelectContainer = () => {
  const { quest, dsubject, dtopic, dstopic } = State();
  // console.log(quest)
  return (
    <Box 
    sx={selectStyle.first}>
        <UnstyledSelectObjectValues dropdownName={"Class"} listArray={["1", "2", "3", "4", "5", "6", "7", "8", "9","10","11","12"]} classList={"classChange"} add={false} value={"Class"} val={quest.Class} />
        <UnstyledSelectObjectValues dropdownName={"Subject"} listArray={dsubject} add={true} value={"Subject"} val={quest.Subject}/>
        <UnstyledSelectObjectValues dropdownName={"Topic"} listArray={dtopic} add={true} value={"Topic"} val={quest.Topic}/>
        <UnstyledSelectObjectValues dropdownName={"Sub topic"} listArray={dstopic}add={true} value={"Sub_topic"} val={quest.Sub_topic}/>
        <UnstyledSelectObjectValues dropdownName={"Level"} listArray={["Beginner", "Intermediate" , "Advance"]} add={false} value={"Level"} val={quest.Level}/>
        <UnstyledSelectObjectValues dropdownName={"Quiz Type"} listArray={["Multiple choice - Single answer", "Multiple choice - multiple answers", "Yes or No", "True or False"]} add={false} value={"Quiz_Type"} val={quest.Quiz_Type}/>

    </Box>
  )
}

export default SelectContainer
