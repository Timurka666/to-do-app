import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import RootPage from "../pages/rootPage";
import AppLayout from "../shared/layout/ui/layout";
import Modal from "../shared/modal/ui/modal";
import Navbar from "../widgets/navbar/ui/navbar";
import Footer from "../widgets/footer/ui/footer";
import TaskPage from "../pages/taskPage";

function App() {
  return (
    <HashRouter basename="/to-do-app">
      <Provider store={store}>
        <AppLayout modal={<Modal />} navbar={<Navbar />} footer={<Footer />}>  
          <Routes>
            <Route element={<RootPage />} path="/" />
            <Route element={<TaskPage />} path="/:id" />
          </Routes>
        </AppLayout>
      </Provider>
    </HashRouter>
  );
}

export default App;
