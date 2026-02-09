exports.RegisterPage = class RegisterPage{
    constructor (page){
        this.page = page
        this.first_name_textbox = page.locator('input[name="firstName"]')
        this.last_name_textbox = page.locator('input[name="lastName"]')
        this.phone_number_textbox = page.locator('input[name="phone"]')
        this.email_address_textbox = page.locator('#userName')
        this.address_textbox = page.locator('input[name="address1"]')
        this.country_select = page.getByRole('combobox')
        this.city_textbox = page.locator('input[name="city"]')
        this.username_textbox = page.locator('#email')
        this.password_textbox = page.locator('input[name="password"]')
        this.confirm_password_textbox = page.locator('input[name="confirmPassword"]')
        this.submit_button = page.getByRole('button', { name: 'Submit' })
    }

    async Register(firstname, lastname, phonenumber, emailid, address, country, city, username, password, confirmpassword){
        await this.first_name_textbox.fill(firstname)
        await this.last_name_textbox.fill(lastname)
        await this.phone_number_textbox.fill(phonenumber)
        await this.email_address_textbox.fill(emailid)
        await this.address_textbox.fill(address)
        await this.country_select.selectOption(country)
        await this.city_textbox.fill(city)
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.confirm_password_textbox.fill(confirmpassword)
        await this.submit_button.click()

    }
}