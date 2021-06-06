import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddContact from '../components/AddContact';
import ContactsList from '../components/ContactsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditContact from '../components/EditContact';
import ContactContext from '../context/ContactContext';

const AppRouter = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <ContactContext.Provider value={{ contacts, setContacts }}>
            <Switch>
              <Route component={ContactsList} path="/" exact={true} />
              <Route component={AddContact} path="/add" />
              <Route component={EditContact} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </ContactContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;