import { PaperForm, InputField, Label, Error, BtnSubmitForm } from './Form.styled'

// Patterns
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
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
                defaultValue={contact&&(contact.name)}
                {...register("name", {
                    required: "This is required",
                    minLength: {
                        value: 1,
                        message: "Min length is 5 symbols",
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
                defaultValue={contact&&(contact.number)}
                {...register("number", {
                    required: "This is required",
                    maxLength: {
                        value: 13,
                        message: "Max length is 13 symbols"
                    },
                    pattern: {
                        value: phoneRegExp,
                        message: "Use only numbers"
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
