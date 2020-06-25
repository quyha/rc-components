/* eslint-disable react/no-danger */
import React, { CSSProperties } from 'react';
import { Formik, Form, FormikHelpers, FastField } from 'formik';
import * as Yup from 'yup';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FieldWrap } from '../components/input/index';
import Icon from '../components/icon';
import Radio from '../components/radio';
import Button, { ButtonGroup } from '../components/button';
import Checkbox from '../components/checkbox';

export default {
    title: 'Formik',
}

interface FormValues {
    name: string;
    username: string;
    email: string;
    password: string;
    bio: string;
    gender: number;
    agree: boolean;
}

interface ChangeInputFn {
    (setFieldValue: (k: string, v: number | boolean) => void): React.ChangeEventHandler<HTMLInputElement>;
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
    gender: Yup.string().required('Gender is required'),
    agree: Yup.bool().oneOf([ true ]).required('Agree is required'),
});

const initialValues: FormValues = {
    name: '',
    username: '',
    password: '',
    email: '',
    bio: '',
    gender: 1,
    agree: false,
};

const styleWrap: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    gridColumnGap: 30,
};

export const About: React.FC<{}> = () => (
    <p>Using formik and yup</p>
);

const codeGeneral = `
    import React from 'react';
    import { Formik, Form, FormikHelpers, FastField } from 'formik';
    import * as Yup from 'yup';
    import { FieldWrap } from '../components/input/index';
    import Icon from '../components/icon';
    import Radio from '../components/radio';
    import Button, { ButtonGroup } from '../components/button';
    import Checkbox from '../components/checkbox';

    interface FormValues {
        name: string;
        username: string;
        email: string;
        password: string;
        bio: string;
        gender: number;
        agree: boolean;
    }
    
    interface ChangeInputFn {
        (setFieldValue: (k: string, v: number | boolean) => void): React.ChangeEventHandler<HTMLInputElement>;
    }
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().required('Password is required'),
        gender: Yup.string().required('Gender is required'),
        agree: Yup.bool().oneOf([ true ]).required('Agree is required'),
    });
    
    const initialValues: FormValues = {
        name: '',
        username: '',
        password: '',
        email: '',
        bio: '',
        gender: 1,
        agree: false,
    };
`;

export const General: React.FC<{}> = () => {
    const changeGender: ChangeInputFn = (setFieldValue) => ({ target }): void => {
        setFieldValue('gender', parseInt(target.value, 10));
    };

    const changeAgree: ChangeInputFn = (setFieldValue) => ({ target }): void => {
        setFieldValue('agree', target.checked);
    };
    
    const doSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
        console.log(values);
        actions.setSubmitting(false);
    }
    
    return (
        <div style={ styleWrap }>
            <Formik
                initialValues={ initialValues }
                onSubmit={ doSubmit }
                validationSchema={ validationSchema }
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        setFieldValue,
                    }): React.ReactNode => (
                        <Form>
                            <FieldWrap label="Name" error={ errors.name && touched.name ? errors.name : '' }>
                                <FastField
                                    type="text"
                                    className={ `input ${ (errors.name && touched.name) ? 'is-danger' : '' }` }
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                />
                            </FieldWrap>
                            <FieldWrap
                                label="Username"
                                error={ errors.username && touched.username ? errors.username : '' }
                                iconLeft={ <Icon name="user" /> }
                            >
                                <FastField
                                    type="text"
                                    className={ `input ${ (errors.username && touched.username) ? 'is-danger' : '' }` }
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                />
                            </FieldWrap>
                            <FieldWrap
                                label="Email"
                                error={ errors.email && touched.email ? errors.email : '' }
                                iconRight={ <Icon name="mail" /> }
                            >
                                <FastField
                                    type="email"
                                    className={ `input ${ (errors.email && touched.email) ? 'is-danger' : '' }` }
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </FieldWrap>
                            <FieldWrap label="Password" error={ errors.password && touched.password ? errors.password : '' }>
                                <FastField
                                    type="password"
                                    className={ `input ${ (errors.password && touched.password) ? 'is-danger' : '' }` }
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </FieldWrap>
                            <FieldWrap label="Bio">
                                <FastField
                                    component="textarea"
                                    className="textarea"
                                    name="bio"
                                    id="bio"
                                    placeholder="Bio"
                                />
                            </FieldWrap>
                            <FieldWrap label="Gender" error={ errors.gender && touched.gender ? errors.gender : '' }>
                                <Radio
                                    name="gender"
                                    id="male"
                                    horizontal
                                    label="Male"
                                    value={ 0 }
                                    checked={ values.gender === 0 }
                                    onChange={ changeGender(setFieldValue) }
                                />
                                <Radio
                                    name="gender"
                                    id="female"
                                    horizontal
                                    label="Female"
                                    value={ 1 }
                                    checked={ values.gender === 1 }
                                    onChange={ changeGender(setFieldValue) }
                                />
                            </FieldWrap>
                            <FieldWrap error={ errors.agree && touched.agree ? errors.agree : '' }>
                                <Checkbox
                                    id="agree"
                                    label="I agree to the terms and conditions"
                                    checked={ values.agree }
                                    onChange={ changeAgree(setFieldValue) }
                                />
                            </FieldWrap>
                            <FieldWrap>
                                <ButtonGroup>
                                    <Button type="submit" appearance="primary" loading={ isSubmitting }>Submit</Button>
                                    <Button type="button">Cancel</Button>
                                </ButtonGroup>
                            </FieldWrap>
                        </Form>
                    )
                }
            </Formik>
            <SyntaxHighlighter language="jsx" style={ docco }>{ codeGeneral }</SyntaxHighlighter>
        </div>
    )
};

export const HorizontalForm: React.FC<{}> = () => {
    const changeGender: ChangeInputFn = (setFieldValue) => ({ target }): void => {
        setFieldValue('gender', parseInt(target.value, 10));
    };

    const changeAgree: ChangeInputFn = (setFieldValue) => ({ target }): void => {
        setFieldValue('agree', target.checked);
    };
    
    const doSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
        console.log(values);
        actions.setSubmitting(false);
    }

    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ doSubmit }
            validationSchema={ validationSchema }
        >
            {
                ({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    setFieldValue,
                }): React.ReactNode => (
                    <Form>
                        <FieldWrap
                            label="Name"
                            error={ errors.name && touched.name ? errors.name : '' }
                            horizontal
                        >
                            <FastField
                                type="text"
                                className={ `input ${ (errors.name && touched.name) ? 'is-danger' : '' }` }
                                name="nameHorizontal"
                                id="nameHorizontal"
                                placeholder="Name"
                            />
                        </FieldWrap>
                        <FieldWrap
                            label="Username"
                            error={ errors.username && touched.username ? errors.username : '' }
                            iconLeft={ <Icon name="user" /> }
                            horizontal
                        >
                            <FastField
                                type="text"
                                className={ `input ${ (errors.username && touched.username) ? 'is-danger' : '' }` }
                                name="usernameHorizontal"
                                id="usernameHorizontal"
                                placeholder="Username"
                            />
                        </FieldWrap>
                        <FieldWrap
                            label="Email"
                            error={ errors.email && touched.email ? errors.email : '' }
                            iconRight={ <Icon name="mail" /> }
                            horizontal
                        >
                            <FastField
                                type="email"
                                className={ `input ${ (errors.email && touched.email) ? 'is-danger' : '' }` }
                                name="emailHorizontal"
                                id="emailHorizontal"
                                placeholder="Email"
                            />
                        </FieldWrap>
                        <FieldWrap
                            label="Password"
                            error={ errors.password && touched.password ? errors.password : '' }
                            horizontal
                        >
                            <FastField
                                type="password"
                                className={ `input ${ (errors.password && touched.password) ? 'is-danger' : '' }` }
                                name="passwordHorizontal"
                                id="passwordHorizontal"
                                placeholder="Password"
                            />
                        </FieldWrap>
                        <FieldWrap label="Bio" horizontal>
                            <FastField
                                component="textarea"
                                className="textarea"
                                name="bioHorizontal"
                                id="bioHorizontal"
                                placeholder="Bio"
                            />
                        </FieldWrap>
                        <FieldWrap
                            label="Gender"
                            error={ errors.gender && touched.gender ? errors.gender : '' }
                            horizontal
                        >
                            <Radio
                                name="genderHorizontal"
                                id="maleHorizontal"
                                horizontal
                                label="Male"
                                value={ 0 }
                                checked={ values.gender === 0 }
                                onChange={ changeGender(setFieldValue) }
                            />
                            <Radio
                                name="genderHorizontal"
                                id="femaleHorizontal"
                                horizontal
                                label="Female"
                                value={ 1 }
                                checked={ values.gender === 1 }
                                onChange={ changeGender(setFieldValue) }
                            />
                        </FieldWrap>
                        <FieldWrap error={ errors.agree && touched.agree ? errors.agree : '' } horizontal>
                            <Checkbox
                                id="agreeHorizontal"
                                label="I agree to the terms and conditions"
                                checked={ values.agree }
                                onChange={ changeAgree(setFieldValue) }
                            />
                        </FieldWrap>
                        <FieldWrap horizontal>
                            <ButtonGroup>
                                <Button type="submit" appearance="primary" loading={ isSubmitting }>Submit</Button>
                                <Button type="button">Cancel</Button>
                            </ButtonGroup>
                        </FieldWrap>
                    </Form>
                )
            }
        </Formik>
    );
};
