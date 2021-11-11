import {Component} from 'react'
import PropTypes from 'prop-types'
import styles from '../ContactForm/ContactForm.module.css'

const InitialState = {
    name: '',
    number: '',
};

class ContactForm extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        contacts: PropTypes.array.isRequired,
    }

state = {...InitialState};

handleInputChange = e => this.setState({[e.target.name]: e.target.value});
handleSubmit = e => {
    e.preventDefault();

    const {onSubmit} = this.props;
    const {name} = this.state;
    
    if(this.contactExits()){
        alert(`${name} is already in contacts`)
        return;
    }
    onSubmit(this.state);
    this.resetState();
};

resetState = () => this.setState({...InitialState});

contactExits = () => this.props.contacts.find(({name}) => name === this.state.name);

render() {
    const {name, number} = this.state;
    return(
        <form className={styles.forma} onSubmit={this.handleSubmit}>
            <div className={styles.blockform}>
            <label htmlFor="">
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={this.handleInputChange}
                    />
            </label>
                
                <label>
                <span>Number</span>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={this.handleInputChange}
                    />
                </label>
            </div>
            <button type="submit">Add contact</button>
        </form>
    );
  }
}

export default ContactForm;