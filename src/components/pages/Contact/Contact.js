import React from "react";
import '../../../styles/Contact.scss';
import Footer from "../../Footer";

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
        this.state = { phone: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target: { value } }) {
        this.setState(prevState=> ({ phone: formatPhoneNumber(value, prevState.phone) }));
    }

    handleSubmitEmail = ev => {
        ev.preventDefault();
        const { name, email, phone, message } = ev.target;
    }

    render () {
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
                    </form>
                </main>
                <Footer />
            </>
        )
    }
}