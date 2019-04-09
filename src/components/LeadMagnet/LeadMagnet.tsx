import React, { useState } from 'react'
import Axios from 'axios'

import './lead-magnet.css'

type Input = React.ChangeEvent<HTMLInputElement>

interface Props {
  toggleForm: () => void
}

const LeadMagnet = ({ toggleForm }: Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const baseURL = 'https://ho9oks.zapier.com/hooks/catch/623075/nxnrmx'
    const response = await Axios.get(
      `${baseURL}?name=${name}&phone=${phone}&email=${email}`
    )
    console.log(response.data)
    setSubmitting(false)
  }
  return (
    <div className="lead-magnet" onClick={toggleForm}>
      <div
        className="content-container"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <h2>Get your welcome packet</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e: Input) => setName(e.currentTarget.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: Input) => setEmail(e.currentTarget.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e: Input) => setPhone(e.currentTarget.value)}
            required
          />
          <input
            type="submit"
            value={submitting ? 'Submitting...' : 'Submit'}
          />
        </form>
      </div>
    </div>
  )
}

export default LeadMagnet
