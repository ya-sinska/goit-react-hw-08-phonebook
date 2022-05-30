import PropTypes from 'prop-types';
import { PaperForm, InputField, Label, Error, BtnSubmitForm } from './Form.styled'
// Patterns
const phoneRegExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// Component Forma
export const Forma = ({ btnText, register, handleSubmit, errors, onSubmit, contact, isLoading}) => {

    return (
        <PaperForm>
            <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            >
            <Label htmlFor='name'> Name </Label>             
            <InputField
                id="name"
                type="text"
                defaultValue={contact?(contact.name):''}
                {...register("name", {
                    required: "This is required",
                    minLength: {
                        value: 3,
                        message: "Min length is 3 symbols",
                    },
                    pattern: {
                        value: nameRegExp,
                        message: "Use only text"
                    }
                })} 
                placeholder="Surname Name"
            />
            {errors.name&&<Error>{errors.name?.message }</Error> } 
            <Label  htmlFor='number'> Number </Label >              
            <InputField
                id="number"
                type="tel"
                defaultValue={contact ? (contact.number) : ''}
                {...register("number", {
                    required: "This is required",
                    minLength: {
                        value: 5,
                        message: "Min length is 5 symbols",
                    },
                    maxLength: {
                        value: 20,
                        message: "Max length is 20 symbols"
                    },
                    pattern: {
                        value: phoneRegExp,
                        message: "Use phone number"
                    }
                })}
                placeholder="+38(000)000-00-00"
            />
            {errors.number&&<Error>{errors.number?.message }</Error>  }     
            <BtnSubmitForm disabled={isLoading} variant="contained" type="submit">{btnText}</BtnSubmitForm>      
            </form>
        </PaperForm>
    )
}
Forma.propTypes = {
    btnText: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    contact: PropTypes.object,
    isLoading:PropTypes.bool.isRequired,
}