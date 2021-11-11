import PropTypes from 'prop-types'

const ContactListItem = ({id,name,number,onClick}) => {
    return(
        <>
        <span>
            {name}: {number}
        </span>
        <button type="button" onClick={() => onClick(id)}>
            Delete
        </button>
        </>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ContactListItem