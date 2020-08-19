import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, FormField, Form, Label } from 'semantic-ui-react';
import {DateTimePicker} from 'react-widgets';

interface IProps extends FieldRenderProps<Date,HTMLInputElement>, FormFieldProps {}


export const DateInput: React.FC<IProps> = ({input,width,placeholder,date=false,time=false, meta:{touched, error, ...rest}})  => {
    return (
    <Form.Field error= {touched && !!error} width={width}>
        <DateTimePicker value={input.value || null} date={date} time={time} placeholder={placeholder} onBlur={input.onBlur} onKeyDown={(e)=>e.preventDefault()} onChange={input.onChange} {...rest} /> 
        {touched && error && (
            <Label basic color='red'></Label>
        )}
    </Form.Field>
    )
}

// ...rest -> shows rest of the properties of datepicker