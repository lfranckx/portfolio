import React from "react";
import '../../../styles/Contact.scss';
import Footer from "../../Footer";

const API_ENDPOINT = "";
const ApiService = {
    sendEmail(data) {
        return fetch(`${API_ENDPOINT}/email`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        );
    }
}

const formatPhoneNumber = (value, previousValue) => {
    //return nothing if no value
    if (!value) return value;

    // only allows 0-9 inputs
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
        //    returns: "x", "xx", "xxx"
        if (cvLength < 4) return currentValue;

        //   returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
        if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;

        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
}

export default class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    constructor() {
        super();
        this.state = { error: null, success: null, phone: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target: { value } }) {
        this.setState(prevState=> ({ phone: formatPhoneNumber(value, prevState.phone) }));
    }

    handleSubmitEmail = ev => {
        ev.preventDefault();
        const { name, email, phone, message } = ev.target;
        const data = {
            name: name,
            email: email,
            phone: phone,
            message: message
        }
        ApiService.sendEmail(data)   
        .then(res => {
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
            this.setState({ success: res.success})
        })     
        .catch(res => {
            this.setState({ error: res.error });
        });
    }

    render () {
        const { error, success } = this.state;
        return (
            <>
                <main id="contact" className={'container'}>
                    <h1 className={'h2'}>Contact Me</h1>
                    <form className={'margin-auto'}>
                        <div className={'flex name-and-email'}>
                            
                            <div className={'form-input name'}>
                                <label>Name</label>
                                <input 
                                    className={'contact-input'} 
                                    type={'text'}
                                    name='name'
                                    aria-label='name'
                                    id='name'
                                    required
                                />
                            </div>
                            
                            <div className={'form-input email'}>
                                <label>Email</label>
                                <input 
                                    className={'contact-input'} 
                                    type={'email'}
                                    name='email'
                                    aria-label='email'
                                    id='email'
                                    required
                                />
                            </div>
                        </div>

                        <div className={'form-input phone'}>
                            <label>Phone Number</label>
                            <input 
                                className={'contact-input'}
                                type={'text'}
                                name='phone'
                                aria-label='phone'
                                id='phone'
                                required
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className={'form-input'}>
                            <label>Message</label>
                            <textarea 
                                className={'contact-input'} 
                                rows={10}
                                name='message'
                                aria-label='message'
                                id='message'
                                required
                            ></textarea>
                        </div>

                        <button className={'btn submit'}>
                            <i className="fas fa-paper-plane"></i>
                            &nbsp; Send
                        </button>

                        <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                        <div role='alert'>{success && <p className='success'>{success}</p>}</div>
                    </form>
                </main>
                <Footer />
            </>
        )
    }
}