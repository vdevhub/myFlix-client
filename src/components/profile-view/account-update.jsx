import React from 'react'
import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export const AccountUpdate = ({ formData, handleUpdate, handleSubmit, handleDeleteAccount }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Account Information</h2>
      <Form.Group className='mb-2'>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          minLength={4}
          value={formData.username}
          onChange={(e) => handleUpdate(e)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-2'>
        <Form.Label>Password:
        </Form.Label>
        <Form.Control
          type="password"
          minLength={10}
          value={formData.password}
          onChange={(e) => handleUpdate(e)}
          required
        />
      </Form.Group >
      <Form.Group className='mb-2'>
        <Form.Label> Email: </Form.Label>
        <Form.Control
          type="email"
          value={formData.email}
          onChange={(e) => handleUpdate(e)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>Birthdate:</Form.Label>
        <Form.Control
          type="date"
          value={formData.birthday.slice(0, 10)}
          onChange={(e) => handleUpdate(e)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" >Update</Button>
      <Button
        onClick={() => handleDeleteAccount()}
        variant="outline-secondary"
        className="mx-3" >
        Delete account
      </Button>
    </Form>
  )
}
AccountUpdate.propTypes = {
  formData: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDeleteAccount: PropTypes.func.isRequired
};