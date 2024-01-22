import { Field, Form, Formik } from 'formik';
import ButtonComponent from '../button/button.component';
import { Link } from 'react-router-dom';
import { useLoanClaculatorStyles } from './loan-calculator.style';
import { Slider } from 'antd';
import { useEffect, useState } from 'react';

const LoanCalculatorComponent = () => {
  const classes = useLoanClaculatorStyles();
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = (loanAmount, loanTerm, interestRate) => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm;

    return (
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalPayments))) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
    );
  };

  useEffect(() => {
    const { loanAmount, loanTerm, interestRate } = initialValues;
    const initialMonthlyPayment = calculateMonthlyPayment(
      loanAmount,
      loanTerm,
      interestRate
    );
    setMonthlyPayment(parseFloat(initialMonthlyPayment.toFixed(2)));
  }, []);

  const initialValues = {
    loanAmount: 10000,
    loanTerm: 12,
    interestRate: 14,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          // Form gönderildiğinde yapılacak işlemler
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className='row mb-30'>
              <div className='col-md-4 pr-0'>
                <label htmlFor='loanAmount' className={classes.inputLabel}>
                  Kreditin məbləği
                </label>
                <Field
                  id='loanAmount'
                  name='loanAmount'
                  className={classes.input}
                  onChange={(event) => {
                    const newLoanAmount = parseFloat(event.target.value);
                    const { loanTerm, interestRate } = values;

                    const calculatedMonthlyPayment = calculateMonthlyPayment(
                      newLoanAmount,
                      loanTerm,
                      interestRate
                    );

                    setMonthlyPayment(
                      parseFloat(calculatedMonthlyPayment.toFixed(2))
                    );
                    setFieldValue('loanAmount', newLoanAmount);
                  }}
                />
                <Slider
                  value={values.loanAmount}
                  onChange={(value) => {
                    const { loanTerm, interestRate } = values;

                    const calculatedMonthlyPayment = calculateMonthlyPayment(
                      value,
                      loanTerm,
                      interestRate
                    );

                    setMonthlyPayment(
                      parseFloat(calculatedMonthlyPayment.toFixed(2))
                    );
                    setFieldValue('loanAmount', value);
                  }}
                  defaultValue={10000}
                  max={100000}
                />
              </div>
              <div className='col-md-4 p-0'>
                <label htmlFor='loanTerm' className={classes.inputLabel}>
                  Kreditin müddəti
                </label>
                <Field
                  id='loanTerm'
                  name='loanTerm'
                  className={classes.input}
                  onChange={(event) => {
                    const newLoanTerm = parseFloat(event.target.value);
                    const { loanAmount, interestRate } = values;

                    const calculatedMonthlyPayment = calculateMonthlyPayment(
                      loanAmount,
                      newLoanTerm,
                      interestRate
                    );

                    setMonthlyPayment(
                      parseFloat(calculatedMonthlyPayment.toFixed(2))
                    );
                    setFieldValue('loanTerm', newLoanTerm);
                  }}
                />
                <Slider
                  defaultValue={12}
                  value={values.loanTerm}
                  onChange={(value) => {
                    const { loanAmount, interestRate } = values;

                    const calculatedMonthlyPayment = calculateMonthlyPayment(
                      loanAmount,
                      value,
                      interestRate
                    );

                    setMonthlyPayment(
                      parseFloat(calculatedMonthlyPayment.toFixed(2))
                    );
                    setFieldValue('loanTerm', value);
                  }}
                  max={180}
                />
              </div>
              <div className='col-md-4 pl-0'>
                <label htmlFor='interestRate' className={classes.inputLabel}>
                  Faiz dərəcəsi
                </label>
                <Field
                  id='interestRate'
                  name='interestRate'
                  className={classes.input}
                  onChange={(event) => {
                    const newInterestRate = parseFloat(event.target.value);
                    const { loanAmount, loanTerm } = values;

                    const calculatedMonthlyPayment = calculateMonthlyPayment(
                      loanAmount,
                      loanTerm,
                      newInterestRate
                    );

                    setMonthlyPayment(
                      parseFloat(calculatedMonthlyPayment.toFixed(2))
                    );
                    setFieldValue('interestRate', newInterestRate);
                  }}
                />
                <Slider
                  defaultValue={14}
                  value={values.interestRate}
                  onChange={(value) => {
                    const { loanAmount, loanTerm } = values;

                    const calculatedMonthlyPayment = calculateMonthlyPayment(
                      loanAmount,
                      loanTerm,
                      value
                    );

                    setMonthlyPayment(
                      parseFloat(calculatedMonthlyPayment.toFixed(2))
                    );
                    setFieldValue('interestRate', value);
                  }}
                />
              </div>
            </div>
            <div className='row mb-40'>
              <div className='col-12'>
                <label htmlFor='' className={classes.inputLabelMonth}>
                  Aylıq ödəniş
                </label>
                <br />
                <span className={classes.greenTxt}>{monthlyPayment} ₼</span>
              </div>
            </div>
            <div className='row mb-30'>
              <div className='col-md-6'>
                <label htmlFor='finCode' className={classes.inputLabelFin}>
                  FIN code{' '}
                </label>
                <br />
                <Field
                  id='finCode'
                  name='finCode'
                  className={classes.input}
                  placeholder='ABCDEFG'
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='phone' className={classes.inputLabelFin}>
                  Əlaqə nömrəsi
                </label>
                <br />
                <Field
                  id='phone'
                  name='phone'
                  className={classes.input}
                  placeholder='+994 00 000 00 00'
                />
              </div>
            </div>
            <div className='row align-center'>
              <div className='col-md-6'>
                <label className={classes.agree}>
                  <Field type='checkbox' name='agreeTerms' />
                  <Link to='#' className='ml-11'>
                    <span className={classes.agreeBlue}>AKB RAZILIQ</span>
                  </Link>
                  verilməsi üçün icazə
                </label>
              </div>
              <div className='col-md-6'>
                <ButtonComponent buttonText='Müraciət et' classN='muraciet' />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default LoanCalculatorComponent;
