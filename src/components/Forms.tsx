import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import styled from 'styled-components'
import useInput from '../hooks/useInput'

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input + input {
    margin-top: var(--small);
  }

  textarea {
    margin-top: var(--small);
  }
`

const FormInput = styled.input`
  min-width: 312px;
  min-height: 48px;
  max-width: 466px;
  max-height: 62px;
  /* padding: 10px; */

  outline: none;
  background: var(--white);
  color: #000000;

  @media only screen and (min-width: 1200px) {
    min-width: 466px;
    min-height: 62px;
  }
`

const FormTextArea = styled.textarea`
  outline: none;
  resize: none;
  padding: 10px;
  min-width: 312px;
  min-height: 96px;
  max-width: 466px;

  outline: none;
  color: #000000;
  background: var(--white);

  ::placeholder {
    font-size: 40px;
  }

  @media only screen and (min-width: 1200px) {
    min-width: 466px;
    min-height: 149px;
  }
`

type FormsProps = {
  borderColor?: string
}

const Forms = ({ borderColor = '#bababa' }: FormsProps) => {
  const name = useInput('')
  const companie = useInput('')
  const email = useInput('')
  const demmand = useInput('')

  const { t } = useTranslation('common')

  return (
    <Form>
      <FormInput
        placeholder={t('nome')}
        style={{ border: `1px solid` + borderColor }}
        value={name.value}
        onChange={name.onChange}
      />
      <FormInput
        placeholder={t('empresa')}
        style={{ border: `1px solid` + borderColor }}
        value={companie.value}
        onChange={companie.onChange}
      />
      <FormInput
        placeholder={t('email')}
        style={{ border: `1px solid` + borderColor }}
        value={email.value}
        onChange={email.onChange}
      />
      <FormTextArea
        placeholder={t('demanda')}
        style={{ border: `1px solid` + borderColor }}
        value={demmand.value}
        onChange={demmand.onChange}
      />
    </Form>
  )
}

export default Forms
