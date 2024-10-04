import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {
  return (
    <div>
      <IoIosMail size={40} />
      <ImLinkedin size={40} />
      <FaGithub size={40} />
    </div>
  );
};

export default Contact;
