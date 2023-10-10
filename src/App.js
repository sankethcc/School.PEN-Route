import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import "./styles/quiz.css";
import "./styles/CustomTextArea.css";

import MainPageOfQuiz from "./Pages/MainPageOfQuiz";
import UpdatePageOfQuiz from "./Pages/UpdatePageOfQuiz";
import MainPageOfExam from "./Pages/MainPageOfExam";
import MainPageOfAssignUser from "./Pages/MainPageOfAssignUser";
import AddSubjectSubtopic from "./Pages/AddSubjectSubtopic";
import AddLanguagePage from "./Pages/AddLanguagePage";
import PreviewPageExam from "./Pages/PreviewPageExam";
import ExamEditPage from "./Pages/ExamEditPage";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin">
            <Route path="" element={<MainPageOfQuiz />} />
            <Route path="creae-subject" element={<AddSubjectSubtopic />} />
            <Route path="add-language" element={<AddLanguagePage />} />
            <Route path="create-exam" element={<MainPageOfExam />} />
            <Route path="assign-user" element={<MainPageOfAssignUser />} />
          </Route>
            <Route path="/admin/create-exam/edit-exam/:topic_id" element={<ExamEditPage />} />
            <Route path="/update/:quiz_id" element={<UpdatePageOfQuiz />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/admin/create-exam/:topic_id" element={<PreviewPageExam />} />
          <Route path='/user' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
