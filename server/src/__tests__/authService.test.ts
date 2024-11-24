import { signup } from '../auth/authService';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
jest.mock('nodemailer');

test('should send verification email', async () => {
  const sendMailMock = jest.fn();
  process.env.EMAIL_USER = 'test@email.com';
  process.env.EMAIL_PASS = 'testpass';
  process.env.EMAIL_HOST = 'smtp.host.com';

  (nodemailer.createTransport as jest.Mock).mockReturnValue({
    sendMail: sendMailMock,
  });

  const user = {
    email: 'test@example.com',
    firstName: 'Ana',
    lastName: 'Anic',
    password: 'test',
    verified: false,
  };

  await signup(user);

  expect(sendMailMock).toHaveBeenCalled();
  expect(sendMailMock.mock.calls[0][0]).toMatchObject({
    to: 'test@example.com',
    subject: 'Verify Your Email to Stay Updated with News Portal',
  });
});
