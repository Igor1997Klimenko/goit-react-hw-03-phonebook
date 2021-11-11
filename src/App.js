import {Component} from 'react'
import {v4 as generateId} from 'uuid'
import ContactForm from './Component/ContactForm/ContactForm'
import ContactList from './Component/ContactList/ContactList'
import Container from './Component/Container/Container'
import Filter from './Component/Filter/Filter'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

handleFormSubmit = userInfo => 
this.setState(({contacts}) =>({
 contacts: [
   ...contacts,
   {
     id:generateId(),
     ...userInfo,
   }
 ]
}))

handleFilterChange = e => this.setState({filter: e.target.value});

getFilterContact = () => {
  const {contacts,filter} = this.state;
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({name}) => 
    name.toLowerCase().includes(normalizedFilter),
  );
}

nandleContactDelete = contactId => {
  this.setState(({contacts}) => ({
  contacts: contacts.filter(({id}) => id !== contactId),
  }));
}

 render() {

const {contacts, filter} = this.state

   return(
     <Container>
     <h1>Phonebook</h1>
    <ContactForm
    onSubmit = {this.handleFormSubmit}
    contacts = {[...contacts]}
    />

    <h2>Contacts</h2>
    <Filter value={filter} onChange={this.handleFilterChange}/>
    <ContactList 
    contacts={this.getFilterContact()} 
    ContactsDelete={this.nandleContactDelete}/>
    </Container>
   );
 }
}

export default App;
