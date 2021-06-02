import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';

const showMessage = (type, message) => {
  switch (type) {
    case 'error':
      return Modal.success({
        content: message
      });
    case 'success':
      return Modal.success({
        content: message
      });
    default:
      return null;
  }
};

const FetchApiHook = () => {
  const dispatch = useDispatch();

  const handleFailure = (error, onFailure) => {
    if (error.status === 500) {
      showMessage('error', '500 Internal server error!!!');
    } else if (error.status === 403) {
      showMessage('error', 'Permission Denied.');
    } else if (error.status === 404) {
      showMessage('error', 'Not found');
    } else {
      showMessage('error', error.message);
    }

    if (typeof onFailure === 'function') onFailure();
  };

  const handleSuccess = (response, onSuccess) => {
    if (response?.message) showMessage('success', response.message);
    if (typeof onSuccess === 'function') onSuccess(response);
  };

  const call = ({ type, params, onSuccess = null, onFailure = null }) => {
    dispatch({
      type,
      params,
      onSuccess: (response) => handleSuccess(response, onSuccess),
      onFailure: (error) => handleFailure(error, onFailure)
    });
  };

  return { call };
};

export default FetchApiHook;
