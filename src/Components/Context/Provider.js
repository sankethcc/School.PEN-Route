import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import Hamburger from 'hamburger-react';

const ChatContext = createContext();

const Provider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(true)
  const handleHamburger = ()=>{
    setToggleMenu(!toggleMenu)
  }
  const [activeTab, setActiveTab] = useState('Create Quiz');
  const [openPage, setOpenPage] = useState('')
  const handleOpenPage = (page)=>{
      setOpenPage(page)
  }
  const [updatePreviewQuestionExam, setUpdatePreviewQuestionExam] = useState(true)
  const handleUpdatePreviewQuestionExam = ()=>{
    setUpdatePreviewQuestionExam(!updatePreviewQuestionExam)
  }
  const [instruction, setInstruction] = useState('');
  const [eligiblity, setEligiblity] = useState('');
  const [learning, setLearning] = useState('');
  const [quest, setquest] = useState({
    Subject: "",
    Class: "",
    Topic: "",
    Sub_topic: "",
    Level: "",
    Quiz_Type: "",
    Language: "",
    
  });

  const [exam, setexam] = useState({
    Subject: "",
    Class: "",
    Topic: "",
    Level: "",
    perquest: "",
    assigned_time: "",
    Quiz_Type: "",
    Language: ""
  });

  const [examquest, setexamquest] = useState([]);
  const [editexam, seteditexam] = useState([]);

  const [examid, setexamid] = useState({id:null, qno:1});
  // const [prevnote, setprevnote] = useState([])
  const [dsubject, setdsubject] = useState([])
  const [dtopic, setdtopic] = useState([])
  const [dlanguage, setdlanguage] = useState([])
  const [dstopic, setdstopic] = useState([])
  const [bool, setbool] = useState(true)
  const [boo,setboo]= useState(true)
  const [questions, setQuestions] = useState([])
  const [Exams, SetExams]=useState([])
  const [subjects, setSubjects] = useState([])
  const [fdata, setfdata] = useState([])
  const [desubject, setdesubject] = useState([])
  const [destopic, setedstopic] = useState([])
  const [editid, seteditid] = useState({})
  const [user, setUser] = useState([])
  const [assign, setassign] = useState({
    fun: '',
    language: '',
    class: '',
    subject: '',
    Topic: '',
    user:''
  })

  const [dasubject, setdasubject] = useState([])
  const [datopic, setdatopic] = useState([])
  const [dalanguage, setdalanguage] = useState([])
  // const [creatorId, setcreatorId] = useState({id:JSON.parse(localStorage.getItem('user'))._id, role:JSON.parse(localStorage.getItem('user' )).role})
  // const id = JSON.parse(localStorage.getItem('user' )).user._id;
  // const role=JSON.parse(localStorage.getItem('user' )).user.role;

  // state for update user profile
  const [userData, setUserData] = useState({
    name:'',
    email:'',
    phoneno:'',
    address:'',
    country:'',
    state:'',
    city:'',
    pincode:'',
  })
    
 
  useEffect(()=>{
    const fetchQuestions = async ()=>{
      try {
        var usersdata = JSON.parse(localStorage.getItem('user' )) ;
        const creatorI = usersdata.user._id
        const { data } = await axios.get(`http://localhost:5000/get_topics/${creatorI}`)
        // console.log(data)
        SetExams(data)

      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    fetchQuestions()
  }, [])

  // useEffect(()=>{
  //   const fetchQuestions = async ()=>{
  //     try {
        
  //       const { data } = await axios.get(`http://localhost:5000/get_languages`)
  //       // console.log(data)
  //       if(data)
  //       setdlanguage(data)
  //     } catch(error){
  //       console.error('Error Fetching questions: ', error)
  //     }
  //   }
  //   fetchQuestions()
  // }, [])

  // useEffect(()=>{
  //   const fetchQuestions = async ()=>{
  //     try{
  //       const { data } = await axios.get("http://localhost:5000/get_all_quizz")
  //       // const question = JSON.parse(data)
  //       // const quet= question.filter((data)=>(data.subject==quest.Subject))
  //       // console.log(quet)
  //       const question = (data)
  //       setfdata(question)
  //       question?.map((data, i) => {
  //         const { question, options } = data.question_container
  //         setQuestions(oldArray => [{question: question, options: options, id: data._id},...oldArray])
          
  //       })
  //       // console.log(question)
        

  //     } catch(error){
  //       console.error('Error Fetching questions: ', error)
  //     }
  //   }
  //   fetchQuestions()
  //   const fetchSubject = async ()=>{
  //     try{
  //       const { data } = await axios.get("http://localhost:5000/get_all_subject_quizz")
  //       // const subjects = JSON.parse(data)
  //       const subjects = (data)
  //       data.forEach(object => {
  //         setdsubject(oldArray => [object.subject,...oldArray])
  //         // console.log(object.subject)
  //       });
  //       setSubjects(subjects)
  //       console.log(subjects)
  //     } catch(error){
  //       console.error('Error Fetching questions: ', error)
  //     }
  //   }
  //   fetchSubject()
  // }, [])
  
  // useEffect(()=>{
  //   const fetchQuestions = async ()=>{
  
  //       try {
  //         const formData = new FormData();
  //         formData.append('subject', quest.Subject);
  //         formData.append('topic', quest.Topic);
  //         formData.append('subtopic', quest.Sub_topic);
  //         formData.append('level', quest.Level);
  //         const { data } = await axios.get("http://localhost:5000/get_quizzes_by_filter", formData)
          
  //         setQuestions([]);
  //         const quet = data.filter((data) => (
  //                         (!quest.Subject || data.subject == quest.Subject) &&
  //                         (!quest.Topic || data.topic == quest.Topic) &&
  //                         (!quest.Sub_topic || data.subtopic == quest.Sub_topic) &&
  //                         (!quest.Language || data.language == quest.Language) &&
  //                         (!quest.Level || data.level == quest.Level) &&
  //                         (!quest.Quiz_Type || data.quiz_type == quest.Quiz_Type) &&
  //                         (!quest.Class || data.class == quest.Class)                           
  //         ))
  //         quet?.map((dat, i) => {
  //         const { question, options } = dat.question_container
  //         setQuestions(oldArray => [{ question: question, options: options, id: dat._id }, ...oldArray])
  //         })
  //       // console.log(data)
  //     } catch(error){
  //       console.error('Error Fetching questions: ', error)
  //     }
  //   }
  //   fetchQuestions()
    
  // }, [quest.Subject,quest.Topic,quest.Sub_topic,quest.Level,quest.Class,quest.Quiz_Type,quest.Language,openPage,bool])
  
  
  // useEffect(() => {
    
  //   const fetchSubjec = async ()=>{
  //     try {
  //       // console.log(quest.Subject)
  //       setdesubject([])
  //       const { data } = await axios.get("http://localhost:5000/get_all_subjects")
  //       // console.log(data)
  //       if(data)
  //       setdesubject(data);
      
  //     } catch(error){
  //       console.error('Error Fetching questions: ', error)
  //     }
  //   }
  //   fetchSubjec()
  // }, [])

  // useEffect(()=>{
  //   const fetchtopic = async ()=>{
  //     try {
  //       // console.log(dsubject)
  //       setdstopic([]);
  //       const { data } = await axios.get(`http://localhost:5000/get_subject_topics/${quest.Subject}`)
  //       setdtopic(data);
  //     } catch(error){
  //       console.error('Error Fetching questions: ', error)
  //     }
  //   }
  //   if(quest.Subject )
  //   fetchtopic()
  // }, [quest.Subject])

  // useEffect(()=>{
  //   const fetchstopic = async ()=>{
  //     try {
  //       const { data } = await axios.get(`http://localhost:5000/get_subject_subtopics/${quest.Subject}/${quest.Topic}`)
  //       // const temp= JSON.parse(data)
  //       setdstopic(data)
  //       // console.log(data)

  //     } catch(error){
  //       console.log( error)
  //     }
  //   }
  //   if(quest.Topic && quest.Subject)
  //   fetchstopic()
  // }, [quest.Topic])

  return (
    <ChatContext.Provider
      value={{
              Hamburger,
              handleHamburger,toggleMenu,
              activeTab,
              setActiveTab,
              handleOpenPage,
              quest,
              setquest,
              questions,
              subjects,
              setQuestions,
              dsubject,
              setdsubject,
        dtopic, setdtopic,
              dstopic, setdstopic,
        openPage, setOpenPage,
        exam, setexam,
        Exams, SetExams,
        examquest, setexamquest,
        examid, setexamid,
              bool,setbool,
              instruction, setInstruction,
              eligiblity, setEligiblity,
              learning, setLearning,
              updatePreviewQuestionExam,
        handleUpdatePreviewQuestionExam,
        desubject, setdesubject,
        destopic, setedstopic,
        boo,setboo,
        editexam, seteditexam,
        editid, seteditid,
        dlanguage, setdlanguage, setSubjects,
        user, setUser,
        assign, setassign,
        dasubject, setdasubject,
        datopic, setdatopic,
         dalanguage, setdalanguage,
         userData, setUserData,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const State = () => {
  return useContext(ChatContext);
};

export default Provider;