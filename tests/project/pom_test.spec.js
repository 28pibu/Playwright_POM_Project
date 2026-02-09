import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/homepage';
import { RegisterPage } from '../../pages/registerpage';
import { RegisterSuccessPage } from '../../pages/registersuccesspage';

test('Test the Mercury Tours Website', async ({ page }) => {

  // Test data (defined ONCE)
  const firstName = 'Demo';
  const lastName = 'Test';
  const phone = '0779841257';
  const email = 'demo.t@gmail.com';
  const address = '131 3/1 Park Street';
  const country = 'AUSTRALIA';
  const city = 'Sydney';
  const username = 'Dmeo1';
  const password = '123456789';

  // Expected success message (dynamic)
  const successMessage = `Dear ${firstName} ${lastName},`;

  const Home = new HomePage(page)
  await Home.gotoHomePage()

  const Register = new RegisterPage(page)
  await Register.Register(firstName,lastName,phone,email,address,country,city,username,password,password)

  const RegisterionSuccess = new RegisterSuccessPage(page)
  await RegisterionSuccess.RegisterionSuccess(successMessage)

  
});